import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Config de AllExceptionsFilter
  app.useGlobalFilters(new AllExceptionsFilter());
  // Config de Swagger
  const config = new DocumentBuilder()
    .setTitle('Epayco API Core')
    .setDescription('Documentación de la API Core de Epayco')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
