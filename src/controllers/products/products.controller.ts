import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit:number = 100,
    @Query('offset') offset:number = 0,
    @Query('brand') brand: string,
  ): string {
    return `Products limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId): string {
    return `Product ${productId}`;
  }
}
