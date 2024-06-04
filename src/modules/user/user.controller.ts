import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from 'src/schemas/user.schema';

@Controller('users')
export class UserController {
	@Inject() private readonly userService: UserService;

	@Post()
	public async create(@Body() dto: CreateUserDto): Promise<User> {
		return this.userService.create(dto);
	}
}
