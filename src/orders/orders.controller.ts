import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { NewOrderDTO } from './order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  all() {
    return this.ordersService.all();
  }

  @Post()
  create(@Body() body: NewOrderDTO) {
    return this.ordersService.create(body);
  }
}
