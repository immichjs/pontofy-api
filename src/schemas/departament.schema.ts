import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DepartamentDocument = HydratedDocument<Departament>;

@Schema({ timestamps: true, collection: 'departaments' })
export class Departament {
	@Prop({ required: true, type: String })
	departament: string;
}

export const DepartamentSchema = SchemaFactory.createForClass(Departament);
