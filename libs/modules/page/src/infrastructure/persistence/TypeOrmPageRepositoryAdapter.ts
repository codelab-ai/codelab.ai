import { plainToClass } from 'class-transformer'
import { option as O } from 'fp-ts'
import { Option } from 'fp-ts/Option'
import { EntityRepository } from 'typeorm'
import { BaseRepository } from 'typeorm-transactional-cls-hooked'
import { PageRepositoryPort } from '../../core/adapters/PageRepositoryPort'
import { Page } from '../../core/domain/page'
import { TypeOrmPage } from '@codelab/backend'

@EntityRepository(TypeOrmPage)
export class TypeOrmPageRepositoryAdapter
  extends BaseRepository<TypeOrmPage>
  implements PageRepositoryPort {
  async createPage(page: Page): Promise<Page> {
    const typeOrmPage = page.toPersistence()
    const savedPageTypeOrm = await this.save(typeOrmPage)

    return plainToClass(Page, savedPageTypeOrm)
  }

  async deletePage(page: Page): Promise<Option<Page>> {
    const typeOrmPage = page.toPersistence()
    const foundTypeOrmPage = await this.findOne(typeOrmPage.id)

    if (!foundTypeOrmPage) {
      return O.none
    }

    await this.remove(foundTypeOrmPage)

    return O.some(page)
  }
}
