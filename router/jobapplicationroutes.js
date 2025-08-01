import express from 'express'

const router=express.Router();
import {applyjob,getapplicationofparticularjob, getapplicationsoflogineduser,updateapplication,deleteapplication} from '../controller/jobapplicationcontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/apply/:userid',getapplicationsoflogineduser);
router.get('/applicationsbyjobid/:jobid',getapplicationofparticularjob);

router.put('/updateapplication/:id',updateapplication);
router.delete('/delete/:id',deleteapplication);
export default router