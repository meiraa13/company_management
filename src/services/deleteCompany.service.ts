import { companyRepository } from "../data-source";

export async function deleteCompanyService(companyId:number) {
    const company = await companyRepository.findOne({
        where:{id:companyId}
    })

    await companyRepository.delete(company!)

    
}