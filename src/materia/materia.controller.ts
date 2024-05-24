import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MateriaService } from './materia.service'
import { CreateMateriaDTO, UpdateMateriaDTO } from './dto'


@Controller('materia')
@UsePipes(ValidationPipe)
export class MateriaController {

  constructor(
    private readonly service: MateriaService
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
  create(@Body() dto: CreateMateriaDTO) {
    return this.service.create(dto)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMateriaDTO) {
    return this.service.update(id, dto)
  }

  @Get(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id)
  }

}
