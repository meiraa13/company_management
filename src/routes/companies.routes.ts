import { Router } from "express";
import { createCompanyController, deleteCompanyController, readAllCompaniesController, readOneCompanyController, updateCompanyController } from "../controllers/companies.controller";
import { ensureSchemaIsValidMW } from "../middlewares/ensureSchemaIsValid.middleware";
import { companyRequestSchema, companyUpdateSchema } from "../schemas/company.schema";
import { ensureEmailIsValidMW } from "../middlewares/ensureEmailIsValid.middleware";
import { ensureIdIsValidMW } from "../middlewares/ensureIdIsValid.middleware";

const companyRoutes:Router = Router()

companyRoutes.get("", readAllCompaniesController)
companyRoutes.post("",ensureSchemaIsValidMW(companyRequestSchema),ensureEmailIsValidMW,createCompanyController)
companyRoutes.get("/:cnpj", readOneCompanyController)
companyRoutes.patch("/:id", ensureSchemaIsValidMW(companyUpdateSchema),ensureIdIsValidMW,updateCompanyController)
companyRoutes.delete("/:id", ensureIdIsValidMW,deleteCompanyController)

export default companyRoutes