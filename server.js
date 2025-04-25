import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import guestRoutes from './routes/guest.routes.js'
import adminRoutes from './routes/admin.routes.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: 'supersecretBlog',
    resave: false,
    saveUninitialized: true,
}))


app.use('/', guestRoutes)
app.use('/admin', adminRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
