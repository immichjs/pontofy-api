import {
	ConflictException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Departament } from 'src/schemas/departament.schema';
import { CreateDepartamentDto } from './dtos/create-departament.dto';

@Injectable()
export class DepartamentService {
	@InjectModel('Departament')
	private readonly departamentModel: Model<Departament>;

	public async create(userId: string, dto: CreateDepartamentDto) {
		console.log(userId, dto);
		const hasDepartament = await this.departamentModel
			.findOne({
				departament: dto.departament,
				user: userId,
			})
			.exec();

		if (hasDepartament) {
			throw new ConflictException('Departament already exists');
		}

		const departament = await this.departamentModel.create({
			departament: dto.departament,
			user: userId,
		});
		return departament.save();
	}

	public async find(userId: string) {
		return this.departamentModel
			.find({
				user: userId,
			})
			.exec();
	}

	public async delete(userId: string, departamentId: string) {
		const departament = await this.departamentModel.findOne({
			_id: departamentId,
			user: userId,
		});

		if (!departament) {
			throw new NotFoundException('Departament not found.');
		}

		await this.departamentModel.deleteOne({ _id: departamentId }).exec();
	}
}
