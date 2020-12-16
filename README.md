# Microservicio BOT

Micro servicio encargado atender las peticiones que se hacen al bot y enviar la respuesta apropiada utilizando los otros microservicios.

## Variables de entorno que deben ser configuradas

`STOKEN`: Valor del token secreto, por defecto es `secret`, esto debe ser cambiado para mejor seguridad.

`BOT_URI`: Dirección del servidor y el puerto en la que está corriendo el bot.

`BOT_TOKEN`: Token del bot.

`PORT`: Puerto donde va a correr el servicio, por defecto es 4000

`MONGO_URI`: URI de la base de datos MongoDB, por defecto: `mongodb://127.0.0.1/coviddb`

`API_URI`: URI del API

## Instalación y ejecución
1. Clonar este repo.
2. Instalar dependencias de node: `yarn install` o `npm install`
3. Compilar de typescript a javascript: `yarn build` o `npm run build`
4. Ejecutar servicio: `yarn start` o `npm run start`
