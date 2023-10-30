import { companyRepository } from "../data-source";
import { AppError } from "../error";

export async function readOneCompanyService (companyCnpj:string){
    const company = await companyRepository.findOne({
        where:{CNPJ:companyCnpj}
    })

    if(!company){
        throw new AppError("cnpj not found",404)
    }

    return company
}