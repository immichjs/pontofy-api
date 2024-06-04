import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	phone: string;

	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(16)
	password: string;
}
