import { config } from 'dotenv';
import { ProductEntity } from 'src/product/product.entity';
import { DataSourceOptions, DataSource } from 'typeorm';
import { createProductsTable1679574996078 } from './migrations/1679574996078-create-products-table';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: process.env.DB_PASSWORD,
  database: 'microservices-nestjs-react-rabbitmq',
  entities: [ProductEntity],
  migrations: [createProductsTable1679574996078],
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
