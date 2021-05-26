import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = { operationName: 'api' }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type App = {
  id: Scalars['ID']
  ownerId: Scalars['String']
  name: Scalars['String']
}

export type Atom = {
  id: Scalars['ID']
  type: AtomType
  label: Scalars['String']
}

export enum AtomType {
  ReactAffix = 'ReactAffix',
  ReactAlert = 'ReactAlert',
  ReactAnchor = 'ReactAnchor',
  ReactAnchorLink = 'ReactAnchorLink',
  ReactAutoComplete = 'ReactAutoComplete',
  ReactAvatar = 'ReactAvatar',
  ReactBackTop = 'ReactBackTop',
  ReactBadge = 'ReactBadge',
  ReactBreadcrumb = 'ReactBreadcrumb',
  ReactBreadcrumbItem = 'ReactBreadcrumbItem',
  ReactButton = 'ReactButton',
  ReactCalendar = 'ReactCalendar',
  ReactCard = 'ReactCard',
  ReactCardGrid = 'ReactCardGrid',
  ReactCardMeta = 'ReactCardMeta',
  ReactCarousel = 'ReactCarousel',
  ReactCascader = 'ReactCascader',
  ReactCheckbox = 'ReactCheckbox',
  ReactCollapse = 'ReactCollapse',
  ReactCollapsePanel = 'ReactCollapsePanel',
  ReactComment = 'ReactComment',
  ReactConfigProvider = 'ReactConfigProvider',
  ReactDatePicker = 'ReactDatePicker',
  ReactDescriptions = 'ReactDescriptions',
  ReactDescriptionsItem = 'ReactDescriptionsItem',
  ReactDivider = 'ReactDivider',
  ReactDrawer = 'ReactDrawer',
  ReactDropdown = 'ReactDropdown',
  ReactEmpty = 'ReactEmpty',
  ReactForm = 'ReactForm',
  ReactFormItem = 'ReactFormItem',
  ReactFormItemHook = 'ReactFormItemHook',
  ReactFormList = 'ReactFormList',
  ReactFragment = 'ReactFragment',
  ReactGridCol = 'ReactGridCol',
  ReactGridRow = 'ReactGridRow',
  ReactHtmlA = 'ReactHtmlA',
  ReactHtmlDiv = 'ReactHtmlDiv',
  ReactHtmlP = 'ReactHtmlP',
  ReactHtmlSpan = 'ReactHtmlSpan',
  ReactIcon = 'ReactIcon',
  ReactInput = 'ReactInput',
  ReactInputNumber = 'ReactInputNumber',
  ReactLayout = 'ReactLayout',
  ReactLayoutContent = 'ReactLayoutContent',
  ReactLayoutFooter = 'ReactLayoutFooter',
  ReactLayoutHeader = 'ReactLayoutHeader',
  ReactLayoutSider = 'ReactLayoutSider',
  ReactList = 'ReactList',
  ReactListItem = 'ReactListItem',
  ReactListItemMeta = 'ReactListItemMeta',
  ReactMapper = 'ReactMapper',
  ReactMentions = 'ReactMentions',
  ReactMentionsOption = 'ReactMentionsOption',
  ReactMenu = 'ReactMenu',
  ReactMenuItem = 'ReactMenuItem',
  ReactMenuItemGroup = 'ReactMenuItemGroup',
  ReactMenuSubMenu = 'ReactMenuSubMenu',
  ReactModal = 'ReactModal',
  ReactPageHeader = 'ReactPageHeader',
  ReactPageContainer = 'ReactPageContainer',
  ReactPagination = 'ReactPagination',
  ReactPopconfirm = 'ReactPopconfirm',
  ReactPopover = 'ReactPopover',
  ReactProgress = 'ReactProgress',
  ReactProvider = 'ReactProvider',
  ReactRglContainer = 'ReactRglContainer',
  ReactRglItem = 'ReactRglItem',
  ReactRglResponsiveContainer = 'ReactRglResponsiveContainer',
  ReactRadio = 'ReactRadio',
  ReactRadioGroup = 'ReactRadioGroup',
  ReactRate = 'ReactRate',
  ReactRenderComponent = 'ReactRenderComponent',
  ReactRenderContainer = 'ReactRenderContainer',
  ReactResult = 'ReactResult',
  ReactSelect = 'ReactSelect',
  ReactSelectOption = 'ReactSelectOption',
  ReactSkeleton = 'ReactSkeleton',
  ReactSlider = 'ReactSlider',
  ReactSpace = 'ReactSpace',
  ReactSpin = 'ReactSpin',
  ReactStatistic = 'ReactStatistic',
  ReactSteps = 'ReactSteps',
  ReactStepsStep = 'ReactStepsStep',
  ReactSwitch = 'ReactSwitch',
  ReactTable = 'ReactTable',
  ReactTabs = 'ReactTabs',
  ReactTabsTabPane = 'ReactTabsTabPane',
  ReactTag = 'ReactTag',
  ReactText = 'ReactText',
  ReactTimePicker = 'ReactTimePicker',
  ReactTimeline = 'ReactTimeline',
  ReactTimelineItem = 'ReactTimelineItem',
  ReactTooltip = 'ReactTooltip',
  ReactTransfer = 'ReactTransfer',
  ReactTree = 'ReactTree',
  ReactTreeNode = 'ReactTreeNode',
  ReactTreeSelect = 'ReactTreeSelect',
  ReactTypography = 'ReactTypography',
  ReactTypographyParagraph = 'ReactTypographyParagraph',
  ReactTypographyText = 'ReactTypographyText',
  ReactTypographyTitle = 'ReactTypographyTitle',
  ReactUpload = 'ReactUpload',
}

