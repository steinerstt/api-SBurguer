import { MigrationInterface, QueryRunner } from "typeorm";

export class addSnacks1673112341325 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO "snacks"
                  (name, price, "categoryId", img)
                VALUES
                  ('Hamburguer', '14', '49ed8b3c-53ec-49cd-af8f-3dce5df9a932', 'https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/hamb1.png?raw=true'),
                  ('X-Burguer', '16', '49ed8b3c-53ec-49cd-af8f-3dce5df9a932', 'https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/hamb2.png?raw=true'),
                  ('Big Burguer', 18, '49ed8b3c-53ec-49cd-af8f-3dce5df9a932' ,'https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/hamb3.png?raw=true'),
                  ('Fanta Guaraná', '5', '12abbc30-74c1-4226-8365-fa1f396fa069', 'https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/bebi1.png?raw=true'),
                  ('Coca-Cola' , 4.99, '12abbc30-74c1-4226-8365-fa1f396fa069',  'https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/bebi2.png?raw=true'),
                  ('Milkshake ovomaltine', '4.99', 'b8127e91-988d-40eb-9bd4-a2bcd6dfe26c', 'https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/bebi3.png?raw=true'),
                  ('Combo Burguer', '26', 'd9ef16fb-d5ef-4e19-a0a0-052c0e384422', 'https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/comb1.jpg?raw=true'),
                  ('Sundae Chocolate', '10', 'b8127e91-988d-40eb-9bd4-a2bcd6dfe26c', 'https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/sobre1.jpg?raw=true')                
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
