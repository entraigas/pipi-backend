import { IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateMateriaDTO {
  @IsNumber()
  id: number

  @IsString()
  @IsOptional()
  readonly nombre: string  
}