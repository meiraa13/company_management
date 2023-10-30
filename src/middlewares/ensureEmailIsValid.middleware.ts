import { NextFunction, Request, Response } from "express"
import { TCompanyRequest } from "../interfaces/company.interfaces"
import { Company } from "../entities/company.entity"
import { companyRepository } from "../data-source"
import { AppError } from "../error"

const ensureEmailIsValidMW = async (req:Request, res:Response, next: NextFunction):Promise<Response | void > => {
    const data:TCompanyRequest = req.body

    const company: Company | null = await companyRepository.findOne({
        where:{
            email: data.email
        }
    })

    if(company?.email == data.email){
        throw new AppError('Email already exists', 409)
    }

    return next()
}

export { ensureEmailIsValidMW }