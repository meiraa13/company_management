import { companyRepository } from "../data-source";

export async function readAllCompaniesService(){
    const companies = companyRepository.find()

    return companies

}