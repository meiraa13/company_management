import { companyRepository } from "../data-source";
import { TCompanyResponse, TCompanyUpdate } from "../interfaces/company.interfaces";
import { companyResponseSchema } from "../schemas/company.schema";

export async function updateCompanyService(companyId:number, data:TCompanyUpdate):Promise<TCompanyResponse> {

    const currentCompany = await companyRepository.findOne({
        where:{id:companyId}
    })

    const updatedCompany = companyRepository.create({
        ...currentCompany,
        ...data
    })

    await companyRepository.save(updatedCompany)
    const companyResponse:TCompanyResponse = companyResponseSchema.parse(updatedCompany)

    return companyResponse

    
}