export type CreateAppInput = {
  name: Scalars['String']
}

export type CreateAtomInput = {
  label: Scalars['String']
  type: AtomType
}

export type CreatePageElementInput = {
  name: Scalars['String']
  atomId?: Maybe<Scalars['String']>
  parentPageElementId: Scalars['String']
  /** Leave it out to automatically set it as the last order of all the children */
  order?: Maybe<Scalars['Int']>
}

export type CreatePageInput = {
  name: Scalars['String']
  appId: Scalars['String']
}

export type DeleteAppInput = {
  appId: Scalars['String']
}

export type DeleteAtomInput = {
  atomId: Scalars['String']
}

export type DeletePageElementInput = {
  pageElementId: Scalars['String']
}

export type DeleteResponse = {
  affected: Scalars['Int']
}

export type DeleteUserInput = {
  userId: Scalars['String']
}

export type GetAppInput = {
  appId: Scalars['String']
}

export type GetAtomInput = {
  atomId: Scalars['String']
}

export type GetPageElementInput = {
  pageElementId: Scalars['String']
}

export type GetPageElementRootInput = {
  pageElementId: Scalars['String']
}

export type GetPageInput = {
  pageId: Scalars['String']
}

export type GetPagesInput = {
  appId: Scalars['String']
}

export type GetUsersInput = {
  page: Scalars['Int']
  perPage: Scalars['Int']
  query: Scalars['String']
  sort: Scalars['String']
}

export type Mutation = {
  updateUser: User
  deleteUser: Scalars['Boolean']
  createApp: App
  updateApp: App
  deleteApp: App
  createPage: Page
  createPageElement: PageElement
  deletePageElement: DeleteResponse
  createAtom: Atom
  deleteAtom: Atom
  updateAtom: Atom
}

export type MutationUpdateUserArgs = {
  input: UpdateUserInput
}

export type MutationDeleteUserArgs = {
  input: DeleteUserInput
}

export type MutationCreateAppArgs = {
  input: CreateAppInput
}

export type MutationUpdateAppArgs = {
  input: UpdateAppInput
}

