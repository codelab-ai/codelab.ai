import { RequestValidationError } from '@codelab/backend'

export namespace DeleteVertexErrors {
  export class VertexNotFoundError extends RequestValidationError {
    constructor(id: string) {
      super(`Vertex with id ${id} was not found`)
    }
  }
}