import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MedicamentoSeeder } from './medicamentos/medicamento.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar ValidationPipe globalmente
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no incluidas en el DTO
    forbidNonWhitelisted: true, // Lanza un error si hay propiedades no permitidas
    transform: true, // Transforma automáticamente los datos entrantes a instancias de DTO
  }));
  
 // Ejecutar Seeder
 const medicamentoSeeder = app.get(MedicamentoSeeder);
 await medicamentoSeeder.seedFromExcel();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
