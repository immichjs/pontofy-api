import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AuthenticationService {
	@Inject() private readonly jwtService: JwtService;
	@Inject() private readonly userService: UserService;

	public async login(dto: LoginDto): Promise<{ accessToken: string }> {
		const user = await this.userService.findByEmail(dto.email);

		if (!compareSync(dto.password, user.password)) {
			throw new UnauthorizedException('Invalid credentials.');
		}

		return {
			accessToken: this.jwtService.sign({ sub: user._id }),
		};
	}

	public async register(dto: RegisterDto): Promise<{ accessToken: string }> {
		const { _id } = await this.userService.create(dto);

		return {
			accessToken: this.jwtService.sign({ sub: _id }),
		};
	}

	public async profile(userId: string) {
		return this.userService.profile(userId);
	}
}
