import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/createOrder.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() req: CreateOrderRequest) {
    return this.ordersService.createOrder(req);
  }

  @Get('/')
  async getOrders() {
    return this.ordersService.getOrders();
  }
}
