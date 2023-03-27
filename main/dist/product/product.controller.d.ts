import { ProductService } from './product.service';
import { Product } from './product.model';
import { ProductFromAdminDto } from './dto/productFromAdmin.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAllProducts(): Promise<Product[]>;
    hello(data: string): Promise<void>;
    createProduct(data: ProductFromAdminDto): Promise<Product>;
    updateProduct(data: ProductFromAdminDto): Promise<Product>;
    deleteProduct(data: ProductFromAdminDto): Promise<Product>;
}
