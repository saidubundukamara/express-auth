import * as authService from '../services/auth_service'


export async function register(req, res){

    const body = req.body

    console.log(body)

    try {
        const data = await authService.register(body)

        res.status(201).json(data)
    } catch (error) {
        res.status(500). json({error: error.message})
    }

}

export async function login(req, res){

}