import { CommandFactory } from 'nest-commander';
import { WCModule } from './wc/wc.module';

async function bootstrap() {
  await CommandFactory.run(WCModule);
}

bootstrap();
