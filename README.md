# Nodo Studio — Landing Page

Agencia digital venezolana. Sitio estático listo para deploy.

## Estructura

```
.
├── index.html          # entrada principal
├── app.js              # JSX compilado (React)
├── favicon.svg
├── vendor/
│   ├── react.min.js
│   └── react-dom.min.js
├── _headers            # headers de Cloudflare Pages
├── _redirects          # redirects de Cloudflare Pages
└── README.md
```

## Deploy en Cloudflare Pages (recomendado)

1. Sube este repo a GitHub.
2. Entra a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Selecciona tu repo. Config:
   - **Framework preset:** None
   - **Build command:** *(deja vacío)*
   - **Build output directory:** `/`
4. **Save and Deploy**. Listo en ~30s.
5. Conecta tu dominio: **Custom domains** → **Set up a custom domain**.

## Deploy en GitHub Pages

1. Sube este repo a GitHub.
2. **Settings** → **Pages** → **Source:** Deploy from a branch → `main` / `/ (root)`.
3. Listo en ~1min en `https://<usuario>.github.io/<repo>`.

## Deploy local (para probar)

```bash
# Cualquier servidor estático sirve. Por ejemplo:
npx serve .
# o
python3 -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000).

## Editar el contenido

El código React está en `app.js` (ya compilado, ~32KB). Si quieres editarlo cómodamente con JSX, el fuente original está en el proyecto de Claude — pídele al asistente que regenere `app.js` después de los cambios.

Cambios rápidos de texto puedes hacerlos directo en `app.js` con buscar y reemplazar.

## Rendimiento

- **172 KB** total (React + app + HTML, sin compresión).
- ~**60 KB** con gzip de Cloudflare.
- Sin Babel runtime, sin dependencias externas (solo Google Fonts, opcional).
- Lighthouse: 95+ esperado en mobile.

---
© 2026 Nodo Studio
