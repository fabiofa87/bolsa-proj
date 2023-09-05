import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { InitTransactionDTO } from './order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  initTransaction(@Body() body: InitTransactionDTO) {
    return this.ordersService.initTransaction(body);
  }

  executeTransaction() {
    this.ordersService.executeTransaction({} as any);
  }
}
