import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

const port = process.env.PORT || process.env.HTTP_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api').useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );

  app.use(bodyParser.urlencoded({ extended: true }));

  app.enableCors();

  await app.listen(port).then(() => {
    new Logger().log(port, 'Server Port');
  });
}
bootstrap();
