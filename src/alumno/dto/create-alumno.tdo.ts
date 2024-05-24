import { IsString, MinLength } from "class-validator"

export class CreateAlumnoDTO {
  @IsString()
  @MinLength(3)
  readonly nombre: string
}