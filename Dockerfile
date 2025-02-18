# Dockerfile optimizado para Koyeb

# Usar la imagen oficial de Node.js como base
FROM node:18-alpine AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código de la aplicación
COPY . .

# Crear la carpeta dist/data antes de copiar el archivo Excel
RUN mkdir -p dist/data && cp src/data/Cat1-Medicamentos.xlsx dist/data/

# Construir la aplicación
RUN npm run build

# Crear una nueva imagen para producción
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar solo los archivos necesarios desde la fase de construcción
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Asegurar que la carpeta de datos exista en producción
RUN mkdir -p /app/dist/data
COPY --from=build /app/dist/data/Cat1-Medicamentos.xlsx /app/dist/data/

# Exponer el puerto en el que corre NestJS
EXPOSE 3000

# Comando para ejecutar la aplicación en producción
CMD ["node", "dist/main.js"]