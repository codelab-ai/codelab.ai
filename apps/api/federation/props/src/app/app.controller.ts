import { Controller, Get } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('PropsService', 'Create')
  create(data: any, metadata: any): any {
    console.log(data, metadata)

    return {
      id: 1,
      values: 'my-props',
    }
  }

  @Get()
  getData() {
    return this.appService.getData()
  }
}
