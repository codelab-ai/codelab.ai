import { Theme as AntDTheme } from '@rjsf/antd'
import { withTheme } from '@rjsf/core'
import { JSONSchema7 } from 'json-schema'
import React from 'react'
import {
  DemoGridFormInputFormProps,
  DemoGridFormInputSchema,
} from '@codelab/generated'

const Form = withTheme(AntDTheme)

const GridPage = () => {
  return (
    <>
      {/* <Form schema={DemoInputSchema} {...DemoInputFormProps} /> */}
      <Form
        schema={DemoGridFormInputSchema as JSONSchema7}
        {...DemoGridFormInputFormProps}
      />
    </>
  )
}

export default GridPage
