import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './dto/createProduct.dto';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    getAllProducts(): Promise<ProductEntity[]>;
    createProduct(createProductDto: CreateProductDto): Promise<ProductEntity>;
    getProduct(productId: number): Promise<ProductEntity>;
    updateProduct(productId: number, createProductDto: CreateProductDto): Promise<ProductEntity>;
    deleteProduct(productId: number): Promise<ProductEntity>;
}
