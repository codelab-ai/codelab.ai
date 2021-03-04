// Decorator for Tabs, Accordion and Steps

const metadataKey = 'RjsfGroup'

export interface IUiSchemaGroup {
  ObjectFieldTemplate: string
}

export const RjsfGroup = (props: IUiSchemaGroup) => {
  return (target: Function) => {
    Reflect.defineMetadata(metadataKey, props, target)
  }
}

export const getUiSchemaGroup = (
  target: Function | undefined,
): IUiSchemaGroup => {
  if (!target) {
    throw new Error('Target is undefined')
  }

  return Reflect.getOwnMetadata(metadataKey, target)
}
