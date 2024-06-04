import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Employee } from './employee.schema';

export type PointRecordDocument = HydratedDocument<PointRecord>;

@Schema({ timestamps: true, collection: 'point_records' })
export class PointRecord {
	@Prop({
		required: true,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Employee',
	})
	employee: Employee;

	@Prop({ required: true, type: Date })
	pointDate: Date;

	@Prop({ required: true, type: String })
	ip: string;
}

export const PointRecordSchema = SchemaFactory.createForClass(PointRecord);
