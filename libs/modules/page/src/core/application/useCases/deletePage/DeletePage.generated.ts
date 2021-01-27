import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as Types from '../../../../../../../../types/types.generated'

export const DeletePageGql = gql`
  mutation DeletePage($input: DeletePageInput!) {
    deletePage(input: $input) {
      title
    }
  }
`
export type DeletePageMutationFn = Apollo.MutationFunction<
  Types.DeletePageMutation,
  Types.DeletePageMutationVariables
>

/**
 * __useDeletePageMutation__
 *
 * To run a mutation, you first call `useDeletePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePageMutation, { data, loading, error }] = useDeletePageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeletePageMutation,
    Types.DeletePageMutationVariables
  >,
) {
  return Apollo.useMutation<
    Types.DeletePageMutation,
    Types.DeletePageMutationVariables
  >(DeletePageGql, baseOptions)
}
export type DeletePageMutationHookResult = ReturnType<
  typeof useDeletePageMutation
>
export type DeletePageMutationResult = Apollo.MutationResult<Types.DeletePageMutation>
export type DeletePageMutationOptions = Apollo.BaseMutationOptions<
  Types.DeletePageMutation,
  Types.DeletePageMutationVariables
>
