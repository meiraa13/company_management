import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeLength1698703915481 implements MigrationInterface {
    name = 'ChangeLength1698703915481'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`addressNumber\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`addressNumber\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`addressNumber\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`addressNumber\` varchar(3) NOT NULL`);
    }

}
