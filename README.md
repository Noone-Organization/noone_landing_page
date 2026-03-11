# Noone Solutions
# 🚀 Inicio Rápido

## 1. Requisitos
Antes de continuar, necesitas tener la versión estable más reciente de **Node.js**.  

**Entorno recomendado:**  
- Node.js 20+  
- npm 10+  

---

## 2. Instalación
Abre la carpeta del proyecto e instala sus dependencias. Recomendamos usar **yarn** o **npm**.  

### Con npm:
cd project-folder
npm install

### Con yarn:
cd project-folder
yarn install

---

## 3. Ejecutar
Una vez que npm install haya terminado, puedes iniciar la aplicación:

**npm run dev**
**/**
**yarn run dev**

### Esto iniciará un servidor web local en: http://localhost:3000

---

## 4. Publicar actualizaciones en GitHub Pages

Cada vez que hagas cambios y quieras publicarlos, ejecuta estos pasos desde la raíz del proyecto.

### 1) Verificar que todo compile
```bash
npm run build
```

### 2) Guardar cambios en tu rama
```bash
git add .
git commit -m "Describe los cambios"
git push origin refactor_page
```

### 3) Publicar en GitHub Pages
```bash
NEXT_PUBLIC_BASE_PATH=/noone_landing_page npm run deploy
```

### 4) Revisar el resultado
Esperar 1 a 3 minutos y recargar con hard refresh (`Cmd + Shift + R`) en:

https://noone-organization.github.io/noone_landing_page/

### Flujo corto para futuras publicaciones
1. Hacer cambios.
2. Ejecutar `npm run build`.
3. Ejecutar `NEXT_PUBLIC_BASE_PATH=/noone_landing_page npm run deploy`.

### Importante
- En GitHub, la configuración de Pages debe apuntar a: `gh-pages` / `(root)`.
- El deploy publica el contenido estático de `out/` en la rama `gh-pages`.
- No es obligatorio mergear a `main` para publicar (salvo que tu flujo de equipo lo requiera).

---

## 👩‍💻 Autor
Este proyecto fue desarrollado por **SANSALTARIN 🐰** 🚀
Instagram: @sansaltarin
