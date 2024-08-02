import UserModel from "../model/User.model.js"


export async function register(req,res){
   try {

   } catch (error) {
    return res.status(500).send(error);
   }
}

export async function login(req,res){
    res.json('login route')
}

export async function getUser(req,res){
    res.json('getUser route')
}

export async function updateUser(req,res){
    res.json('update User')
}

export async function generateOTP(req,res){
    res.json('generateOTP ')
}

export async function verifyOTP(req,res){
    res.json('verifyOTP ')
}

export async function createResetSession(req,res){
    res.json('createResetSession ')
}

export async function resetPassword(req,res){
    res.json('resetPassword ')
}