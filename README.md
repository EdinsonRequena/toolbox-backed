# Toolbox Backend

Este proyecto es el backend de la aplicación Toolbox, construido con Node.js, Express y Docker.

## Estructura del Proyecto

- `src/`: Contiene todo el código fuente del backend.
  - `controllers/`: Define los controladores que manejan las solicitudes HTTP.
  - `routes/`: Define las rutas de la aplicación.
  - `services/`: Contiene la lógica de negocio y las interacciones con la API externa.

## Requisitos

- Node.js 14
- Docker (opcional)

## Ejecutar el Proyecto sin Docker

1. Clona el repositorio:
    ```bash
    git clone https://github.com/EdinsonRequena/toolbox-backend.git
    cd toolbox-backend
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia la aplicación:
    ```bash
    npm start
    ```

4. La API estará disponible en [http://localhost:3000](http://localhost:3000).

## Ejecutar el Proyecto con Docker

1. Corre el siguiente comando para construir y levantar los contenedores de Docker:
    ```bash
    docker-compose up --build
    ```

2. La API estará disponible en [http://localhost:3000](http://localhost:3000).

## Ejecutar los Tests

1. Corre los tests unitarios con Mocha:
    ```bash
    npm test
    ```

## Endpoints

- `GET /api/files/list`: Devuelve la lista de archivos disponibles.
- `GET /api/files/data?fileName=<Nombre del archivo>`: Devuelve los datos de un archivo específico.

## Notas

- Como se especificó en las reglas, este proyecto no depende de variables de entorno, por lo que la Api key de la API externa se encuentra en el código fuente.
