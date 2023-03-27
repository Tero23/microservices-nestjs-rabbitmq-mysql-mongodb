import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly image: string;
}
