import express from 'express'
import { Router, Request, Response } from "express";
import { UserModel } from '../models/user';
import { mongo } from 'mongoose';
import { UseErrors } from '../errors';

const router = Router();


// url="localhost:3001/register"

router.post("/register", async(req:Request, res:Response) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username })
    if (user){
        return res.status(400).json({type: UseErrors.USERNAME_ALREADY_EXISTS})
    }
    const newUser = new UserModel({username, password})

  });

export {router as userRouter}