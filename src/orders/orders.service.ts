import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { NewOrderDTO } from './order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.order.findMany();
  }

  create(data: NewOrderDTO) {
    return this.prismaService.order.create({ data });
  }
}
