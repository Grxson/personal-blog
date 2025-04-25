# 📝 Personal Blog

Este es un proyecto de blog personal donde puedes escribir, publicar, editar y eliminar artículos. Tiene una sección pública para visitantes y una privada para el administrador.

## Link del proyecto

https://roadmap.sh/projects/personal-blog

## 🚀 Tecnologías usadas

- Node.js
- Express.js
- EJS (motor de plantillas)
- CSS (diseño simple y responsivo)
- Sistema de archivos (`fs`) para almacenamiento
- Autenticación básica con sesión

---

## 📁 Estructura del Proyecto

```plaintext
personal-blog/
│
├── articles/                   # Archivos de artículos almacenados como JSON
├── controllers/                # Controladores separados para lógica de rutas
│   ├── guest.controller.js
│   └── admin.controller.js
├── middleware/                 # Middlewares como autenticación
│   └── auth.middleware.js
├── public/                     # Archivos estáticos como estilos CSS
│   └── styles.css
├── routes/                     # Rutas separadas por invitados y admin
│   ├── guest.routes.js
│   └── admin.routes.js
├── utils/                      # Utilidades como clases de errores
│   └── ApiError.js
├── views/                      # Plantillas EJS
│   ├── home.ejs
│   ├── article.ejs
│   ├── admin.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── login.ejs
├── .env
├── server.js
└── package.json
```

## 🌐 Rutas disponibles

### 📖 Sección pública

- `/home`  
  Lista de artículos publicados (título y fecha).

- `/article/:id`  
  Muestra el contenido completo de un artículo.

### 🔐 Sección de administración

- `/login`  
  Formulario de inicio de sesión para el administrador.

- `/admin`  
  Panel de control del blog: lista artículos con botones para editar y eliminar.

- `/new`  
  Formulario para publicar un nuevo artículo.

- `/edit/:id`  
  Formulario para editar un artículo existente.

- `/delete/:id`  
  Elimina un artículo (acción POST desde el panel).

---

## 🔐 Autenticación

- Usuario y contraseña definidos manualmente en `app.js`.
- Usa sesiones (`express-session`) para proteger las rutas de administración.
- Una vez iniciado sesión, se puede acceder al panel `/admin`.

---

## 📄 Estructura de un archivo de artículo

Cada artículo se guarda como un archivo `.json` en la carpeta `articles/`.  
Ejemplo:

```json
{
  "id": "38",
  "title": "My First Article",
  "date": "2024-08-07",
  "content": "Lorem ipsum dolor sit amet..."
}
```

## ✍️ Cómo añadir nuevos artículos

1. Inicia sesión en `/login` con el usuario y contraseña.
2. Ve al panel de control `/admin`
3. Haz clic en “+ Add”.
4. Llena el formulario y haz clic en “Publish”.

## 📦 Instalación

```bash
git clone https://github.com/Grxson/personal-blog.git
cd personal-blog
npm install

```
