import { z } from "zod"
import { companyRequestSchema, companyResponseSchema, companySchema, companyUpdateSchema } from "../schemas/company.schema"
import { DeepPartial } from "typeorm"

type TCompany = z.infer<typeof companySchema>
type TCompanyRequest = z.infer<typeof companyRequestSchema>
type TCompanyResponse = z.infer<typeof companyResponseSchema>
type TCompanyUpdate = DeepPartial<typeof companyUpdateSchema>

export { TCompany, TCompanyRequest, TCompanyResponse, TCompanyUpdate}