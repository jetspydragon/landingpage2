# Cactus Byte Studio — Sitio Web Oficial

Este es el repositorio de la landing page y portafolio de **Cactus Byte Studio**, un estudio unipersonal de videojuegos independientes y producción de música chiptune.

El sitio está desarrollado con **Astro** (generador de sitios estáticos) y **CSS Puro**, utilizando un diseño geométrico de estilo **Muted Cartridge** (consola retro oscura con tonos verdes y crema).

---

## 🛠️ Estructura del Proyecto

El sitio está estructurado de la siguiente forma:

```text
├── public/                 # Archivos estáticos (favicons, imágenes públicas)
│   └── images/
│       └── logo.png        # Logo oficial del estudio
├── src/
│   ├── components/         # Componentes Astro reutilizables
│   │   ├── Navigation.astro# Barra de navegación con corchetes dinámicos
│   │   ├── Footer.astro    # Pie de página retro con enlaces
│   │   ├── Card.astro      # Tarjetas con borde pixel-art y efecto hover
│   │   └── DevlogTimeline.astro # Línea de tiempo para el historial de proyectos
│   ├── content/            # COLECCIONES DE CONTENIDO (Markdown para datos)
│   │   ├── config.ts       # Esquema y validación de datos (Zod)
│   │   ├── blog/           # Entradas del blog
│   │   ├── games/          # Fichas de videojuegos publicados
│   │   ├── music/          # EPs, singles o álbumes musicales
│   │   ├── projects/       # Fichas técnicas de proyectos activos
│   │   └── devlogs/        # Hitos y reportes de avance de proyectos
│   ├── layouts/
│   │   └── Layout.astro    # Estructura HTML base con metadatos SEO
│   ├── styles/
│   │   └── global.css      # Hoja de estilos globales (Muted Cartridge theme)
│   ├── utils/
│   │   └── date.ts         # Utilidad para formatear fechas en español
│   └── pages/              # Enrutado basado en archivos de Astro
```

---

## 💻 Ejecución Local

Para ejecutar y probar el sitio en tu computadora local:

### 1. Requisitos
*   Tener instalado **Node.js** (versión v22.12.0 o superior recomendada).

### 2. Instalación de dependencias
Desde la raíz del proyecto, ejecuta:
```bash
npm install
```

### 3. Servidor de desarrollo
Para levantar el servidor local con recarga en vivo (live-reload):
```bash
npm run dev
```
El sitio estará disponible por defecto en: [http://localhost:4321/](http://localhost:4321/)

### 4. Compilación de producción
Para compilar el sitio estático y verificar que no haya errores:
```bash
npm run build
```
Esto generará los archivos finales optimizados en la carpeta `dist/`.

---

## ✍️ Cómo Agregar Contenido

El contenido del sitio se gestiona de forma sencilla mediante archivos **Markdown (`.md`)** en la carpeta `src/content/`. Astro validará automáticamente que los campos requeridos (frontmatter) cumplan con el formato establecido en `src/content/config.ts`.

### 1. Agregar un nuevo juego (en `src/content/games/`)
Creá un archivo `.md` (ej. `mi-nuevo-juego.md`):
```markdown
---
title: "Nombre del Juego"
description: "Breve descripción corta de una línea."
coverImage: "/images/logo.png" # o ruta en public/images/
publishDate: "2026-06-24"      # Formato AAAA-MM-DD
itchUrl: "https://cactusbytestudio.itch.io/tu-juego"
platforms: ["Windows", "Web"]
status: "Publicado"            # Opciones: 'Publicado', 'En Desarrollo', 'Prototipo', 'Concepto'
---
Aquí va la descripción larga del juego usando Markdown estándar.
```

### 2. Agregar música (en `src/content/music/`)
Creá un archivo `.md` (ej. `mi-album.md`):
```markdown
---
title: "Título de la Obra"
description: "Descripción de la producción musical."
coverImage: "/images/logo.png"
releaseDate: "2026-06-24"
embedUrl: "https://bandcamp.com/EmbeddedPlayer/..." # Opcional: Iframe de reproductor
linkUrl: "https://tu-bandcamp.bandcamp.com"
---
Detalles adicionales sobre la grabación, sintetizadores utilizados, trackers, etc.
```

### 3. Agregar un artículo al Blog (en `src/content/blog/`)
Creá un archivo `.md` (ej. `mi-post.md`):
```markdown
---
title: "Título de la entrada"
description: "Descripción o resumen del post."
pubDate: "2026-06-24"
heroImage: "/images/logo.png" # Opcional
tags: ["pixel-art", "game-design"]
---
Contenido de la entrada del blog aquí...
```

### 4. Agregar un nuevo Proyecto (en `src/content/projects/`)
Creá un archivo `.md` (ej. `juego-secreto.md`):
```markdown
---
title: "Juego Secreto"
description: "Un proyecto super secreto que aún no se publica."
coverImage: "/images/logo.png"
status: "En Desarrollo" # Opciones: 'Planificación', 'En Desarrollo', 'Pausado', 'Completado'
startDate: "2026-06-01"
---
Detalles de qué se trata el proyecto y sus metas.
```

### 5. Agregar un avance/hito a un Proyecto (en `src/content/devlogs/`)
Para que aparezca automáticamente en la **Línea de Tiempo** del proyecto, creá un archivo `.md` en la carpeta `devlogs` (ej. `js-hito-1.md`):
```markdown
---
project: "juego-secreto" # DEBE coincidir exactamente con el nombre de archivo (slug) del proyecto
title: "Hito 1: Primer Prototipo Funcional"
date: "2026-06-15"
summary: "Logramos que el personaje salte y tenga colisiones estables."
image: "/images/logo.png" # Opcional: imagen ilustrativa del hito
---
Descripción detallada de cómo lograste este hito, capturas, código, etc.
```

---

## 🚀 Despliegue en GitHub Pages

El sitio está preparado para compilarse como un sitio puramente estático. La forma más moderna y automatizada de desplegarlo en GitHub Pages es usando **GitHub Actions**.

### Paso 1: Configurar el archivo de workflow de GitHub
Creá un archivo `.github/workflows/deploy.yml` en la raíz del proyecto:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ] # O la rama por defecto de tu repositorio

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install dependencies
        run: npm ci

      - name: Build Astro
        run: npm run build

      - name: Upload Pages Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Paso 2: Configurar Astro para GitHub Pages
Asegúrate de configurar las propiedades `site` y `base` en `astro.config.mjs` si estás usando un subdominio o un repositorio de proyecto (ej. `nombreusuario.github.io/repositorio`):

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Reemplaza con tu dominio de GitHub Pages
  site: 'https://nombreusuario.github.io',
  // Reemplaza con el nombre de tu repositorio si no es el principal (.github.io)
  base: '/nombre-repositorio',
});
```

### Paso 3: Activar GitHub Pages en el repositorio
1. Anda a tu repositorio en GitHub.
2. Ve a **Settings** -> **Pages**.
3. En la sección **Build and deployment**, bajo **Source**, selecciona **GitHub Actions**.
4. ¡Listo! Cada vez que hagas `git push` a la rama principal (`main`), GitHub compilará y publicará tu sitio automáticamente.
