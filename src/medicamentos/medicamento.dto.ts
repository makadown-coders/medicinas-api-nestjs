// medicamentos.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMedicamentoDto {
  @IsNotEmpty()
  @IsString()
  categoria: string;

  @IsNotEmpty()
  @IsString()
  tomo: string;

  @IsNotEmpty()
  @IsString()
  grupoTerapeutico: string;

  @IsNotEmpty()
  @IsString()
  nombreGenerico: string;

  @IsNotEmpty()
  @IsString()
  clave: string;

  @IsNotEmpty()
  @IsString()
  formaFarmaceutica: string;

  @IsNotEmpty()
  @IsString()
  formula: string;

  @IsNotEmpty()
  @IsString()
  presentacionEnvase: string;

  @IsNotEmpty()
  @IsString()
  indicaciones: string;

  @IsNotEmpty()
  @IsString()
  viaAdministracionDosis: string;

  @IsNotEmpty()
  @IsString()
  generalidades: string;

  @IsNotEmpty()
  @IsString()
  riesgoEmbarazo: string;

  @IsNotEmpty()
  @IsString()
  reaccionesAdversas: string;

  @IsNotEmpty()
  @IsString()
  contraindicacionesPrecauciones: string;

  @IsNotEmpty()
  @IsString()
  interacciones: string;
}