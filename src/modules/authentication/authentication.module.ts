import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UserModule } from '../user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
	imports: [
		ConfigModule.forRoot(),
		UserModule,
		JwtModule.register({
			signOptions: {
				expiresIn: '7d',
			},
			secret: process.env.JWT_SECRET,
		}),
	],
	controllers: [AuthenticationController],
	providers: [AuthenticationService, JwtStrategy],
})
export class AuthenticationModule {}
