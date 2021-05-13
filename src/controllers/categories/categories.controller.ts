import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId, @Param('id') id): string {
    return `Product ${productId} and ${id}`;
  }
}
