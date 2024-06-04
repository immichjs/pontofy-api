import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Employee } from './employee.schema';
import { Role } from './role.schema';
import { Departament } from './departament.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, collection: 'users' })
export class User {
	@Prop({ required: true, type: String })
	name: string;

	@Prop({ required: true, type: String })
	email: string;

	@Prop({ required: true, type: String })
	phone: string;

	@Prop({ required: true, type: String })
	password: string;

	@Prop([
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Employee',
		},
	])
	employees: Employee[];

	@Prop([
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Role',
		},
	])
	roles: Role[];

	@Prop([
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Departament',
		},
	])
	departaments: Departament[];
}

export const UserSchema = SchemaFactory.createForClass(User);
