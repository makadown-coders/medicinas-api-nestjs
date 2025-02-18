// 2. Seeder para cargar datos desde Excel
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicamento } from './medicamento.entity';
import * as xlsx from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class MedicamentoSeeder {
  constructor(
    @InjectRepository(Medicamento)
    private medicamentoRepository: Repository<Medicamento>,
  ) {}

  async seedFromExcel(): Promise<void> {
    const existingCount = await this.medicamentoRepository.count();
    if (existingCount > 0) {
      console.log('📌 La base de datos ya contiene medicamentos. Seed abortado.');
      return;
    }
    
    // Definir ruta para el archivo Excel en src/ o en dist/ según el entorno
    const filePath = path.resolve(
      __dirname.includes('dist') ? path.join(__dirname, '../data/Cat1-Medicamentos.xlsx') : path.join(__dirname, '../../data/Cat1-Medicamentos.xlsx')
    );
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ No se encontró el archivo Excel en la ruta: ${filePath}`);
      return;
    }
    
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data: any[] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    
    for (const row of data) {
      const medicamento = this.medicamentoRepository.create({
        categoria: row['Categoria'] || 'No especificado',
        tomo: row['Tomo'] || 'No especificado',
        grupoTerapeutico: row['Grupo Terapéutico'] || 'No especificado',
        nombreGenerico: row['Nombre genérico'] || 'No especificado',
        clave: row['Clave'] || 'No especificado',
        formaFarmaceutica: row['Forma farmacéutica'] || 'No especificado',
        formula: row['Fórmula'] || 'No especificado',
        presentacionEnvase: row['Presentación y envase'] || 'No especificado',
        indicaciones: row['Indicaciones terapéuticas'] || 'No especificado',
        viaAdministracionDosis: row['Vía de administración y dosis'] || 'No especificado',
        generalidades: row['Generalidades'] || 'No especificado',
        riesgoEmbarazo: row['Riesgo en el embarazo'] || 'No especificado',
        reaccionesAdversas: row['Reacciones adversas'] || 'No especificado',
        contraindicacionesPrecauciones: row['Contraindicaciones y precauciones'] || 'No especificado',
        interacciones: row['Interacciones'] || 'No especificado',
      });
      await this.medicamentoRepository.save(medicamento);
    }
    console.log('✅ Carga de datos desde Excel completada.');
  }
}
