export type ModelIds =
  | 'appId'
  | 'pageId'
  | 'graphId'
  | 'vertexId'
  | 'edgeId'
  | 'styleId'
  | ''

export type PropsWithIds<T extends ModelIds = ModelIds> = {
  [K in T]: string
}

// Example:
//
// type HomePageProps = PropsWithIds<'appId' | 'pageId'>
