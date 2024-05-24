import { IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateContenidoDTO {
  @IsNumber()
  id: number

  @IsString()
  @IsOptional()
  readonly nombre: string  
}