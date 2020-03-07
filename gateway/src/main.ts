import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { LocaleInterceptor } from "./locale.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LocaleInterceptor());
  await app.listen(3000);
}
bootstrap();
