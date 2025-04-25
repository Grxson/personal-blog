import fs from 'fs-extra';
import path from 'path';
import ApiError from '../utils/ApiError.js';

const articlesPath = path.join('articles');

export const getAdmin = async (req, res) => {
    const files = await fs.readdir(articlesPath);
    const articles = await Promise.all(
        files.map(async file => JSON.parse(await fs.readFile(path.join(articlesPath, file))))
    );
    res.render('admin', { articles });
};

export const getNewArticle = (req, res) => {
    res.render('new');
};

export const postNewArticle = async (req, res, next) => {
    try {
        const { title, content, date } = req.body;
        const id = Date.now().toString();
        const article = { id, title, content, date };
        await fs.writeFile(path.join(articlesPath, `${id}.json`), JSON.stringify(article, null, 2));
        res.redirect('/admin');
    } catch (err) {
        next(new ApiError('Error al guardar el artículo', 500));
    }
};

export const getEditArticle = async (req, res) => {
    const filePath = path.join(articlesPath, `${req.params.id}.json`);
    if (!(await fs.exists(filePath))) {
        return res.status(404).send('Artículo no encontrado');
    }
    const article = JSON.parse(await fs.readFile(filePath));
    res.render('edit', { article });
};

export const postEditArticle = async (req, res, next) => {
    try {
        const { title, content, date } = req.body;
        const updatedArticle = { id: req.params.id, title, content, date };
        await fs.writeFile(path.join(articlesPath, `${req.params.id}.json`), JSON.stringify(updatedArticle, null, 2));
        res.redirect('/admin');
    } catch (err) {
        next(new ApiError('Error al actualizar el artículo', 500));
    }
};

export const deleteArticle = async (req, res, next) => {
    try {
        await fs.remove(path.join(articlesPath, `${req.params.id}.json`));
        res.redirect('/admin');
    } catch (err) {
        next(new ApiError('Error al eliminar el artículo', 500));
    }
};

export const getLogin = (req, res) => {
    res.render('login');
};

export const postLogin = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        req.session.authenticated = true;
        res.redirect('/admin');
    } else {
        res.send('Credenciales inválidas');
    }
};
