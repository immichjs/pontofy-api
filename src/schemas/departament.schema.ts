import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type DepartamentDocument = HydratedDocument<Departament>;

@Schema({ timestamps: true, collection: 'departaments' })
export class Departament {
	@Prop({ required: true, type: String })
	departament: string;

	@Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
	user: User;
}

export const DepartamentSchema = SchemaFactory.createForClass(Departament);
