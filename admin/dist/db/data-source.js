"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const dotenv_1 = require("dotenv");
const product_entity_1 = require("../src/product/product.entity");
const typeorm_1 = require("typeorm");
const _1679574996078_create_products_table_1 = require("./migrations/1679574996078-create-products-table");
(0, dotenv_1.config)();
exports.dataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'microservices-nestjs-react-rabbitmq',
    entities: [product_entity_1.ProductEntity],
    migrations: [_1679574996078_create_products_table_1.createProductsTable1679574996078],
    logging: true,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map