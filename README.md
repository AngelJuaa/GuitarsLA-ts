# 🎸 GuitarsLA

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS](https://img.shields.io/badge/CSS-54.9%25-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)

</div>

Una pequeña tienda front-end para catálogo y carrito de compras de guitarras, desarrollada con React + TypeScript + Vite.

## 📌 Visión general

GuitarsLA permite:
- explorar un catálogo de guitarras,
- añadir productos al carrito,
- modificar cantidades,
- persistir el carrito en el navegador,
- mantener una experiencia de compra clara y rápida.

### 🧩 Propósito del proyecto
Este proyecto está pensado como una tienda frontend de demostración, enfocada en la experiencia de compra y la organización del estado del carrito.

### 🖼️ Capturas / recursos visuales
- Las imágenes del catálogo y la interfaz se encuentran en `public/img/`.
- El proyecto usa estilos personalizados y una estructura CSS simple para mantener la interfaz ligera y clara.

### 🌐 Despliegue
- No hay un enlace público de producción configurado en este repositorio por defecto.
- Si existe un despliegue en Netlify, Vercel o GitHub Pages, puedes agregarlo aquí.

---

## 🛠️ Ficha técnica

### Lenguajes y versiones
- TypeScript: ~6.0.2
- JavaScript / JSX: React + TSX
- CSS: estilos globales y componentes visuales

### Stack principal
- React: ^19.2.8
- react-dom: ^19.2.8
- Vite: ^8.3.0
- TypeScript: ~6.0.2
- ESLint: configuración para React y hooks

### Estructura relevante
- `src/hooks/useCart.ts` — lógica del carrito y persistencia
- `src/components/Guitar.tsx` — tarjeta de producto
- `src/components/Header.tsx` — mini carrito y controles
- `src/data/` — catálogo local del proyecto
- `public/img/` — assets visuales

---

## 🧠 Arquitectura React y hooks

### Componentes funcionales
La app está construida principalmente con componentes funcionales de React + TypeScript.

### Hooks nativos utilizados
- `useState`: para catalogo, carrito y totales
- `useEffect`: para sincronización y persistencia en `localStorage`
- `useMemo`: para calcular valores derivados del carrito

### Custom Hook
`useCart` es el punto central del estado del carrito. Encapsula:
- carga inicial desde `localStorage`,
- operaciones de agregar, quitar, incrementar y decrementar,
- cálculo del total,
- limpieza del carrito,
- control de cantidades máximas y mínimas.

### Recomendaciones de diseño
- Mantener la lógica de negocio en el hook.
- Usar copias inmutables para evitar mutar objetos entrantes.
- Evitar lógica de UI mezclada con reglas del dominio.

---

## 📦 Patrones y buenas prácticas

### Estado y persistencia
- El estado del carrito se gestiona de forma local y encapsulada.
- La información se guarda en `localStorage` para mantener la sesión del usuario.

### Tips de escalabilidad
Si la app crece, puede ser útil migrar a:
- `Context + useReducer`,
- o un gestor pequeño como Zustand.

### Manejo de estados asíncronos
Para futuras integraciones con APIs remotas, conviene usar:
- `loading`
- `error`
- `data`
- `empty`

---

## 🚀 Puesta en marcha

### Requisitos previos
- Node.js (LTS recomendado, >=18)
- npm

### Pasos
1. Clona el repositorio
```bash
git clone https://github.com/AngelJuaa/GuitarsLA-ts.git
cd GuitarsLA-ts
```

2. Instala dependencias
```bash
npm install
```

3. Ejecuta la app en desarrollo
```bash
npm run dev
```
Abre la URL que indique Vite, normalmente:
```bash
http://localhost:5173
```

4. Genera la build de producción
```bash
npm run build
```

5. Previsualiza el build
```bash
npm run preview
```

6. Lint del proyecto
```bash
npm run lint
```

---

## ✨ Notas finales

- Mantener la lógica del carrito dentro de `useCart` mejora claridad y mantenibilidad.
- Es recomendable revisar mutaciones directas del objeto `item` para preservar inmutabilidad.
- Considera añadir:
  - `strict` en `tsconfig.json`,
  - tests unitarios para el hook del carrito,
  - variables de entorno y `.env.example` si agregas servicios externos.

---

## 🎯 Resumen rápido

Este proyecto demuestra un flujo clásico de e-commerce frontend:
- catálogo de productos,
- carrito interactivo,
- estado persistido,
- React + TS para un código más mantenible,
- Vite como entorno rápido para desarrollo y build.

---

<div align="center">

Hecho con ❤️ y React + TypeScript

</div>
