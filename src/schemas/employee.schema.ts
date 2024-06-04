import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Role } from './role.schema';
import { Departament } from './departament.schema';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema({ timestamps: true, collection: 'employees' })
export class Employee {
	@Prop({ required: true, type: String })
	name: string;

	@Prop({ required: true, type: String })
	email: string;

	@Prop({ type: String })
	alternativeEmail: string;

	@Prop({ required: true, type: String })
	phone: string;

	@Prop({ type: String })
	alternativePhone: string;

	@Prop({
		required: true,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Departament',
	})
	departament: Departament;

	@Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
	role: Role;

	@Prop({ required: true, type: Date })
	birth: Date;

	@Prop({ required: true, type: String })
	cpf: string;

	@Prop({ required: true, type: Date })
	pis: Date;

	@Prop({ required: true, type: String })
	password: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
