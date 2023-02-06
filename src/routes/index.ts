import Express from 'express';
import core, { Request, Response } from "express";
import { AppUserController } from '../controllers/AppUserController';
import { RestResponse } from "../utils/RestResponse";

export const routes = (app:core.Express) => {
    app.route("/").get((request:Request, response:Response) => 
        response.status(200).json(new RestResponse({content: "Bzzz!", errors: []})));
    
    app.use(Express.json(), 
        Express.Router().get("/users", AppUserController.findAppUser)
                        .post("/users", AppUserController.saveAppUser)
                        .delete("/users/:id", AppUserController.deleteAppUser)
    );
}