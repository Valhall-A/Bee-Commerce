import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from "@prisma/client";
import Express from 'express';
import core from 'express';
import { routes } from './routes';

//Express
export const app:core.Express = Express();
const port:string = process.env.PORT || "3000";

//Prisma
export const prisma = new PrismaClient();

//Routes
app.use(Express.json());
routes(app);

app.listen(port, () => console.log(`Bee-Commerce running on port ${port}`));