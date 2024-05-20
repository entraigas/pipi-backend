import { IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateDocenteDTO {
  @IsNumber()
  id: number

  @IsString()
  @IsOptional()
  readonly nombre: string
  
  @IsString()
  @IsOptional()
  readonly email: string  
}