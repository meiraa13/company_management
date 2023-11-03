import { z } from "zod"

const companySchema = z.object({
    id:z.number(),
    clientName:z.string(),
    password:z.string(),
    companyName:z.string(),
    cnpj:z.string().length(14).regex(/^[0-9]+$/),
    cep:z.string().length(8).regex(/^[0-9]+$/),
    address:z.string(),
    addressNumber:z.string().regex(/^[0-9]+$/),
    phoneNumber:z.string().length(11).regex(/^[0-9]+$/),
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