import "dotenv/config"
import { DataSource, DataSourceOptions, Repository } from "typeorm";
import path from "path";
import { Company } from "./entities/company.entity";

const settings = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  return {
    type: "mysql",
    host:process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

const AppDataSource = new DataSource(settings());

const companyRepository:Repository<Company> = AppDataSource.getRepository(Company)

export { AppDataSource, companyRepository };