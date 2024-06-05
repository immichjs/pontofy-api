import { IsNotEmpty } from 'class-validator';

export class CreateDepartamentDto {
	@IsNotEmpty()
	departament: string;
}
