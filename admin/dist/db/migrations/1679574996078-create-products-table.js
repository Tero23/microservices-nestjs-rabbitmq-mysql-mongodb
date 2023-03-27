"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductsTable1679574996078 = void 0;
class createProductsTable1679574996078 {
    constructor() {
        this.name = 'createProductsTable1679574996078';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`products\``);
    }
}
exports.createProductsTable1679574996078 = createProductsTable1679574996078;
//# sourceMappingURL=1679574996078-create-products-table.js.map