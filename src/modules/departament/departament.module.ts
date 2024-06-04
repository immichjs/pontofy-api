import { Module } from '@nestjs/common';
import { DepartamentController } from './departament.controller';
import { DepartamentService } from './departament.service';
import { Departament, DepartamentSchema } from 'src/schemas/departament.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Departament.name, schema: DepartamentSchema },
		]),
	],
	controllers: [DepartamentController],
	providers: [DepartamentService],
})
export class DepartamentModule {}
