import express from 'express'

const router = express.Router();
import { verifyToken } from '../../app/midlleware/verify'
import * as controller from '../../app/controllers/user_controller'

router.get('/:id', verifyToken, controller.getUserById)

export default router