# 🛡️ Guía de configuración — La Zona Segura

Esta guía te explica, paso a paso, cómo poner en marcha tu blog **La Zona Segura** en GitHub Pages y cómo usar el panel de administración (CMS) para publicar artículos sin tocar código.

---

## Parte 1: Subir el blog a GitHub

### Paso 1 — Crear una cuenta en GitHub

Si aún no tienes cuenta en GitHub:

1. Ve a [github.com](https://github.com) y haz clic en **Sign up**.
2. Introduce tu correo electrónico, elige un nombre de usuario y una contraseña.
3. Confirma tu cuenta desde el correo que recibirás.

### Paso 2 — Crear un repositorio nuevo

1. Una vez dentro de GitHub, haz clic en el botón verde **"New"** (nuevo repositorio).
2. Ponle un nombre al repositorio, por ejemplo: `la-zona-segura`.
3. Marca la opción **"Public"** (público).
4. **No** marques la casilla de "Añadir un README".
5. Haz clic en **"Create repository"**.

### Paso 3 — Subir los archivos del blog

Si tienes experiencia con Git, ejecuta estos comandos desde la carpeta del blog:

```bash
git init
git add .
git commit -m "Primera versión del blog"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/la-zona-segura.git
git push -u origin main
```

Si **no** tienes experiencia con Git, puedes subir los archivos directamente:

1. En la página de tu repositorio en GitHub, haz clic en **"uploading an existing file"**.
2. Arrastra todos los archivos y carpetas del blog a la ventana.
3. Haz clic en **"Commit changes"**.

### Paso 4 — Activar GitHub Pages

1. Ve a tu repositorio en GitHub.
2. Haz clic en **Settings** (Configuración), en el menú superior.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **"Source"**, selecciona la rama `main` y la carpeta `/ (root)`.
5. Haz clic en **Save**.
6. Espera 2-3 minutos y tu sitio estará disponible en:
   `https://TU-USUARIO.github.io/la-zona-segura/`

---

## Parte 2: Configurar el CMS (panel de publicación)

El panel de administración permite crear, editar y publicar artículos desde el navegador, sin necesidad de escribir código.

### Paso 5 — Configurar la autenticación con GitHub (OAuth)

Para que el CMS pueda acceder a tu repositorio y publicar artículos, necesitas configurar la autenticación OAuth. La forma más sencilla es usar **Netlify** como intermediario (es gratuito):

#### Opción A: Usar Netlify como proveedor de OAuth (recomendado)

1. Ve a [netlify.com](https://www.netlify.com) y crea una cuenta gratuita (puedes usar tu cuenta de GitHub).
2. Haz clic en **"Add new site" → "Import an existing project"**.
3. Conecta con GitHub y selecciona el repositorio `la-zona-segura`.
4. En la configuración del build:
   - **Build command:** déjalo vacío
   - **Publish directory:** `_site`
5. Haz clic en **Deploy site**.

> **Nota:** No vamos a usar Netlify para alojar el sitio (usamos GitHub Pages para eso). Solo lo necesitamos para la autenticación del CMS.

6. Una vez creado el sitio en Netlify, ve a **Site configuration → Identity**.
7. Haz clic en **Enable Identity**.
8. Luego ve a **Identity → Registration** y selecciona **"Invite only"**.
9. Desplázate hasta **External providers** y añade **GitHub** como proveedor.

#### Configurar la aplicación OAuth en GitHub

1. Ve a [github.com/settings/developers](https://github.com/settings/developers).
2. Haz clic en **"New OAuth App"**.
3. Rellena los campos:
   - **Application name:** `La Zona Segura CMS`
   - **Homepage URL:** `https://TU-SITIO.netlify.app`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
4. Haz clic en **"Register application"**.
5. Copia el **Client ID** y el **Client Secret**.

#### Añadir las credenciales a Netlify

1. En Netlify, ve a **Site configuration → Access & security → OAuth**.
2. Haz clic en **"Install provider"**.
3. Selecciona **GitHub** y pega el **Client ID** y el **Client Secret** que obtuviste en el paso anterior.
4. Guarda los cambios.

### Paso 6 — Actualizar la configuración del CMS

Abre el archivo `admin/config.yml` y cambia estas líneas:

```yaml
backend:
  name: github
  repo: TU-USUARIO/la-zona-segura    # ← Pon tu usuario y nombre del repo
  branch: main
  site_domain: TU-SITIO.netlify.app      # ← Pon el dominio de tu sitio en Netlify
```

Sube los cambios a GitHub.

---

## Parte 3: Publicar tu primer artículo

### Paso 7 — Acceder al panel de administración

1. Abre tu navegador y ve a:
   `https://TU-USUARIO.github.io/la-zona-segura/admin/`
2. Haz clic en **"Login with GitHub"**.
3. Autoriza la aplicación (solo la primera vez).
4. ¡Ya estás dentro del panel de administración!

### Paso 8 — Crear un artículo nuevo

1. En el panel, haz clic en **"Artículos del blog"** en el menú lateral.
2. Haz clic en el botón **"Nuevo Artículos del blog"** (o "New").
3. Rellena los campos:
   - **Título:** El título de tu artículo.
   - **Fecha de publicación:** La fecha en que se publicará.
   - **Descripción corta:** Una frase breve que resume el artículo (aparecerá en las tarjetas del blog).
   - **Imagen destacada** (opcional): Haz clic en "Elegir imagen" para subir una foto desde tu ordenador.
   - **Contenido:** Escribe el artículo. Puedes usar el editor visual para:
     - Poner texto en **negrita** o *cursiva*
     - Crear listas con viñetas o numeradas
     - Insertar imágenes dentro del artículo
     - Añadir enlaces a otras páginas
     - Crear subtítulos (encabezados)
4. Haz clic en **"Publicar"** (Publish) en la barra superior.
5. Selecciona **"Publicar ahora"** (Publish now).

¡Listo! Tu artículo aparecerá en el blog en unos minutos (GitHub Pages tarda 1-2 minutos en actualizar).

### Paso 9 — Editar un artículo existente

1. Entra al panel en `/admin/`.
2. Haz clic en **"Artículos del blog"**.
3. Haz clic en el artículo que quieras editar.
4. Modifica lo que necesites.
5. Haz clic en **"Publicar"** para guardar los cambios.

---

## Parte 4 (opcional): Usar un dominio personalizado .es

Si quieres que tu blog esté disponible en un dominio como `www.lazonasegura.es`:

### Paso 10 — Comprar un dominio

Compra el dominio `.es` en un registrador de dominios como:
- [Dondominio](https://www.dondominio.com)
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com/es)

### Paso 11 — Configurar los DNS

En el panel de tu registrador de dominios, configura los registros DNS:

| Tipo  | Nombre | Valor                          |
|-------|--------|--------------------------------|
| A     | @      | 185.199.108.153               |
| A     | @      | 185.199.109.153               |
| A     | @      | 185.199.110.153               |
| A     | @      | 185.199.111.153               |
| CNAME | www    | TU-USUARIO.github.io          |

### Paso 12 — Configurar el dominio en GitHub

1. Ve a tu repositorio → **Settings** → **Pages**.
2. En **Custom domain**, escribe tu dominio (ej: `www.lazonasegura.es`).
3. Haz clic en **Save**.
4. Marca la casilla **"Enforce HTTPS"** cuando esté disponible.

### Paso 13 — Actualizar el archivo CNAME

Abre el archivo `CNAME` en la raíz del repositorio y escribe tu dominio:

```
www.lazonasegura.es
```

> Los cambios de DNS pueden tardar entre 1 y 24 horas en propagarse por todo Internet.

---

## ¿Necesitas ayuda?

Si tienes algún problema durante la configuración, no dudes en consultar:

- [Documentación de GitHub Pages](https://docs.github.com/es/pages)
- [Documentación de Decap CMS](https://decapcms.org/docs/)
- O escríbenos a [contacto@lazonasegura.es](mailto:contacto@lazonasegura.es)

---

*Última actualización: abril de 2026*
