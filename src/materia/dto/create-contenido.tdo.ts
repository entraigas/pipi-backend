import { IsNumber, IsString, MinLength } from "class-validator"

export class CreateContenidoDTO {
  @IsString()
  @MinLength(3)
  readonly nombre: string

  @IsNumber()
  readonly id_materia: number
}