import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { get, isArray } from 'lodash'
import type { IMateria, IContenido } from './interfaces';
import { CreateMateriaDTO, UpdateMateriaDTO, CreateContenidoDTO } from './dto'

@Injectable()
export class MateriaService {
  private registros: IMateria[] = [
    {
      id: 1,
      nombre: 'Materia 1',
      id_profesor: 1,
    },
    {
      id: 2,
      nombre: 'Materia 2',
      id_profesor: 2,
    },
    {
      id: 3,
      nombre: 'Materia 3',
      id_profesor: 3,
    },
  ]

  /*
   * Materia 
   */
  findAll() {
    return this.registros
  }

  findOneById(id: number) {
    const registro = this.registros.find(item => item.id === id)
    if(!registro)
      throw new NotFoundException(`Materia id = '${id}' not found!`)
    return registro
  }

  create(dto: CreateMateriaDTO) {
    const id = this.registros.length
    const registro: IMateria = { id, ...dto }
    this.registros.push(registro)
    return registro
  }

  update(id: number, dto: UpdateMateriaDTO) {
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

  /*
   * Contenidos de las materias
   */
  listAllContenidos(id_materia: number) {
    const item = this.findOneById(id_materia)
    return get(item, 'contenido', []) as IContenido[]
  }

  findOneContenidoById(id_materia: number, id_contenido: number) {
    const array = this.listAllContenidos(id_materia)
    const registro = array.find(item => item.id = id_contenido)
    if(!registro)
      throw new NotFoundException(`Contenido id = '${id_contenido}' not found!`)
    return registro
  }

  addContenido(id_materia: number, dto: CreateContenidoDTO) {
    const item = this.findOneById(id_materia)
    if(!isArray(item.contenido))
      item.contenido = []
    const id = item.contenido.length + 1
    const registro = { ...dto, id_materia, id}
    item.contenido.push(registro)
  }

  deleteContenido(id_materia: number, id_contenido: number) {
    const item = this.findOneContenidoById(id_materia, id_contenido)
    const materia = this.findOneById(id_materia)
    const index = materia.contenido.indexOf(item)
    materia.contenido.splice(index, 1)
  }
}
