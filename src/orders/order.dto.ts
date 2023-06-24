import { IsNotEmpty } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class NewOrderDTO {
  asset_id: string;
  price: number;
  @IsNotEmpty()
  status: OrderStatus;
}
