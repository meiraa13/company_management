import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
export class Company {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({type:"varchar"})
    clientName: string

    @Column({type:"varchar"})
    password:string

    @Column({type:"varchar"})
    companyName:string

    @Column({type:"varchar", length:14})
    cnpj:string

    @Column({type:"varchar", length:8})
    cep:string

    @Column({type:"varchar"})
    address:string

    @Column({type:"varchar"})
    addressNumber:string

    @Column({type:"varchar", length:11})
    phoneNumber:string

    @Column({type:"varchar", unique:true})
    email:string
}
