import { MigrationInterface, QueryRunner } from "typeorm";

export class addCategories1673104800970 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "categories" 
              (id, name) 
            VALUES 
              ('49ed8b3c-53ec-49cd-af8f-3dce5df9a932', 'Sanduíches'), 
              ('12abbc30-74c1-4226-8365-fa1f396fa069', 'Bebidas'), 
              ('b8127e91-988d-40eb-9bd4-a2bcd6dfe26c', 'Sobremesas'), 
              ('d9ef16fb-d5ef-4e19-a0a0-052c0e384422', 'Combos')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
