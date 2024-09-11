import * as userRepo from '../repositories/user_repo'

export async function getUserById(id){
    const user = await userRepo.getUserById(id)
    return user;
}