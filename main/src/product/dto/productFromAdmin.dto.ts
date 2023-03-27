import { IsNotEmpty } from 'class-validator';

export class ProductFromAdminDto {
  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly image: string;

  readonly likes?: number;
}
