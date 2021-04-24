import { Atom_Type_Enum, CreateAtomGql } from '@codelab/hasura'
import { print } from 'graphql'
import { sample } from 'lodash'

//Those are in the seeds, so we know they exist
//If we remove them from the seeds, need to add them dynamically here

const appId = 'c83654f1-f89f-48a0-8741-acf91e38c888'
const pageId = '4ccde878-25d3-4b36-a9b8-67fcec986e7b'

const deleteAllAtoms = () => {
  return cy.hasuraAdminRequest({
    query: `
        mutation DeleteAllAtoms {
          delete_atom(where:{}) {
            affected_rows
          }
        }
      `,
  })
}

const openAtomsTab = () => {
  cy.visit(`/apps/${appId}/pages/${pageId}`)
  cy.get('[data-test-id=atom-tab-trigger]').click()
}

const randomAtomType = () =>
  sample(Object.values(Atom_Type_Enum)) as Atom_Type_Enum

const insertOneAtom = (atomType: Atom_Type_Enum) => {
  return cy.hasuraAdminRequest({
    query: print(CreateAtomGql),
    variables: {
      data: {
        type: atomType,
      },
    },
  })
}

describe('Atom', () => {
  before(() => {
    cy.login()
  })

  it('creates atom', () => {
    cy.intercept('/api/graphql').as('graphql')
    deleteAllAtoms()
    openAtomsTab()

    //We should have no items in the list
    cy.getByTestId(`get-atoms-list-item`).should('not.exist')

    cy.getByTestId(`create-atom-button`).click()
    cy.getByTestId(`create-atom-form`).find('div[name=type] input').click()

    cy.get('div#create-atom-form-0000_list + div div[__typename=atom_type]')
      .first()
      .then((el) => {
        cy.log(el.attr('type') as any)

        const selectedAtomType = el.attr('type')

        el.trigger('click')

        cy.get('.create-atom-modal button[type=submit]').click()

        cy.wait('@graphql')

        //modal should close
        cy.getByTestId(`create-atom-form`).should('not.exist')
        cy.get('.create-atom-modal').should('not.exist')

        //We should have the new item in the list
        cy.get(
          `[data-test-id=get-atoms-list-item][data-test-atom-type=${selectedAtomType}]`,
        )
      })
  })

  it('updates atom', () => {
    cy.intercept('/api/graphql').as('graphql')

    deleteAllAtoms().then(() => {
      //Insert one random atom
      const atomType = randomAtomType()

      insertOneAtom(atomType).then(() => {
        openAtomsTab()

        //We should have the new atom in the list, click its update button
        cy.get(
          `[data-test-id=get-atoms-list-item][data-test-atom-type=${atomType}]`,
        )
          .find('[data-test-id=atom-update-button]')
          .click()

        //We should have an existing type select input with the atom type we defined
        cy.getByTestId(`update-atom-form`)
          .find(`.ant-select-selection-item[title=${atomType}]`)
          .click()

        cy.get('div#update-atom-form-0000_list + div div[__typename=atom_type]')
          .first()
          .then((el) => {
            cy.log(el.attr('type') as any)

            const selectedAtomType = el.attr('type')

            el.trigger('click')

            cy.get('.update-atom-modal button[type=submit]').click()

            cy.wait('@graphql')

            //modal should close
            cy.getByTestId('update-atom-form').should('not.exist')
            cy.get('.update-atom-modal').should('not.exist')

            //We should have the new item in the list
            cy.get(
              `[data-test-id=get-atoms-list-item][data-test-atom-type=${selectedAtomType}]`,
            )
          })
      })
    })
  })

  it('deletes atom', () => {
    cy.intercept('/api/graphql').as('graphql')

    deleteAllAtoms().then(() => {
      const atomType = randomAtomType()

      insertOneAtom(atomType).then(() => {
        openAtomsTab()

        //We should have the new atom in the list, click its delete button
        cy.get(
          `[data-test-id=get-atoms-list-item][data-test-atom-type=${atomType}]`,
        )
          .find('[data-test-id=atom-delete-button]')
          .click()

        cy.get('.delete-atom-modal button[type=submit]').click()

        cy.wait('@graphql')

        cy.getByTestId('delete-atom-form').should('not.exist')
        cy.get('.delete-atom-modal').should('not.exist')

        //We should not have any items in the list
        cy.getByTestId(`get-atoms-list-item`).should('not.exist')
      })
    })
  })
})
