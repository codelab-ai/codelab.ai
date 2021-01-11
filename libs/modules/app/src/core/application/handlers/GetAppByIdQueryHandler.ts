import { Inject } from '@nestjs/common'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { fold } from 'fp-ts/lib/Either'
import { AppDITokens } from '../../../framework/AppDITokens'
import { App } from '../../domain/app'
import { GetAppByIdQuery } from '../queries/GetAppByIdQuery'
import { GetAppService } from '../useCases/getApp/GetAppService'
import { Result } from '@codelab/backend'

@QueryHandler(GetAppByIdQuery)
export class GetAppByIdQueryHandler implements IQueryHandler<GetAppByIdQuery> {
  constructor(
    @Inject(AppDITokens.GetAppUseCase) public readonly service: GetAppService,
  ) {}

  async execute({ request }: GetAppByIdQuery): Promise<Option<App>> {
    return this.service.execute(request)
  }
}
