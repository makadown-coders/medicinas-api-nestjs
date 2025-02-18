// medicamentos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicamento } from './medicamento.entity';

@Injectable()
export class MedicamentoService {
  constructor(
    @InjectRepository(Medicamento)
    private medicamentoRepository: Repository<Medicamento>,
  ) {}

  async findAll(): Promise<Medicamento[]> {
    return this.medicamentoRepository.find();
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
