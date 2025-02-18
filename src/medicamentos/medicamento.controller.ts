// medicamentos.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { Medicamento } from './medicamento.entity';

@Controller('medicamentos')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) { }

  @Get()
  async findAll(): Promise<Medicamento[]> {
    return this.medicamentoService.findAll();
  }

  @Get('nombre/:nombre')
  async findByNombre(@Param('nombre') nombre: string): Promise<Medicamento[]> {
    return this.medicamentoService.findByNombre(nombre);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Medicamento | null> {
    console.log(id);
    return this.medicamentoService.findById(id);
  }
}