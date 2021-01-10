import { VertexID } from '../../../../common/CommonTypes'
import { AddChildNodeVertexType } from '../inputTypes/AddChildNodeVertexType'

export class AddChildNodeRequest {
  declare graphId: string

  declare parentVertexId: VertexID

  declare vertex: AddChildNodeVertexType

  declare order?: number
}
