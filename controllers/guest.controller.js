import fs from 'fs-extra'
import path from 'path'

const articlesPath = path.join('articles');

export const getHome = async (req, res) => {
    const files = await fs.readdir(articlesPath);
    const articles = await Promise.all(
        files.map(async file => JSON.parse(await fs.readFile(path.json(articlesPath, file))))
    );
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.render('home', { articles })
}

export const getArticle = async (req, res) => {
    const filePath = path.join(articlesPath, `${req.params.id}.json`);
    if (!(await fs.exists(filePath))) {
        return res.status(404).send('Articulo no encontrado');
    }
    const article = JSON.parse(await fs.readFile(filePath));
    res.render('article', { article })
}