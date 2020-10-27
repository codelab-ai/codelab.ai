import { join } from 'path'
import { Tree } from '@angular-devkit/schematics'
import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { createEmptyWorkspace } from '@nrwl/workspace/testing'
import * as requireFromString from 'require-from-string'
import { NestSchematicSchema } from './schema'

const SCHEMATIC_NAME = 'nest-lib'

describe('@codelab/schematics:nest-lib', () => {
  let appTree: Tree
  const options: NestSchematicSchema = { name: 'test' }

  const testRunner = new SchematicTestRunner(
    '@codelab/schematics',
    join(__dirname, '../../../../collection.json'),
  )

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty())
  })

  it('should run successfully', async () => {
    await expect(
      testRunner
        .runSchematicAsync(SCHEMATIC_NAME, options, appTree)
        .toPromise(),
    ).resolves.not.toThrowError()
  })

  describe('Files removed', () => {
    it('should remove root .eslintrc generated by @nrwl/nest:library', async () => {
      appTree = await testRunner
        .runSchematicAsync(SCHEMATIC_NAME, options, appTree)
        .toPromise()

      const eslintrc = appTree.exists('/.eslintrc')

      expect(eslintrc).toBeFalsy()
    })
  })

  describe('Files created in lib folder', () => {
    it('should generate config files under project folder', async () => {
      appTree = await testRunner
        .runSchematicAsync(SCHEMATIC_NAME, options, appTree)
        .toPromise()

      const file = appTree.read('/libs/test/.eslintrc.js')?.toString() ?? ''
      const eslintrcContents = requireFromString(file)
      const eslintrcJs = appTree.exists('/libs/test/.eslintrc.js')
      const tsconfigEslintJson = appTree.exists(
        '/libs/test/tsconfig.eslint.json',
      )

      expect(eslintrcJs).toBeTruthy()
      expect(eslintrcContents.extends).toBe('../../.eslintrc.js')
      expect(tsconfigEslintJson).toBeTruthy()
    })
  })
})
