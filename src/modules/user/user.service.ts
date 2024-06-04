import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';

import { hash } from 'bcrypt';

@Injectable()
export class UserService {
	@InjectModel(User.name) private readonly userModel: Model<User>;

	public async create(dto: CreateUserDto): Promise<User> {
		const { email } = dto;

		const hasUser = await this.userModel.findOne({
			email,
		});

		if (hasUser) {
			throw new ConflictException('User already exits');
		}

		const hashPassword = await hash(dto.password, 10);
		dto.password = hashPassword;

		const user = await this.userModel.create(dto);
		return user.save();
	}
}
