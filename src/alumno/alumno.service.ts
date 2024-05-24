import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import type { IAlumno } from './interfaces/alumno.interface';
import { CreateAlumnoDTO, UpdateAlumnoDTO } from './dto'

@Injectable()
export class AlumnoService {
  private registros: IAlumno[] = [
    {
      id: 1,
      nombre: 'Chavo del 8',
    },
    {
      id: 2,
      nombre: 'Kiko',
    },
    {
      id: 3,
      nombre: 'Chilindrina',
    },
  ]

  findAll() {
    return this.registros
  }

  findOneById(id: number) {
    const registro = this.registros.find(item => item.id === id)
    if(!registro)
      throw new NotFoundException(`Alumno id = '${id}' not found!`)
    return registro
  }

  create(dto: CreateAlumnoDTO) {
    const id = this.registros.length
    const registro: IAlumno = { id, ...dto }
    this.registros.push(registro)
    return registro
  }

  update(id: number, dto: UpdateAlumnoDTO) {
    if (id && id !== dto.id)
      throw new BadRequestException(`Invalid 'id' value!`)

    const registro = this.findOneById(id)
    this.registros = this.registros.map(item => {
      if (item.id === id)
        return { ...registro, ...dto, id}
      return item
    })

    return registro
  }

  delete(id: number) {
    const registro = this.findOneById(id)
    const index = this.registros.indexOf(registro)
    this.registros.splice(index, 1)
  }
}
