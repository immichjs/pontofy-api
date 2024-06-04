import { Module } from '@nestjs/common';
import { PointRecordService } from './point-record.service';
import { PointRecordController } from './point-record.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
	PointRecord,
	PointRecordSchema,
} from 'src/schemas/point-record.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: PointRecord.name, schema: PointRecordSchema },
		]),
	],
	providers: [PointRecordService],
	controllers: [PointRecordController],
})
export class PointRecordModule {}
