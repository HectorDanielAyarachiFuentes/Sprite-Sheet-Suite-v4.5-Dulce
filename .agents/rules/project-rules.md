# 🎮 Reglas de Desarrollo — Sprite Sheet Suite v4.5 Dulce

Directrices técnicas y estándares de arquitectura para agentes y desarrolladores que trabajen en este proyecto.

---

## 🏗️ Principios de Arquitectura

1. **Vanilla Web Nativo (Sin Node/Bundlers en Runtime)**:
   - Todo el código de la aplicación corre directamente en el navegador (`index.html`, `style.css`, módulos nativos en `js/`).
   - No introducir dependencias de empaquetado (Webpack, Vite, Rollup) que rompan la capacidad de abrir la app sirviéndola como archivos estáticos.
   - Las librerías de terceros externas (`JSZip`, `SortableJS`, `gif.js`) deben mantenerse portables o cargarse vía CDN/scripts locales.

2. **Diseño Visual y Estética "Tema Dulce"**:
   - Mantener la paleta Tokyo Night con acentos violeta (`#bb9af7`), azul (`#7aa2f7`), rosa (`#f7768e`) y fondos oscuros (`#1a1b26`, `#24283b`).
   - Usar las variables CSS existentes definidas en `style.css` para consistencia.
   - Toda interfaz nueva debe mantener microanimaciones suaves, bordes redondeados y estilo moderno.

3. **Manipulación de Canvas y Pixel-Perfect**:
   - Respetar la relación de aspecto y coordenadas de corte de sprites.
   - Al implementar transformaciones (zoom, pan, snap-to-grid), preservar la nitidez de píxeles (`image-rendering: pixelated`).
   - Mantener el soporte de doble historial de Undo/Redo (global para frames/clips y local para slices internos).

4. **Calidad y Rendimiento**:
   - Minimizar re-renders innecesarios en canvas de gran tamaño.
   - Las tareas pesadas de exportación (como codificación de GIF) deben ejecutarse en Web Workers para no congelar el hilo principal de UI.
   - Mantener la persistencia en `localStorage` actualizada y controlada ante datos corruptos.
