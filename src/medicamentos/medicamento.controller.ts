// medicamentos.controller.ts
import { Controller, Get, Param, Query } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { Medicamento } from './medicamento.entity';
import { PaginatedResponseDto } from './paginated-response.dto';

@Controller('medicamentos')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) { }

  @Get()
  async findAll(
    @Query('offset') offset?: string,
    @Query('limit') limit?: string
  ): Promise<PaginatedResponseDto<Medicamento>> {
    return this.medicamentoService.findAll(Number(offset) || 0, Number(limit) || 20);
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