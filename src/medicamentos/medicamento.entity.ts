// 1. Modelo de Datos para TypeORM
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity('medicamentos')
export class Medicamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  categoria: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  tomo: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  grupoTerapeutico: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  nombreGenerico: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  clave: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  formaFarmaceutica: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  formula: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  presentacionEnvase: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  indicaciones: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  viaAdministracionDosis: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  generalidades: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  riesgoEmbarazo: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  reaccionesAdversas: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  contraindicacionesPrecauciones: string;

  @Column('text')
  @IsNotEmpty()
  @IsString()
  interacciones: string;
}

