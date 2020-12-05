import { MinLength } from 'class-validator'
import { ValueObject } from '@codelab/ddd/shared/core'

interface UserEmailProps {
  value: string
}

export class UserEmail extends ValueObject<UserEmailProps> {
  @MinLength(3)
  declare value: string
}