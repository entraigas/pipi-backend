import type { IContenido } from './contenido.interface'

export interface IMateria {
  id: number
  nombre: string
  id_profesor: number
  contenido?: IContenido[]
}
