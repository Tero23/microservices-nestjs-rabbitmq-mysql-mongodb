import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './dto/createProduct.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private readonly productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    getAllProducts(): Promise<ProductEntity[]>;
    createProduct(createProductDto: CreateProductDto): Promise<ProductEntity>;
    getProduct(productId: number): Promise<ProductEntity>;
    updateProduct(productId: number, createProductDto: CreateProductDto): Promise<ProductEntity>;
    deleteProduct(productId: number): Promise<ProductEntity>;
}
