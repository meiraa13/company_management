import { Request, Response } from "express";
import { createCompanyService } from "../services/createCompany.service";
import { readAllCompaniesService } from "../services/readAllCompanies.service";
import { readOneCompanyService } from "../services/readOneCompany.service";
import { updateCompanyService } from "../services/updateCompany.service";
import { deleteCompanyService } from "../services/deleteCompany.service";
import { TCompanyRequest, TCompanyResponse, TCompanyUpdate } from "../interfaces/company.interfaces";


async function createCompanyController(req:Request, res:Response):Promise<Response>{
    const data:TCompanyRequest = req.body

    const newCompany:TCompanyResponse = await createCompanyService(data)

    return res.status(201).json(newCompany)

}


async function readAllCompaniesController(req:Request, res:Response):Promise<Response>{
    
    const companies = await readAllCompaniesService()

    return res.status(200).json(companies)

}


async function readOneCompanyController(req:Request, res:Response):Promise<Response>{
    const companyCnpj = req.params.cnpj
    const foundCompany = await readOneCompanyService(companyCnpj)

    return res.status(200).json(foundCompany)

}


async function updateCompanyController(req:Request, res:Response):Promise<Response>{
    const companyId:number = Number(req.params.id)
    const data:TCompanyUpdate = req.body
    const updatedCompany:TCompanyResponse = await updateCompanyService(companyId, data)

    return res.status(200).json(updatedCompany)

}


async function deleteCompanyController(req:Request, res:Response):Promise<Response>{
    const companyId:number = Number(req.params.id)
    
    await deleteCompanyService(companyId)

    return res.status(204).send()

}

export { createCompanyController, readAllCompaniesController, readOneCompanyController, updateCompanyController, deleteCompanyController}