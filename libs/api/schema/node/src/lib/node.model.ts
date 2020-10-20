import {
  Directive,
  Field,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql'
// import { NodeType } from '@codelab/shared/interface/node'

export enum NodeType {
  REACT_BUTTON,
  REACT_DIV,
}

registerEnumType(NodeType, { name: 'NodeType' })

@ObjectType()
@Directive('@key(fields: "id")')
export class Node {
  @Field((type) => ID)
  declare id: number

  @Field(() => NodeType)
  declare type: NodeType

  constructor(node: Partial<Node>) {
    Object.assign(node)
  }
}
