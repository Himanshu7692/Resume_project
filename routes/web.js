import  express  from "express";
import { homeControler } from "../controllers/homeControler.js";
import { serviceControler } from "../controllers/servicesControler.js";
import { skillControler } from "../controllers/skillController.js";
import { contectControler } from "../controllers/contectControler.js";
const router=express.Router();

router.get('/',homeControler)
router.get('/service',serviceControler)
router.get('/skill',skillControler)
router.get('/contect',contectControler)


export default router