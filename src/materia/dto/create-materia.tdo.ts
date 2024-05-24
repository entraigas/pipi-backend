import { IsNumber, IsString, MinLength } from "class-validator"

export class CreateMateriaDTO {
  @IsString()
  @MinLength(3)
  readonly nombre: string

  @IsNumber()
  readonly id_profesor: number
}