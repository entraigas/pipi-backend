import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import type { IDocente} from './interfaces/docente.interface';
import { CreateDocenteDTO, UpdateDocenteDTO } from './dto'


@Injectable()
export class DocenteService {
  private registros: IDocente[] = [
    {
      id: 1,
      nombre: 'Profesor Jirafales',
      email: 'jirafales@mail.com',
      pass: '123',
    },
    {
      id: 2,
      nombre: 'Don Ramon',
      email: 'ramon@mail.com',
      pass: '123',
    },
    {
      id: 3,
      nombre: 'Dona Florinda',
      email: 'florinda@mail.com',
      pass: '123',
    },
  ]

  findAll() {
    return this.registros
  }

  findOneById(id: number) {
    const registro = this.registros.find(item => item.id === id)
    if(!registro)
      throw new NotFoundException(`Docente id = '${id}' not found!`)
    return registro
  }

  create(createDocenteDTO: CreateDocenteDTO) {
    const id = this.registros.length
    const registro: IDocente = { id, ...createDocenteDTO }
    this.registros.push(registro)
    return registro
  }

  update(id: number, updateDocenteDTO: UpdateDocenteDTO) {
    if (id && id !== updateDocenteDTO.id)
      throw new BadRequestException(`Invalid 'id' value!`)

    const registro = this.findOneById(id)
    this.registros = this.registros.map(item => {
      if (item.id === id)
        return { ...registro, ...updateDocenteDTO, id}
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
