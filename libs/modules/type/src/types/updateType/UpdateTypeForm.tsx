import {
  __TypeFragment,
  refetchGetTypesQuery,
  useUpdateEnumTypeMutation,
  useUpdatePrimitiveTypeMutation,
  useUpdateTypeMutation,
} from '@codelab/codegen/graphql'
import {
  createNotificationHandler,
  EntityType,
  FormUniforms,
  UniFormUseCaseProps,
  useCrudModalForm,
} from '@codelab/frontend/shared'
import React, { useCallback, useEffect, useRef } from 'react'
import { AutoField, AutoFields } from 'uniforms-antd'
import { TypeKind } from '../../shared'
import { TypeModels } from '../TypeModels'
import { UpdateTypeSchema, updateTypeSchema } from './updateTypeSchema'

const typenameToKind = (typename: string) => {
  switch (typename) {
    case TypeModels.Interface:
      return TypeKind.Interface
    case TypeModels.PrimitiveType:
      return TypeKind.Primitive
    case TypeModels.ArrayType:
      return TypeKind.Array
    case TypeModels.EnumType:
      return TypeKind.Enum
  }

  throw new Error("Can't recognize typename of type")
}

export const UpdateTypeForm = (
  props: UniFormUseCaseProps<UpdateTypeSchema>,
) => {
  const { setLoading, state, reset } = useCrudModalForm(EntityType.Type)
  const mutationOptions = { refetchQueries: [refetchGetTypesQuery()] }

  const [mutatePrimitive, primitiveMutationData] =
    useUpdatePrimitiveTypeMutation(mutationOptions)

  const [mutateEnum, enumMutationData] =
    useUpdateEnumTypeMutation(mutationOptions)

  const [mutateType, typeMutationData] = useUpdateTypeMutation(mutationOptions)

  useEffect(() => {
    const loading =
      primitiveMutationData.loading ||
      enumMutationData.loading ||
      typeMutationData.loading

    setLoading(loading)
  }, [
    primitiveMutationData.loading,
    enumMutationData.loading,
    typeMutationData.loading,
    setLoading,
  ])

  const handleSubmit = useCallback(
    (submitData: UpdateTypeSchema) => {
      const kind = typenameToKind(state?.metadata?.__typename)

      switch (kind) {
        case TypeKind.Primitive:
          if (!submitData.primitiveKind) {
            throw new Error('Primitive type not set')
          }

          return mutatePrimitive({
            variables: {
              input: {
                typeId: state.updateId,
                updateData: {
                  name: submitData.name,
                  primitiveKind: submitData.primitiveKind,
                },
              },
            },
          })
        case TypeKind.Enum:
          if (!submitData.allowedValues) {
            throw new Error('Allowed values not set')
          }

          return mutateEnum({
            variables: {
              input: {
                typeId: state.updateId,
                updateData: {
                  name: submitData.name,
                  allowedValues: submitData.allowedValues.map((av) => ({
                    value: av.value,
                    name: av.name || undefined,
                  })),
                },
              },
            },
          })
        default:
          return mutateType({
            variables: {
              input: {
                typeId: state.updateId,
                updateData: {
                  name: submitData.name,
                },
              },
            },
          })
      }
    },
    [mutateEnum, mutatePrimitive, mutateType, state],
  )

  const kind = state?.metadata?.__typename
    ? typenameToKind(state?.metadata?.__typename)
    : null

  const type = state.metadata as __TypeFragment

  const modelRef = useRef({
    name: type?.name,
    primitiveKind:
      type?.__typename === TypeModels.PrimitiveType
        ? type?.primitiveKind
        : undefined,
    allowedValues:
      type?.__typename === TypeModels.EnumType
        ? type?.allowedValues
        : undefined,
  })

  if (!type || !state.updateId) {
    return null
  }

  return (
    <FormUniforms<UpdateTypeSchema>
      onSubmit={handleSubmit}
      schema={updateTypeSchema}
      onSubmitError={createNotificationHandler({
        title: 'Error while updating type',
      })}
      onSubmitSuccess={() => reset()}
      model={modelRef.current}
      {...props}
    >
      <AutoFields fields={['name']} />

      {kind === TypeKind.Primitive && <AutoField name={'primitiveKind'} />}
      {kind === TypeKind.Enum && <AutoField name={'allowedValues'} />}
    </FormUniforms>
  )
}
