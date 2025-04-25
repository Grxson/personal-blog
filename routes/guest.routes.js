import express from 'express'
import { getHome, getArticle } from '../controllers/guest.controller.js'

const router = express.Router();

router.get('/home', getHome);
router.get('/article/:id', getArticle);

export default router;