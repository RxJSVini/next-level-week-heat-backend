import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";


class CreateMessageController{
    async handle(req:Request, res:Response){
        const { message } = req.body;
        const { user_id } = req.body;

        const service = new CreateMessageService();

        const result = await service.execute(message, user_id);

        return res.status(201).json(result)

    }
}


export { CreateMessageController };