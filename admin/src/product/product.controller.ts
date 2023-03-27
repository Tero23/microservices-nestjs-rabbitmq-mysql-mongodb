import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './dto/createProduct.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getAllProducts(): Promise<ProductEntity[]> {
    this.client.emit('Hello Event', 'Hello from rabbitmq!');
    return this.productService.getAllProducts();
  }

  @Post()
  async createProduct(
    @Body('product') createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    const product = await this.productService.createProduct(createProductDto);

    this.client.emit('Product_created', product);

    return product;
  }

  @Get('/:productId')
  async getProduct(
    @Param('productId') productId: number,
  ): Promise<ProductEntity> {
    return this.productService.getProduct(productId);
  }

  @Put('/:productId')
  async updateProduct(
    @Param('productId') productId: number,
    @Body('product') createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    const product = await this.productService.updateProduct(
      productId,
      createProductDto,
    );

    this.client.emit('Product_updated', product);

    return product;
  }

  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') productId: number,
  ): Promise<ProductEntity> {
    const product = await this.productService.deleteProduct(productId);

    this.client.emit('Product_deleted', product);

    return product;
  }
}
