import { Request, Response } from "express"
import { prisma } from "../server"
import { RestResponse } from "../utils/RestResponse";

export class AppUserController {
    static findAppUser = async (request:Request, response:Response) => 
        response.status(200).json(new RestResponse({
            content: await prisma.appUser.findMany(),
            errors: []
        }));

    static saveAppUser = async (request:Request, response:Response) =>
        response.status(200).json(new RestResponse({
            content: await prisma.appUser.create({
                data: { ...request.body },
            }).catch((i) => i),
            errors: []
        }));

    static putAppUser = async (request:Request, response:Response) => {
        
    }

    static deleteAppUser = async (request:Request, response:Response) => {
        const { id } = request.params;
        const user = await prisma.appUser.delete({
            where: {id: Number(id)}
        })
        return response.status(200).json(new RestResponse({
            content: "Deletado com sucesso!",
            errors: []
        }))
    }
}