import { Product } from './product.model';
import { Model } from 'mongoose';
import { ProductFromAdminDto } from './dto/productFromAdmin.dto';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    findAllProducts(): Promise<Product[]>;
    createProduct(data: ProductFromAdminDto): Promise<Product>;
    updateProduct(data: ProductFromAdminDto): Promise<Product>;
    deleteProduct(data: ProductFromAdminDto): Promise<Product>;
}
