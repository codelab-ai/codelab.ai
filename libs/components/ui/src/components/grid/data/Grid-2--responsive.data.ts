import { Text } from '../../text'
import { Grid } from '../Grid.types'
import { NodeReactDtoI } from '@codelab/shared/interface/node'

export const responsiveGridData: NodeReactDtoI<
  | Text.Props
  | Grid.Props
  | Grid.ItemProps
  | Grid.ResponsiveProps
  | { key: string }
> = {
  type: 'React.ResponsiveGrid',
  props: {
    layouts: {
      lg: [
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 3, h: 2 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 },
      ],
      md: [
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 3, h: 2 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 },
      ],
      sm: [
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 3, h: 4 },
        { i: 'c', x: 0, y: 2, w: 1, h: 2 },
      ],
    },
    rowHeight: 30,
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  },
  children: [
    {
      type: 'React.Html.div',
      props: {
        key: 'a',
        style: { border: '1px solid #000', padding: 10 },
      },
      children: [
        {
          type: 'React.Text',
          props: {
            value: 'A',
          },
        },
      ],
    },
    {
      type: 'React.Html.div',
      props: {
        key: 'b',
        style: { border: '1px solid #000', padding: 10 },
      },
      children: [
        {
          type: 'React.Text',
          props: {
            value: 'B',
          },
        },
      ],
    },
    {
      type: 'React.Html.div',
      props: {
        key: 'c',
        style: { border: '1px solid #000', padding: 10 },
      },
      children: [
        {
          type: 'React.Text',
          props: {
            value: 'C',
          },
        },
      ],
    },
  ],
}
