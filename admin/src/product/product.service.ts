import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getAllProducts(): Promise<ProductEntity[]> {
    const products = await this.productRepository.find();
    return products;
  }

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    const product = this.productRepository.create({
      title: createProductDto.title,
      image: createProductDto.image,
    });
    await this.productRepository.save(product);
    return product;
  }

  async getProduct(productId: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product)
      throw new HttpException(
        'There is no such product!',
        HttpStatus.NOT_FOUND,
      );
    return product;
  }

  async updateProduct(
    productId: number,
    createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product)
      throw new HttpException(
        'There is no such product!',
        HttpStatus.NOT_FOUND,
      );
    product.title = createProductDto.title;
    product.image = createProductDto.image;
    await this.productRepository.save(product);
    return product;
  }

  async deleteProduct(productId: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product)
      throw new HttpException(
        'There is no such product!',
        HttpStatus.NOT_FOUND,
      );
    await this.productRepository.delete(product);
    return product;
  }
}
