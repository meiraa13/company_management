import { z } from "zod"

const companySchema = z.object({
    id:z.number(),
    clientName:z.string(),
    password:z.string(),
    companyName:z.string(),
    CNPJ:z.string().length(14),
    CEP:z.string().length(8),
    address:z.string(),
    addressNumber:z.string(),
    phoneNumber:z.string().length(11),
    email:z.string().email()
})

const companyRequestSchema = companySchema.omit({
    id:true
})

const companyResponseSchema = companySchema.omit({
    password:true
})

const companyUpdateSchema = companyRequestSchema.partial()

export { companySchema, companyRequestSchema, companyResponseSchema, companyUpdateSchema}