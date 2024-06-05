import {
	Controller,
	Get,
	Inject,
	Post,
	UseGuards,
	Body,
	Delete,
	Param,
} from '@nestjs/common';
import { DepartamentService } from './departament.service';
import { JwtGuard } from '../authentication/guards/jwt.guard';
import { UserAuthenticated } from 'src/common/decorators/user-authenticated.decorator';
import { CreateDepartamentDto } from './dtos/create-departament.dto';

@Controller('departaments')
@UseGuards(JwtGuard)
export class DepartamentController {
	@Inject() private readonly departamentService: DepartamentService;

	@Post()
	public async create(
		@UserAuthenticated() userId: string,
		@Body() dto: CreateDepartamentDto,
	) {
		return this.departamentService.create(userId, dto);
	}

	@Get()
	public async find(@UserAuthenticated() userId: string) {
		return this.departamentService.find(userId);
	}

	@Delete(':departamentId')
	public async delete(
		@UserAuthenticated() userId: string,
		@Param('departamentId') departamentId: string,
	) {
		return this.departamentService.delete(userId, departamentId);
	}
}
