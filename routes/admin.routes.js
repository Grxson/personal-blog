import express from 'express'
import {
    getAdmin, getNewArticle, postNewArticle,
    getEditArticle, postEditArticle, deleteArticle,
    getLogin, postLogin
} from '../controllers/admin.controller.js'
import { isAuthenticated } from '../middleware/auth.middleware.js'

const router = express.Router();

router.get('/', isAuthenticated, getAdmin);
router.get('/new', isAuthenticated, getNewArticle);
router.post('/new', isAuthenticated, postNewArticle);
router.get('/edit/:id', isAuthenticated, getEditArticle);
router.post('/edit/:id', isAuthenticated, postEditArticle);
router.post('/delete/:id', isAuthenticated, deleteArticle);
router.get('/login', getLogin);
router.post('/login', postLogin);

export default router;