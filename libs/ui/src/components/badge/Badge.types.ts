import { PropsFromKeys } from '@codelab/shared/interface'

export const badgePropKeys = [
  'color',
  'count',
  'dot',
  'offset',
  'overflowCount',
  'showZero',
  'status',
  'text',
  'title',
] as const

export type BadgeProps = PropsFromKeys<typeof badgePropKeys[number]>
