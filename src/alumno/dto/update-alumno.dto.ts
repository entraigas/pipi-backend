import { IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateAlumnoDTO {
  @IsNumber()
  id: number

  @IsString()
  @IsOptional()
  readonly nombre: string  
}