import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AlumnoService } from './alumno.service'
import { CreateAlumnoDTO, UpdateAlumnoDTO } from './dto'


@Controller('alumno')
@UsePipes(ValidationPipe)
export class AlumnoController {

  constructor(
    private readonly service: AlumnoService
  ){}
    
  @Get()
  getList() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOneById(id)
  }

  @Post()
  create(@Body() dto: CreateAlumnoDTO) {
    return this.service.create(dto)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAlumnoDTO) {
    return this.service.update(id, dto)
  }

  @Get(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id)
  }

}
