import * as userService from '../services/user_service'


export async function getUserById(req, res){
    const id = req.params.id
    
    const user = await userService.getUserById(id)
    res.status(200).json(user)
}

