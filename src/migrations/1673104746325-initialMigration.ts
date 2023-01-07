import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1673104746325 implements MigrationInterface {
    name = 'initialMigration1673104746325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "snacks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(62) NOT NULL, "price" numeric(5,2) NOT NULL, "img" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "UQ_8c624a5c08070d08e1cb56fb850" UNIQUE ("name"), CONSTRAINT "PK_7ae77e4dcf87277e4dd0c717c04" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(62) NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(62) NOT NULL, "email" character varying(72) NOT NULL, "password" character varying(120) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "snacks_cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "snackId" uuid, CONSTRAINT "PK_979e63307fb4d2da7b758c00537" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "snacks" ADD CONSTRAINT "FK_80d7d59f83c8f3efe197cba37b4" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "snacks_cart" ADD CONSTRAINT "FK_9174036fc2d7681ddde790590f1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "snacks_cart" ADD CONSTRAINT "FK_45f0ddd48ab12a1d7c72146c762" FOREIGN KEY ("snackId") REFERENCES "snacks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "snacks_cart" DROP CONSTRAINT "FK_45f0ddd48ab12a1d7c72146c762"`);
        await queryRunner.query(`ALTER TABLE "snacks_cart" DROP CONSTRAINT "FK_9174036fc2d7681ddde790590f1"`);
        await queryRunner.query(`ALTER TABLE "snacks" DROP CONSTRAINT "FK_80d7d59f83c8f3efe197cba37b4"`);
        await queryRunner.query(`DROP TABLE "snacks_cart"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "snacks"`);
    }

}
