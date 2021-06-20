import { BaseDgraphFields, DeepPartial, IDgraphMapper } from '@codelab/backend'
import { Injectable } from '@nestjs/common'
import { BooleanValue } from './boolean-value.model'
import {
  DgraphBooleanValue,
  DgraphBooleanValueFields,
} from './dgraph-boolean-value.model'

@Injectable()
export class BooleanValueMapper
  implements IDgraphMapper<DgraphBooleanValue, BooleanValue>
{
  map(input: DeepPartial<DgraphBooleanValue>) {
    const dgraphValue = DgraphBooleanValue.Schema.parse(input)
    const value = new BooleanValue()

    value.id = dgraphValue[BaseDgraphFields.uid]
    value.value = dgraphValue[DgraphBooleanValueFields.value]

    DgraphBooleanValue.Schema.parse(value)

    return value
  }
}
