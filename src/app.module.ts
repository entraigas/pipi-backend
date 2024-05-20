import { Module } from '@nestjs/common';
import { DocenteModule } from './docente/docente.module';

@Module({
  imports: [DocenteModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
