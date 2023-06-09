"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const microservices_1 = require("@nestjs/microservices");
const productFromAdmin_dto_1 = require("./dto/productFromAdmin.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async findAllProducts() {
        return this.productService.findAllProducts();
    }
    async hello(data) {
        console.log(data);
    }
    async createProduct(data) {
        return this.productService.createProduct({
            id: data.id,
            title: data.title,
            image: data.image,
        });
    }
    async updateProduct(data) {
        return this.productService.updateProduct(data);
    }
    async deleteProduct(data) {
        return this.productService.deleteProduct(data);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAllProducts", null);
__decorate([
    (0, microservices_1.EventPattern)('Hello Event'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "hello", null);
__decorate([
    (0, microservices_1.EventPattern)('Product_created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productFromAdmin_dto_1.ProductFromAdminDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, microservices_1.EventPattern)('Product_updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productFromAdmin_dto_1.ProductFromAdminDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, microservices_1.EventPattern)('Product_deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productFromAdmin_dto_1.ProductFromAdminDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map