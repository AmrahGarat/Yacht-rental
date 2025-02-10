import { Request,Response } from "express";

const getAll = async (req: Request, res: Response) => {
    const data = req.matchedData;
    res.json({
        data,
    })
}

const getById = async(req:Request,res:Response)=>{}

export default {
    getAll,
    getById
}