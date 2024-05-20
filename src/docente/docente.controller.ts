import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DocenteService } from './docente.service'
import { CreateDocenteDTO, UpdateDocenteDTO } from './dto'


@Controller('docente')
@UsePipes(ValidationPipe)
export class DocenteController {

  constructor(
    private readonly docenteService: DocenteService
  ){}
    
  @Get()
  getList() {
    return this.docenteService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.docenteService.findOneById(id)
  }

  @Post()
  create(@Body() createCDocenteDto: CreateDocenteDTO) {
    return this.docenteService.create(createCDocenteDto)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCDocenteDto: UpdateDocenteDTO) {
    return this.docenteService.update(id, updateCDocenteDto)
  }

  @Get(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.docenteService.delete(id)
  }

}
