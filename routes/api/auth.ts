import express from 'express'

const router = express.Router();
import * as controller from '../../app/controllers/auth_controller'

router.post('/login', controller.login)
router.post('/register', controller.register)

export default router