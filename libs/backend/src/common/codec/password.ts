import * as bcrypt from 'bcrypt'
import * as t from 'io-ts'
import * as Joi from 'joi'

const isString = (u: unknown): u is string => {
  return typeof u === 'string'
}

// Type<A, O, I>
export const PasswordC = new t.Type<string, string, unknown>(
  'password',
  isString,
  (input, context: t.Context) => {
    const schema = Joi.string().min(3)

    const { error, value } = schema.validate(input)

    if (error || !isString(input)) {
      return t.failure(input, context, error?.message)
    }

    const hash = bcrypt.hashSync(value, 10)

    return t.success(hash)
  },
  t.identity,
)

export type PasswordC = t.Type<typeof PasswordC>

export interface PasswordBrand {
  readonly Password: unique symbol
}

// Brand
export type Password = t.Branded<string, PasswordBrand>

export const Password = t.brand(
  PasswordC,
  (data): data is Password => {
    return true
  },
  'Password',
)
