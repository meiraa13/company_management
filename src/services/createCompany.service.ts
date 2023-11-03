import { companyRepository } from "../data-source";
import { TCompanyRequest, TCompanyResponse } from "../interfaces/company.interfaces";
import { companyResponseSchema } from "../schemas/company.schema";


export async function createCompanyService(data:TCompanyRequest):Promise<TCompanyResponse> {
    const newCompany = companyRepository.create(data)

    await companyRepository.save(newCompany)
    const companyResponse:TCompanyResponse = companyResponseSchema.parse(newCompany)

    return companyResponse
}