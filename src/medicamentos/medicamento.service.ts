// medicamentos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicamento } from './medicamento.entity';
import { PaginatedResponseDto } from './paginated-response.dto';

@Injectable()
export class MedicamentoService {
  private baseUrl: string = process.env.BASE_URL || 'http://localhost:3000';

  constructor(
    @InjectRepository(Medicamento)
    private medicamentoRepository: Repository<Medicamento>,
  ) {}

  async findAll(offset = 0, limit = 20): Promise<PaginatedResponseDto<Medicamento>> {
    const [results, count] = await this.medicamentoRepository.findAndCount({
      skip: offset,
      take: limit,
    });

    return new PaginatedResponseDto<Medicamento>(count, results, this.baseUrl, offset, limit);
  }

  async findByNombre(nombre: string): Promise<Medicamento[]> {
    return this.medicamentoRepository.find({
      where: { nombreGenerico: nombre },
    });
  }

  async findById(id: number): Promise<Medicamento> {
    const medicamento = await this.medicamentoRepository.findOne({ where: { id } });
    if (!medicamento) {
      throw new NotFoundException(`Medicamento no encontrado`);
    }
    return medicamento;
  }
}
