import { TypeModule } from '@codelab/modules/type-api'
import { Module } from '@nestjs/common'
import { AtomResolver } from './atom.resolver'
import {
  CreateAtomService,
  DeleteAtomService,
  GetAtomByService,
  GetAtomService,
  GetAtomsService,
  UpdateAtomService,
} from './use-cases'

const services = [
  CreateAtomService,
  GetAtomsService,
  DeleteAtomService,
  GetAtomService,
  UpdateAtomService,
  GetAtomByService,
]

@Module({
  imports: [TypeModule],
  providers: [AtomResolver, ...services],
  exports: [...services],
})
export class AtomModule {}
