import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';
import { Product } from './product.model';
import { ProductFromAdminDto } from './dto/productFromAdmin.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAllProducts(): Promise<Product[]> {
    return this.productService.findAllProducts();
  }

  @EventPattern('Hello Event')
  async hello(data: string): Promise<void> {
    console.log(data);
  }

  @EventPattern('Product_created')
  async createProduct(data: ProductFromAdminDto): Promise<Product> {
    return this.productService.createProduct({
      id: data.id,
      title: data.title,
      image: data.image,
    });
  }

  @EventPattern('Product_updated')
  async updateProduct(data: ProductFromAdminDto): Promise<Product> {
    return this.productService.updateProduct(data);
  }

  @EventPattern('Product_deleted')
  async deleteProduct(data: ProductFromAdminDto): Promise<Product> {
    return this.productService.deleteProduct(data);
  }
}
