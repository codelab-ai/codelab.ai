import objectMapper from 'object-mapper'
import { GraphA } from '@codelab/alpha/shared/interface/graph-v2'
import { ApolloQueryMapper } from '@codelab/alpha/shared/interface/mapper'

/**
 * Maps from apollo query results to EntityA
 */
export const queryToCollection: ApolloQueryMapper<any, GraphA> = (original) => {
  const graphMapper = {
    id: 'id',
    label: 'label',
    vertices: 'vertices',
    edges: 'edges',
  }

  const resultsMapper = {
    'data.graph': {
      key: 'data',
      transform: (sourceValue: Array<any>) => {
        return sourceValue.map((graph) => {
          return objectMapper(graph, graphMapper)
        })
      },
    },
  }

  return objectMapper(original, resultsMapper)
}
