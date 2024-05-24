import { Module } from '@nestjs/common';
import { DocenteModule } from './docente/docente.module';
import { AlumnoModule } from './alumno/alumno.module';
import { MateriaModule } from './materia/materia.module';

@Module({
  imports: [DocenteModule, AlumnoModule, MateriaModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
