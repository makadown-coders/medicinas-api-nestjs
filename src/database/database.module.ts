// database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicamento } from '../medicamentos/medicamento.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Usamos SQLite para la prueba de concepto
      database: process.env.DB_NAME || 'medicamentos_db.sqlite',
      entities: [Medicamento],
      synchronize: true, // Cambia a 'false' en producción
    }),
  ],
})
export class DatabaseModule {}
