import { App, appSchema } from '@codelab/modules/app-api'
import { PageElementRoot } from '@codelab/modules/page-element-api'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { z } from 'zod'

@ObjectType()
export class Page {
  @Field(() => ID)
  declare id: string

  @Field()
  declare name: string

  @Field(() => App)
  declare app: App

  @Field(() => PageElementRoot)
  declare rootElement: PageElementRoot
}

export const pageSchema = z.object({
  id: z.string(),
  name: z.string(),
  app: appSchema,
})

export const pagesSchema = z.array(pageSchema)
