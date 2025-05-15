<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Tecnologías instaladas

- **Node.js y npm**: Plataforma y gestor de paquetes para JavaScript.
- **NestJS**: Framework para construir aplicaciones backend en Node.js usando TypeScript.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **MySQL**: Base de datos relacional utilizada por la aplicación.
- **TypeORM**: ORM para manejar la base de datos con entidades en TypeScript.
- **Swagger**: Documentación interactiva de la API (disponible en `/api-docs`).
- **Jest**: Framework para pruebas unitarias y de integración.
- **Docker**: (opcional) Para levantar servicios como la base de datos MySQL fácilmente.
- **ESLint y Prettier**: Herramientas para mantener la calidad y formato del código.

---

## Cómo arrancar el proyecto

1. **Instala las dependencias**

   ```bash
   npm install
   ```

2. **Configura las variables de entorno**

   Copia `.env.example` a `.env` y ajusta los valores según tu entorno (por ejemplo, credenciales de MySQL).

3. **Levanta la base de datos MySQL**

   Puedes usar Docker con el archivo `docker-compose.yml`:

   ```bash
   docker-compose up -d
   ```

   O usar tu propia instancia de MySQL y asegurarte de que los datos de conexión coincidan con los de `.env`.

4. **Arranca la aplicación en modo desarrollo**

   ```bash
   npm run start:dev
   ```

5. **Accede a la documentación de la API**

   Una vez corriendo, abre [http://localhost:3000/api-docs](http://localhost:3000/api-docs) para ver Swagger.

6. **Ejecuta pruebas (opcional)**

   ```bash
   npm run test
   ```

---

**Notas:**
- El backend por defecto corre en el puerto `3000`.
- Si necesitas cambiar el puerto o la configuración de la base de datos, edita el archivo `.env`.
- Si tienes problemas con dependencias, asegúrate de tener Node.js y npm actualizados.