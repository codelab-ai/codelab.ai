import { JSONSchema7 } from 'json-schema'
import React from 'react'
import { CodelabAccordionTemplate } from './rjsf-templates/CodelabAccordionTemplate'
import { CodelabTabsTemplate } from './rjsf-templates/CodelabTabsTemplate'
import { ObjectGridTemplate } from './rjsf-templates/ObjectGridTemplate'
import {
  CodelabFieldTemplate,
  CodelabSelectWidget,
} from '@codelab/alpha/ui/component'
import { JsonSchemaForm } from '@codelab/frontend'

const firstName = {
  type: 'string',
  title: 'First name',
}

const lastName = {
  type: 'string',
  title: 'Last name',
}

const address = {
  type: 'object',
  title: 'Address - Object Test',
  properties: {
    streetName: { type: 'string', title: 'Street Name' },
    houseNumber: { type: 'string', title: 'House Number' },
    postalCode: { type: 'string', title: 'Postal Code' },
    phoneNumber: { type: 'string', title: 'Phone Number' },
  },
}

const schema: JSONSchema7 = {
  title: 'Todo',
  type: 'object',
  // required: ['password'],
  properties: {
    info: {
      type: 'object',
      title: 'Information',
      properties: {
        firstName: firstName as JSONSchema7,
        lastName: lastName as JSONSchema7,
        bio: {
          type: 'string',
          title: 'Bio',
        },
      },
    },
    password: {
      type: 'string',
      title: 'Password',
    },
    age: {
      type: 'integer',
      title: 'Age',
    },
    tabsSample: {
      type: 'object',
      title: 'Tabs Example Within Grid',
      properties: {
        firstName: firstName as JSONSchema7,
        lastName: lastName as JSONSchema7,
        address: address as JSONSchema7,
      },
    },
    accordionSample: {
      type: 'object',
      title: 'Accordion Example Within Grid',
      properties: {
        firstName: firstName as JSONSchema7,
        lastName: lastName as JSONSchema7,
        address: address as JSONSchema7,
      },
    },
    stepsSample: {
      type: 'object',
      title: 'Steps Example Within Grid',
      properties: {
        firstName: firstName as JSONSchema7,
        lastName: lastName as JSONSchema7,
        address: address as JSONSchema7,
      },
    },
    searchSelect: {
      type: 'object',
      title: 'Search Select widget test',
      properties: {
        selectWidget: {
          type: 'string',
          enum: ['Option 1', 'Option 2', 'Option 3'],
        },
      },
    },
    address: address as JSONSchema7,
    arrTest: {
      type: 'array',
      title: 'Array Test With Grid',
      items: {
        type: 'object',
        properties: {
          field1: { type: 'string' },
          field2: { type: 'string' },
        },
      },
    },
  },
}

const uiSchema = {
  'ui:ObjectFieldTemplate': ObjectGridTemplate,
  address: {
    'ui:ObjectFieldTemplate': ObjectGridTemplate,
    'ui:spacing': 16,
    'ui:layout': [
      {
        streetName: { span: 10 },
        houseNumber: { span: 14 },
        postalCode: { span: 12 },
        phoneNumber: { span: 12 },
      },
    ],
  },
  info: {
    'ui:ObjectFieldTemplate': ObjectGridTemplate,
    'ui:spacing': 16,
    'ui:layout': [
      {
        'ui:order': ['lastName', 'firstName'],
        firstName: { span: 12 },
        lastName: { span: 12 },
      },
      {
        bio: { span: 24 },
      },
    ],
  },
  searchSelect: {
    'ui:ObjectFieldTemplate': ObjectGridTemplate,
    'ui:spacing': 16,
    'ui:layout': [{ selectWidget: { span: 24 } }],
    selectWidget: {
      'ui:widget': CodelabSelectWidget,
    },
  },
  arrTest: {
    items: {
      'ui:ObjectFieldTemplate': ObjectGridTemplate,
      'ui:spacing': 16,
      'ui:layout': [
        {
          field1: { span: 6 },
          field2: { span: 6 },
        },
      ],
    },
  },
  tabsSample: {
    'ui:ObjectFieldTemplate': CodelabTabsTemplate,
    'ui:groups': [
      { title: 'Info', fields: ['firstName', 'lastName'] },
      { title: 'Address', fields: ['address'] },
    ],
  },
  accordionSample: {
    'ui:ObjectFieldTemplate': CodelabAccordionTemplate,
    'ui:groups': [
      { title: 'Info', fields: ['firstName', 'lastName'] },
      { title: 'Address', fields: ['address'] },
    ],
  },
  stepsSample: {
    'ui:ObjectFieldTemplate': CodelabTabsTemplate,
    'ui:groups': [
      {
        title: 'Info',
        stepContent: 'Test Content Info',
        fields: ['firstName', 'lastName'],
      },
      {
        title: 'Address',
        stepContent: 'Test Content Address',
        fields: ['address'],
      },
    ],
  },
  'ui:spacing': 16,
  'ui:layout': [
    {
      info: { span: 12 },
      address: { span: 12 },
    },
    {
      age: { span: 12 },
      password: { span: 12 },
    },
    {
      tabsSample: { span: 12 },
      accordionSample: { span: 12 },
    },
    {
      stepsSample: { span: 24 },
    },
    {
      arrTest: { span: 24 },
    },
  ],
}

export const gridsFormV2Props = {
  schema,
  uiSchema,
}

export const GridsFormV2 = () => {
  return (
    <JsonSchemaForm
      {...gridsFormV2Props}
      FieldTemplate={CodelabFieldTemplate}
    />
  )
}