import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DocenteService } from './docente.service'
import { CreateDocenteDTO, UpdateDocenteDTO } from './dto'


@Controller('docente')
@UsePipes(ValidationPipe)
export class DocenteController {

  constructor(
    private readonly service: DocenteService
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
  create(@Body() dto: CreateDocenteDTO) {
    return this.service.create(dto)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDocenteDTO) {
    return this.service.update(id, dto)
  }

  @Get(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id)
  }

}
