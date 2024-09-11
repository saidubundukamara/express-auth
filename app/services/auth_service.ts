import * as userRepo from '../repositories/user_repo'
import { createUserScheme } from '../repositories/schemes/user_scheme'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { ParseStatus } from 'zod';
const SECRET_TOKEN = process.env.JWT_SECRET_TOKEN;

export async function register(data){

    const parseData = await createUserScheme.parse(data);

    const salt = await bcrypt.genSalt(10)

    parseData.password = await bcrypt.hash(parseData.password, salt)

    //store
    const user = await userRepo.storeUser(parseData)

    //generate token 
    const token = await generateToken(user.data);


    return [{token : token, user: user.data}]

}



//generate tokens

async function generateToken(user){
    let payload = {id: user.id, email: user.email};

    return jwt.sign(payload, SECRET_TOKEN, {expiresIn: '1h'})
}

