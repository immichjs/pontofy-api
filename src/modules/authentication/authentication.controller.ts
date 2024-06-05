import {
	Body,
	Controller,
	Get,
	Inject,
	Post,
	Request,
	UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from './guards/jwt.guard';
import { UserAuthenticated } from 'src/common/decorators/user-authenticated.decorator';
import { User, UserDocument } from 'src/schemas/user.schema';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';

@Controller('authentication')
export class AuthenticationController {
	@Inject() private readonly authenticationService: AuthenticationService;

	@Post('login')
	public async login(
		@Body() credentials: LoginDto,
	): Promise<{ accessToken: string }> {
		return this.authenticationService.login(credentials);
	}

	@Post('register')
	public async register(
		@Body() dto: RegisterDto,
	): Promise<{ accessToken: string }> {
		return this.authenticationService.register(dto);
	}

	@Get('profile')
	@UseGuards(JwtGuard)
	public async profile(@UserAuthenticated() userId: string) {
		return this.authenticationService.profile(userId);
	}
}
