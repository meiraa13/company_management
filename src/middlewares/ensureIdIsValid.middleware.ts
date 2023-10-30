import { NextFunction, Request, Response } from "express"
import { TCompanyRequest } from "../interfaces/company.interfaces"
import { Company } from "../entities/company.entity"
import { companyRepository } from "../data-source"
import { AppError } from "../error"

const ensureIdIsValidMW = async (req:Request, res:Response, next: NextFunction):Promise<Response | void > => {
    const id:number = Number(req.params.id)

    const company: Company | null = await companyRepository.findOne({
        where:{id}
    })

    if(!company){
        throw new AppError('id not found', 404)
    }

    return next()
}

export { ensureIdIsValidMW }