export type MutationDeleteAppArgs = {
  input: DeleteAppInput
}

export type MutationCreatePageArgs = {
  input: CreatePageInput
}

export type MutationCreatePageElementArgs = {
  input: CreatePageElementInput
}

export type MutationDeletePageElementArgs = {
  input: DeletePageElementInput
}

export type MutationCreateAtomArgs = {
  input: CreateAtomInput
}

export type MutationDeleteAtomArgs = {
  input: DeleteAtomInput
}

export type MutationUpdateAtomArgs = {
  input: UpdateAtomInput
}

export type Page = {
  id: Scalars['ID']
  name: Scalars['String']
  app: App
  rootElement: PageElementRoot
}

export type PageElement = {
  id: Scalars['ID']
  name: Scalars['String']
  atom?: Maybe<Atom>
}

export type PageElementLink = {
  /** The id of the source PageElement */
  from: Scalars['String']
  /** The id of the target PageElement */
  to: Scalars['String']
  order: Scalars['Int']
}

export type PageElementRoot = {
  id: Scalars['ID']
  name: Scalars['String']
  atom?: Maybe<Atom>
  /** All descendant PageElements that are under this root, at any level */
  descendants: Array<PageElement>
  /** All the links connecting the descendant page elements */
  links: Array<PageElementLink>
}

export type Prop = {
  id: Scalars['ID']
  key?: Maybe<Scalars['String']>
  type: ValueType
  description?: Maybe<Scalars['String']>
  props?: Maybe<Array<Prop>>
}

export type Query = {
  getMe: User
  getUsers: Array<User>
  getApp?: Maybe<App>
  getApps: Array<App>
  getPages: Array<Page>
  getPage?: Maybe<Page>
  getPageElement?: Maybe<PageElement>
  /** Aggregates the requested page element and all of its descendant elements (infinitely deep) in the form of array of PageElement and array of PageElementLink */
  getPageElementRoot?: Maybe<PageElementRoot>
  getAtoms: Array<Atom>
  getAtom?: Maybe<Atom>
  getValueTypes: Array<ValueType>
  getProps: Array<Prop>
}

export type QueryGetUsersArgs = {
  input?: Maybe<GetUsersInput>
}

export type QueryGetAppArgs = {
  input: GetAppInput
}

export type QueryGetPagesArgs = {
  input: GetPagesInput
}

export type QueryGetPageArgs = {
  input: GetPageInput
}

export type QueryGetPageElementArgs = {
  input: GetPageElementInput
}

export type QueryGetPageElementRootArgs = {
  input: GetPageElementRootInput
}

export type QueryGetAtomArgs = {
  input: GetAtomInput
}

export type UpdateAppData = {
  name: Scalars['String']
}

export type UpdateAppInput = {
  appId: Scalars['String']
  updateData: UpdateAppData
}

export type UpdateAtomData = {
  type: AtomType
}

export type UpdateAtomInput = {
  atomId: Scalars['String']
  updateData: UpdateAtomData
}

