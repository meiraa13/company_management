import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1698702598220 implements MigrationInterface {
    name = 'InitialMigration1698702598220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`clientName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`companyName\` varchar(255) NOT NULL, \`CNPJ\` varchar(14) NOT NULL, \`CEP\` varchar(8) NOT NULL, \`address\` varchar(255) NOT NULL, \`addressNumber\` varchar(3) NOT NULL, \`phoneNumber\` varchar(11) NOT NULL, \`email\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_d0af6f5866201d5cb424767744\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_d0af6f5866201d5cb424767744\` ON \`companies\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
    }

}
