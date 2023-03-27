import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';
import { ProductFromAdminDto } from './dto/productFromAdmin.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async findAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async createProduct(data: ProductFromAdminDto): Promise<Product> {
    return (await this.productModel.create(data)).save();
  }

  async updateProduct(data: ProductFromAdminDto): Promise<Product> {
    const product = await this.productModel.findOneAndUpdate(
      { id: data.id },
      data,
    );
    return product;
  }

  async deleteProduct(data: ProductFromAdminDto): Promise<Product> {
    const product = await this.productModel.findOneAndDelete({ id: data.id });
    return product;
  }
}
