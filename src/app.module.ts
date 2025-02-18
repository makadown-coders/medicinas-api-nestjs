import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { MedicamentoModule } from './medicamentos/medicamento.module';

@Module({
  imports: [
    DatabaseModule,
    MedicamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
