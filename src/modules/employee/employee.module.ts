import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'src/schemas/employee.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Employee.name, schema: EmployeeSchema },
		]),
	],
	controllers: [EmployeeController],
	providers: [EmployeeService],
})
export class EmployeeModule {}
