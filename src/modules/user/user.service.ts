import {
	ConflictException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';

import { hash } from 'bcrypt';

@Injectable()
export class UserService {
	@InjectModel(User.name) private readonly userModel: Model<User>;

	public async create(dto: CreateUserDto): Promise<UserDocument> {
		const { email } = dto;

		const hasUser = await this.userModel
			.findOne({
				email,
			})
			.exec();

		if (hasUser) {
			throw new ConflictException('User already exits');
		}

		const hashPassword = await hash(dto.password, 10);
		dto.password = hashPassword;

		const user = await this.userModel.create(dto);
		return user.save();
	}

	public async findByEmail(email: string): Promise<UserDocument> {
		const user = await this.userModel
			.findOne({
				email,
			})
			.exec();

		if (!user) {
			throw new NotFoundException('User not found');
		}

		return user;
	}

	public async profile(id: string): Promise<UserDocument> {
		const user = await this.userModel
			.findOne({
				_id: id,
			})
			.exec();

		if (!user) {
			throw new NotFoundException('User not found.');
		}

		user.password = undefined;

		return user;
	}
}
