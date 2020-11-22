import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GqlAuthGuard } from '../auth/gql.authguard'
import { UserInput } from './UserInput'
import { CurrentUser } from './current-user.decorator'
import { UserDto } from './dto/UserDto'
import { UserEntity } from './user.entity'
import { UserService } from './user.service'

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(public userService: UserService) {}

  @Query(() => [UserEntity])
  async getAllUsers() {
    return this.userService.findAll()
  }

  @Mutation((returns) => UserDto)
  async registerUser(@Args('user') user: UserInput) {
    return this.userService.createUserAndGetToken(user)
  }

  @Query((returns) => UserDto)
  async login(@Args('user') user: UserInput) {
    return this.userService.login(user)
  }

  @Query(() => String)
  async refreshToken(
    @Args({ name: 'token', type: () => String }) token: string,
  ) {
    return this.userService.refreshToken(token)
  }

  @Mutation(() => UserEntity)
  @UseGuards(GqlAuthGuard)
  async moveVertex(
    @CurrentUser() user: UserEntity,
    @Args({ name: 'src', type: () => String }) src: string,
    @Args({ name: 'target', type: () => String }) target: string,
  ) {
    return this.userService.moveVertex(user.id, src, target)
  }
}
