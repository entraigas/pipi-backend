import { IsString, MinLength } from "class-validator"

export class CreateDocenteDTO {
  @IsString()
  @MinLength(3)
  readonly nombre: string

  @IsString()
  readonly email: string

  @IsString()
  @MinLength(6)
  readonly pass: string
}