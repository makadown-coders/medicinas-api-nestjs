# 📌 Medicinas API - NestJS 🚀

## 📖 Descripción
Esta API es una **prueba de concepto** desarrollada para **IMSS Bienestar**, enfocada en demostrar la viabilidad de un sistema basado en **NestJS** para la consulta de insumos.

El objetivo es facilitar la **consulta estructurada** de medicamentos dentro del sistema, integrando buenas prácticas de desarrollo, arquitectura limpia y despliegue en la nube mediante herramientas como **Koyeb**.

Esta API permite obtener información detallada sobre insumos del grupo 1 (medicamentos) con un enfoque escalable y seguro, usando **TypeORM y SQLite** como base de datos.

## 🌐 URL de la API
🔗 **Base URL:** [https://creepy-valerie-imssb-7706b603.koyeb.app](https://creepy-valerie-imssb-7706b603.koyeb.app)

## 📌 Endpoints Disponibles

### 🔍 Obtener todos los medicamentos
**GET** `/medicamentos`
```bash
curl -X GET https://creepy-valerie-imssb-7706b603.koyeb.app/medicamentos
```
📌 **Descripción:** Retorna la lista completa de medicamentos almacenados en la base de datos.

---
### 🔍 Buscar medicamento por ID
**GET** `/medicamentos/{id}`
```bash
curl -X GET https://creepy-valerie-imssb-7706b603.koyeb.app/medicamentos/1
```
📌 **Descripción:** Retorna la información detallada de un medicamento específico según su **ID**.

---
### 🔍 Buscar medicamento por nombre genérico
**GET** `/medicamentos/nombre/{nombreGenerico}`
```bash
curl -X GET https://creepy-valerie-imssb-7706b603.koyeb.app/medicamentos/nombre/ibuprofeno
```
📌 **Descripción:** Retorna los medicamentos cuyo **nombre genérico** coincide con el criterio de búsqueda.

## 🚀 Tecnologías utilizadas
- **NestJS** - Framework de Node.js para aplicaciones escalables
- **TypeORM** - ORM para la gestión de la base de datos
- **SQLite** - Base de datos ligera embebida
- **Koyeb** - Plataforma de despliegue en la nube
- **Docker** - Contenerización del servicio
- **TypeScript** - Tipado estático para mayor seguridad

## 🎯 Objetivo de la prueba de concepto
Esta prueba busca demostrar que es posible implementar un sistema **moderno, escalable y eficiente** para la **gestión de medicamentos** en IMSS Bienestar. La API facilita consultas rápidas sobre medicamentos, mejorando la disponibilidad de información y la interoperabilidad con otros sistemas.

📌 **Beneficios esperados:**
- ✅ **Facilidad de consulta**: Acceso rápido a información de medicamentos.
- ✅ **Escalabilidad**: Puede integrarse con sistemas hospitalarios más grandes.
- ✅ **Despliegue ágil**: Infraestructura moderna en la nube con Koyeb.
- ✅ **Código mantenible**: Uso de NestJS y buenas prácticas de desarrollo.

## 🛠 Cómo ejecutar localmente
1️⃣ Clonar el repositorio
```bash
git clone https://github.com/makadown-coders/medicinas-api-nestjs.git
cd medicinas-api-nestjs
```

2️⃣ Instalar dependencias
```bash
npm install
```

3️⃣ Ejecutar la API en desarrollo
```bash
npm run start:dev
```

4️⃣ Acceder a la API en `http://localhost:3000/medicamentos`

## 📬 Contacto
Si tienes preguntas o sugerencias, ¡contáctame! 😊


## Artículo informativo en Koyeb
https://www.koyeb.com/tutorials/continuous-deployment-of-a-nestjs-application-on-koyeb#deploy-the-nest-app-on-koyeb