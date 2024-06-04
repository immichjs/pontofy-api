import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { PointRecordModule } from './modules/point-record/point-record.module';
import { NotificationModule } from './modules/notification/notification.module';
import { DepartamentModule } from './modules/departament/departament.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './modules/role/role.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot('mongodb://localhost/pontofy'),
		AuthenticationModule,
		UserModule,
		EmployeeModule,
		PointRecordModule,
		NotificationModule,
		DepartamentModule,
		RoleModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
