// medicamentos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicamento } from './medicamento.entity';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoController } from './medicamento.controller';
import { MedicamentoSeeder } from './medicamento.seed';

@Module({
  imports: [TypeOrmModule.forFeature([Medicamento])],
  controllers: [MedicamentoController],
  providers: [MedicamentoService, MedicamentoSeeder],
  exports: [MedicamentoService, MedicamentoSeeder],
})
export class MedicamentoModule {}
