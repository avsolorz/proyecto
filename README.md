# Mi App Bootstrap

Proyecto React + Vite + TypeScript con **React Router** y **Material UI**. Menú superior oscuro estilo Bootstrap.

## Estructura (personalizada)

```
react/                    ← carpeta del proyecto
├── src/
│   ├── pages/            ← 6 páginas (sin carpetas extra)
│   │   ├── HomePage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── SumPage.tsx
│   │   ├── MultiplyPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── ...
```

## Rutas

| Ruta           | Página        | Descripción                          |
|----------------|---------------|--------------------------------------|
| `/`            | Home          | Contenido estático                   |
| `/productos`   | Productos     | Tabla desde API (sin paginación UI)  |
| `/suma`        | Suma          | a + b (2 inputs)                      |
| `/multiplica`  | Multiplica    | a * b (2 inputs)                      |
| `/acerca`      | Acerca de     | Contenido estático                   |
| Cualquier otra | 404           | Ruta no encontrada                   |

## Cómo ejecutar

```bash
cd c:\Users\Vick\Downloads\react
npm install
npm run dev
```

Si `npm install` falla por caché (ej. `only-if-cached`), prueba:

```bash
npm cache clean --force
npm install
```

Luego abre en el navegador la URL que muestre Vite (normalmente `http://localhost:5173`).

## Tecnologías

- **Vite** + **React 18** + **TypeScript**
- **React Router DOM** (rutas y `NavLink`)
- **Material UI** (`@mui/material` + `@emotion/react` + `@emotion/styled`)

Productos consumen: `https://higuera-billing-api.desarrollo-software.xyz/api/products/` (datos como `any`, sin paginación en la UI).