export type UpdateUserData = {
  family_name?: Maybe<Scalars['String']>
  given_name?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export type UpdateUserInput = {
  userId: Scalars['String']
  updateData: UpdateUserData
}

export type User = {
  blocked?: Maybe<Scalars['Boolean']>
  created_at?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  email_verified?: Maybe<Scalars['Boolean']>
  family_name?: Maybe<Scalars['String']>
  given_name?: Maybe<Scalars['String']>
  last_ip?: Maybe<Scalars['String']>
  last_login?: Maybe<Scalars['String']>
  last_password_reset?: Maybe<Scalars['String']>
  logins_count?: Maybe<Scalars['Float']>
  multifactor?: Maybe<Array<Scalars['String']>>
  name?: Maybe<Scalars['String']>
  nickname?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  phone_verified?: Maybe<Scalars['Boolean']>
  picture?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export type ValueType = {
  id: Scalars['ID']
  label: Scalars['String']
  type: Scalars['String']
}

export type __AppFragment = Pick<App, 'id' | 'name'>

export type CreateAppMutationVariables = Exact<{
  input: CreateAppInput
}>

export type CreateAppMutation = { createApp: __AppFragment }

export type DeleteAppMutationVariables = Exact<{
  input: DeleteAppInput
}>

export type DeleteAppMutation = { deleteApp: Pick<App, 'id'> }

export type GetAppQueryVariables = Exact<{
  input: GetAppInput
}>

export type GetAppQuery = { app?: Maybe<__AppFragment> }

export type GetAppsQueryVariables = Exact<{ [key: string]: never }>

export type GetAppsQuery = { apps: Array<__AppFragment> }

export type UpdateAppMutationVariables = Exact<{
  input: UpdateAppInput
}>

export type UpdateAppMutation = { app: __AppFragment }

export type __AtomFragment = Pick<Atom, 'id' | 'label' | 'type'>

export type CreateAtomMutationVariables = Exact<{
  input: CreateAtomInput
}>

export type CreateAtomMutation = { createAtom: __AtomFragment }

export type DeleteAtomMutationVariables = Exact<{
  input: DeleteAtomInput
}>

export type DeleteAtomMutation = { deleteAtom: __AtomFragment }

export type GetAtomQueryVariables = Exact<{
  input: GetAtomInput
}>

export type GetAtomQuery = { atom?: Maybe<__AtomFragment> }

export type GetAtomsQueryVariables = Exact<{ [key: string]: never }>

export type GetAtomsQuery = { atoms: Array<__AtomFragment> }

export type UpdateAtomMutationVariables = Exact<{
  input: UpdateAtomInput
}>

export type UpdateAtomMutation = { atom: __AtomFragment }

export type __PropFragment = Pick<Prop, 'description' | 'id' | 'key'> & {
  type: Pick<ValueType, 'id' | 'type' | 'label'>
  props?: Maybe<
    Array<
      Pick<Prop, 'description' | 'id' | 'key'> & {
        type: Pick<ValueType, 'id' | 'type' | 'label'>
      }
    >
  >
}

export type GetPropsQueryVariables = Exact<{ [key: string]: never }>

export type GetPropsQuery = { props: Array<__PropFragment> }

export type __UserFragment = Pick<User, 'email' | 'name'> & {
  id: User['user_id']
}

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput
}>

export type DeleteUserMutation = Pick<Mutation, 'deleteUser'>

export type GetUsersQueryVariables = Exact<{
  input?: Maybe<GetUsersInput>
}>

export type GetUsersQuery = { users: Array<__UserFragment> }

export type GetValueTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetValueTypesQuery = { valueTypes: Array<__ValueTypeFragment> }

export type __ValueTypeFragment = Pick<ValueType, 'id' | 'type' | 'label'>

export const __AppFragmentDoc = gql`
  fragment __App on App {
    id
    name
  }
`
export const __AtomFragmentDoc = gql`
  fragment __Atom on Atom {
    id
    label
    type
  }
`
export const __PropFragmentDoc = gql`
  fragment __Prop on Prop {
    description
    id
    key
    type {
      id
      type
      label
    }
    props {
      description
      id
      key
      type {
        id
        type
        label
      }
    }
  }
`
export const __UserFragmentDoc = gql`
  fragment __User on User {
    id: user_id
    email
    name
  }
`
export const __ValueTypeFragmentDoc = gql`
  fragment __ValueType on ValueType {
    id
    type
    label
  }
`
export const CreateAppGql = gql`
  mutation CreateApp($input: CreateAppInput!) {
    createApp(input: $input) {
      ...__App
    }
  }
  ${__AppFragmentDoc}
`
export type CreateAppMutationFn = Apollo.MutationFunction<
  CreateAppMutation,
  CreateAppMutationVariables
>

/**
 * __useCreateAppMutation__
 *
 * To run a mutation, you first call `useCreateAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAppMutation, { data, loading, error }] = useCreateAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAppMutation,
    CreateAppMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateAppMutation, CreateAppMutationVariables>(
    CreateAppGql,
    options,
  )
}
export type CreateAppMutationHookResult = ReturnType<
  typeof useCreateAppMutation
>
export type CreateAppMutationResult = Apollo.MutationResult<CreateAppMutation>
export type CreateAppMutationOptions = Apollo.BaseMutationOptions<
  CreateAppMutation,
  CreateAppMutationVariables
>
export const DeleteAppGql = gql`
  mutation DeleteApp($input: DeleteAppInput!) {
    deleteApp(input: $input) {
      id
    }
  }
`
export type DeleteAppMutationFn = Apollo.MutationFunction<
  DeleteAppMutation,
  DeleteAppMutationVariables
>

/**
 * __useDeleteAppMutation__
 *
 * To run a mutation, you first call `useDeleteAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAppMutation, { data, loading, error }] = useDeleteAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAppMutation,
    DeleteAppMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteAppMutation, DeleteAppMutationVariables>(
    DeleteAppGql,
    options,
  )
}
export type DeleteAppMutationHookResult = ReturnType<
  typeof useDeleteAppMutation
>
export type DeleteAppMutationResult = Apollo.MutationResult<DeleteAppMutation>
export type DeleteAppMutationOptions = Apollo.BaseMutationOptions<
  DeleteAppMutation,
  DeleteAppMutationVariables
>
export const GetAppGql = gql`
  query GetApp($input: GetAppInput!) {
    app: getApp(input: $input) {
      ...__App
    }
  }
  ${__AppFragmentDoc}
`

/**
 * __useGetAppQuery__
 *
 * To run a query within a React component, call `useGetAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAppQuery(
  baseOptions: Apollo.QueryHookOptions<GetAppQuery, GetAppQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAppQuery, GetAppQueryVariables>(GetAppGql, options)
}
export function useGetAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAppQuery, GetAppQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAppQuery, GetAppQueryVariables>(
    GetAppGql,
    options,
  )
}
export type GetAppQueryHookResult = ReturnType<typeof useGetAppQuery>
export type GetAppLazyQueryHookResult = ReturnType<typeof useGetAppLazyQuery>
export type GetAppQueryResult = Apollo.QueryResult<
  GetAppQuery,
  GetAppQueryVariables
>
export function refetchGetAppQuery(variables?: GetAppQueryVariables) {
  return { query: GetAppGql, variables: variables }
}
export const GetAppsGql = gql`
  query GetApps {
    apps: getApps {
      ...__App
    }
  }
  ${__AppFragmentDoc}
`

/**
 * __useGetAppsQuery__
 *
 * To run a query within a React component, call `useGetAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAppsQuery, GetAppsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAppsQuery, GetAppsQueryVariables>(
    GetAppsGql,
    options,
  )
}
export function useGetAppsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAppsQuery,
    GetAppsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAppsQuery, GetAppsQueryVariables>(
    GetAppsGql,
    options,
  )
}
export type GetAppsQueryHookResult = ReturnType<typeof useGetAppsQuery>
export type GetAppsLazyQueryHookResult = ReturnType<typeof useGetAppsLazyQuery>
export type GetAppsQueryResult = Apollo.QueryResult<
  GetAppsQuery,
  GetAppsQueryVariables
>
export function refetchGetAppsQuery(variables?: GetAppsQueryVariables) {
  return { query: GetAppsGql, variables: variables }
}
export const UpdateAppGql = gql`
  mutation UpdateApp($input: UpdateAppInput!) {
    app: updateApp(input: $input) {
      ...__App
    }
  }
  ${__AppFragmentDoc}
`
export type UpdateAppMutationFn = Apollo.MutationFunction<
  UpdateAppMutation,
  UpdateAppMutationVariables
>

/**
 * __useUpdateAppMutation__
 *
 * To run a mutation, you first call `useUpdateAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAppMutation, { data, loading, error }] = useUpdateAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAppMutation,
    UpdateAppMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateAppMutation, UpdateAppMutationVariables>(
    UpdateAppGql,
    options,
  )
}
export type UpdateAppMutationHookResult = ReturnType<
  typeof useUpdateAppMutation
>
export type UpdateAppMutationResult = Apollo.MutationResult<UpdateAppMutation>
export type UpdateAppMutationOptions = Apollo.BaseMutationOptions<
  UpdateAppMutation,
  UpdateAppMutationVariables
>
export const CreateAtomGql = gql`
  mutation CreateAtom($input: CreateAtomInput!) {
    createAtom(input: $input) {
      ...__Atom
    }
  }
  ${__AtomFragmentDoc}
`
export type CreateAtomMutationFn = Apollo.MutationFunction<
  CreateAtomMutation,
  CreateAtomMutationVariables
>

/**
 * __useCreateAtomMutation__
 *
 * To run a mutation, you first call `useCreateAtomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAtomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAtomMutation, { data, loading, error }] = useCreateAtomMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAtomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAtomMutation,
    CreateAtomMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateAtomMutation, CreateAtomMutationVariables>(
    CreateAtomGql,
    options,
  )
}
export type CreateAtomMutationHookResult = ReturnType<
  typeof useCreateAtomMutation
>
export type CreateAtomMutationResult = Apollo.MutationResult<CreateAtomMutation>
export type CreateAtomMutationOptions = Apollo.BaseMutationOptions<
  CreateAtomMutation,
  CreateAtomMutationVariables
>
export const DeleteAtomGql = gql`
  mutation DeleteAtom($input: DeleteAtomInput!) {
    deleteAtom(input: $input) {
      ...__Atom
    }
  }
  ${__AtomFragmentDoc}
`
export type DeleteAtomMutationFn = Apollo.MutationFunction<
  DeleteAtomMutation,
  DeleteAtomMutationVariables
>

/**
 * __useDeleteAtomMutation__
 *
 * To run a mutation, you first call `useDeleteAtomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAtomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAtomMutation, { data, loading, error }] = useDeleteAtomMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAtomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAtomMutation,
    DeleteAtomMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteAtomMutation, DeleteAtomMutationVariables>(
    DeleteAtomGql,
    options,
  )
}
export type DeleteAtomMutationHookResult = ReturnType<
  typeof useDeleteAtomMutation
>
export type DeleteAtomMutationResult = Apollo.MutationResult<DeleteAtomMutation>
export type DeleteAtomMutationOptions = Apollo.BaseMutationOptions<
  DeleteAtomMutation,
  DeleteAtomMutationVariables
>
export const GetAtomGql = gql`
  query GetAtom($input: GetAtomInput!) {
    atom: getAtom(input: $input) {
      ...__Atom
    }
  }
  ${__AtomFragmentDoc}
`

/**
 * __useGetAtomQuery__
 *
 * To run a query within a React component, call `useGetAtomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAtomQuery(
  baseOptions: Apollo.QueryHookOptions<GetAtomQuery, GetAtomQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAtomQuery, GetAtomQueryVariables>(
    GetAtomGql,
    options,
  )
}
export function useGetAtomLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomQuery,
    GetAtomQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAtomQuery, GetAtomQueryVariables>(
    GetAtomGql,
    options,
  )
}
export type GetAtomQueryHookResult = ReturnType<typeof useGetAtomQuery>
export type GetAtomLazyQueryHookResult = ReturnType<typeof useGetAtomLazyQuery>
export type GetAtomQueryResult = Apollo.QueryResult<
  GetAtomQuery,
  GetAtomQueryVariables
>
export function refetchGetAtomQuery(variables?: GetAtomQueryVariables) {
  return { query: GetAtomGql, variables: variables }
}
export const GetAtomsGql = gql`
  query GetAtoms {
    atoms: getAtoms {
      ...__Atom
    }
  }
  ${__AtomFragmentDoc}
`

/**
 * __useGetAtomsQuery__
 *
 * To run a query within a React component, call `useGetAtomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAtomsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAtomsQuery, GetAtomsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAtomsQuery, GetAtomsQueryVariables>(
    GetAtomsGql,
    options,
  )
}
export function useGetAtomsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomsQuery,
    GetAtomsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAtomsQuery, GetAtomsQueryVariables>(
    GetAtomsGql,
    options,
  )
}
export type GetAtomsQueryHookResult = ReturnType<typeof useGetAtomsQuery>
export type GetAtomsLazyQueryHookResult = ReturnType<
  typeof useGetAtomsLazyQuery
>
export type GetAtomsQueryResult = Apollo.QueryResult<
  GetAtomsQuery,
  GetAtomsQueryVariables
>
export function refetchGetAtomsQuery(variables?: GetAtomsQueryVariables) {
  return { query: GetAtomsGql, variables: variables }
}
export const UpdateAtomGql = gql`
  mutation UpdateAtom($input: UpdateAtomInput!) {
    atom: updateAtom(input: $input) {
      ...__Atom
    }
  }
  ${__AtomFragmentDoc}
`
export type UpdateAtomMutationFn = Apollo.MutationFunction<
  UpdateAtomMutation,
  UpdateAtomMutationVariables
>

/**
 * __useUpdateAtomMutation__
 *
 * To run a mutation, you first call `useUpdateAtomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAtomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAtomMutation, { data, loading, error }] = useUpdateAtomMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAtomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAtomMutation,
    UpdateAtomMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateAtomMutation, UpdateAtomMutationVariables>(
    UpdateAtomGql,
    options,
  )
}
export type UpdateAtomMutationHookResult = ReturnType<
  typeof useUpdateAtomMutation
>
export type UpdateAtomMutationResult = Apollo.MutationResult<UpdateAtomMutation>
export type UpdateAtomMutationOptions = Apollo.BaseMutationOptions<
  UpdateAtomMutation,
  UpdateAtomMutationVariables
>
export const GetPropsGql = gql`
  query GetProps {
    props: getProps {
      ...__Prop
    }
  }
  ${__PropFragmentDoc}
`

/**
 * __useGetPropsQuery__
 *
 * To run a query within a React component, call `useGetPropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPropsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPropsQuery, GetPropsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPropsQuery, GetPropsQueryVariables>(
    GetPropsGql,
    options,
  )
}
export function useGetPropsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPropsQuery,
    GetPropsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPropsQuery, GetPropsQueryVariables>(
    GetPropsGql,
    options,
  )
}
export type GetPropsQueryHookResult = ReturnType<typeof useGetPropsQuery>
export type GetPropsLazyQueryHookResult = ReturnType<
  typeof useGetPropsLazyQuery
>
export type GetPropsQueryResult = Apollo.QueryResult<
  GetPropsQuery,
  GetPropsQueryVariables
>
export function refetchGetPropsQuery(variables?: GetPropsQueryVariables) {
  return { query: GetPropsGql, variables: variables }
}
export const DeleteUserGql = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input)
  }
`
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserGql,
    options,
  )
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>
export const GetUsersGql = gql`
  query GetUsers($input: GetUsersInput) {
    users: getUsers(input: $input) {
      ...__User
    }
  }
  ${__UserFragmentDoc}
`

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersGql,
    options,
  )
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersGql,
    options,
  )
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>
export function refetchGetUsersQuery(variables?: GetUsersQueryVariables) {
  return { query: GetUsersGql, variables: variables }
}
export const GetValueTypesGql = gql`
  query GetValueTypes {
    valueTypes: getValueTypes {
      ...__ValueType
    }
  }
  ${__ValueTypeFragmentDoc}
`

/**
 * __useGetValueTypesQuery__
 *
 * To run a query within a React component, call `useGetValueTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValueTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValueTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetValueTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetValueTypesQuery,
    GetValueTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetValueTypesQuery, GetValueTypesQueryVariables>(
    GetValueTypesGql,
    options,
  )
}
export function useGetValueTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValueTypesQuery,
    GetValueTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetValueTypesQuery, GetValueTypesQueryVariables>(
    GetValueTypesGql,
    options,
  )
}
export type GetValueTypesQueryHookResult = ReturnType<
  typeof useGetValueTypesQuery
>
export type GetValueTypesLazyQueryHookResult = ReturnType<
  typeof useGetValueTypesLazyQuery
>
export type GetValueTypesQueryResult = Apollo.QueryResult<
  GetValueTypesQuery,
  GetValueTypesQueryVariables
>
export function refetchGetValueTypesQuery(
  variables?: GetValueTypesQueryVariables,
) {
  return { query: GetValueTypesGql, variables: variables }
}
export const __App = gql`
  fragment __App on App {
    id
    name
  }
`
export const __Atom = gql`
  fragment __Atom on Atom {
    id
    label
    type
  }
`
export const __Prop = gql`
  fragment __Prop on Prop {
    description
    id
    key
    type {
      id
      type
      label
    }
    props {
      description
      id
      key
      type {
        id
        type
        label
      }
    }
  }
`
export const __User = gql`
  fragment __User on User {
    id: user_id
    email
    name
  }
`
export const __ValueType = gql`
  fragment __ValueType on ValueType {
    id
    type
    label
  }
`
export const CreateApp = gql`
  mutation CreateApp($input: CreateAppInput!) {
    createApp(input: $input) {
      ...__App
    }
  }
  ${__App}
`
export const DeleteApp = gql`
  mutation DeleteApp($input: DeleteAppInput!) {
    deleteApp(input: $input) {
      id
    }
  }
`
export const GetApp = gql`
  query GetApp($input: GetAppInput!) {
    app: getApp(input: $input) {
      ...__App
    }
  }
  ${__App}
`
export const GetApps = gql`
  query GetApps {
    apps: getApps {
      ...__App
    }
  }
  ${__App}
`
export const UpdateApp = gql`
  mutation UpdateApp($input: UpdateAppInput!) {
    app: updateApp(input: $input) {
      ...__App
    }
  }
  ${__App}
`
export const CreateAtom = gql`
  mutation CreateAtom($input: CreateAtomInput!) {
    createAtom(input: $input) {
      ...__Atom
    }
  }
  ${__Atom}
`
export const DeleteAtom = gql`
  mutation DeleteAtom($input: DeleteAtomInput!) {
    deleteAtom(input: $input) {
      ...__Atom
    }
  }
  ${__Atom}
`
export const GetAtom = gql`
  query GetAtom($input: GetAtomInput!) {
    atom: getAtom(input: $input) {
      ...__Atom
    }
  }
  ${__Atom}
`
export const GetAtoms = gql`
  query GetAtoms {
    atoms: getAtoms {
      ...__Atom
    }
  }
  ${__Atom}
`
export const UpdateAtom = gql`
  mutation UpdateAtom($input: UpdateAtomInput!) {
    atom: updateAtom(input: $input) {
      ...__Atom
    }
  }
  ${__Atom}
`
export const GetProps = gql`
  query GetProps {
    props: getProps {
      ...__Prop
    }
  }
  ${__Prop}
`
export const DeleteUser = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input)
  }
`
export const GetUsers = gql`
  query GetUsers($input: GetUsersInput) {
    users: getUsers(input: $input) {
      ...__User
    }
  }
  ${__User}
`
export const GetValueTypes = gql`
  query GetValueTypes {
    valueTypes: getValueTypes {
      ...__ValueType
    }
  }
  ${__ValueType}
`
