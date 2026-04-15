# 🎮 Sprite Sheet Suite v4.5 — *Dulce*

> Una suite de herramientas web profesional, todo en uno, para cortar, previsualizar y exportar animaciones desde hojas de sprites. Hecha para desarrolladores de juegos, artistas de píxeles y animadores que buscan un flujo de trabajo rápido e intuitivo directamente en el navegador.

<div align="center">

![Preview del editor](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/hombre-caminando3.png)

[![DeepWiki](https://img.shields.io/badge/Docs_Interactivas-DeepWiki-6c8cbf?style=for-the-badge&logo=gitbook)](https://deepwiki.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce)
[![GitHub](https://img.shields.io/badge/Código_Fuente-GitHub-1f2035?style=for-the-badge&logo=github)](https://github.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce)

</div>

---

## ✨ Características Principales

Esta no es una simple herramienta de corte. Es una estación de trabajo completa:

| Característica | Descripción |
|---|---|
| 🎨 **Tema Dulce** | Interfaz oscura *Tokyo Night* con acentos violeta, azul y rosa. Premium y responsiva. |
| ✂️ **Corte de Frames** | Por parrilla (filas/columnas), por tamaño de celda, auto-detección por color, o dibujado manual. |
| 🔪 **Slicing Interno** | Divide un frame en sub-frames con cortes horizontales (Alt+Clic) y verticales (Ctrl+Clic). |
| 🎬 **Gestor de Clips** | Crea y gestiona múltiples animaciones (`correr`, `saltar`, `atacar`) desde una sola hoja. |
| ▶️ **Preview en Vivo** | Canvas de previsualización con controles SVG premium y slider de FPS. |
| 📏 **Regla Pixel-Perfect** | Regla superior e izquierda con zoom dinámico, coloreada con el acento azul del tema. |
| ↩️ **Undo / Redo** | Doble pila de historial: global (frames/clips) y local (slices del frame activo). |
| 💾 **Persistencia** | Auto-guardado en `localStorage`. Historial de los últimos 5 proyectos. |
| 📤 **Exportación Total** | Frames como ZIP · GIF animado · HTML/CSS · JSON para Phaser 3 / Godot. |
| 🔍 **Zoom + Snap** | Rueda del ratón para zoom. Snap-to-grid para alineación pixel perfecta. |
| 🪄 **Eliminar Fondo** | Varita mágica por tolerancia de color con suavizado de bordes configurable. |
| 🖌️ **Borrador de Píxeles** | Pincel de borrado destructivo con vista previa circular animada en el canvas. |

---

## 🛠️ Stack Tecnológico

```
HTML5 · CSS3 (Vanilla, sin frameworks) · JavaScript ES6+ (módulos nativos)
├── JSZip       → Exportación de frames individuales en .zip
├── SortableJS  → Drag & drop de frames en la lista de clips
└── gif.js      → Codificación GIF en un Web Worker separado
```

**Sin Node, sin bundler, sin dependencias de build.** Abre `index.html` y funciona.

---

## 🚀 Cómo Empezar

```bash
# Opción 1 — Servidor local (recomendado para módulos ES6)
npx serve .
# o
python -m http.server 3000

# Opción 2 — Abrir directamente en Chrome/Firefox
# Arrastra index.html al navegador
```

1. **Arrastra** una imagen de sprite sheet a la pantalla de bienvenida (o usa el botón de carga).
2. **Define tu parrilla** con los botones de generación automática o dibujando frames a mano.
3. **Crea tus clips** de animación en el panel derecho y selecciona los frames.
4. **Previsualiza** en tiempo real y **exporta** en el formato que necesites.

---

## 🖼️ Hojas de Sprites de Ejemplo

Dentro de `img-md/` hay varias hojas listas para probar:

| Vista Previa | Archivo | GIF Exportado |
|:---:|:---:|:---:|
| ![Caminando perspectiva](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/caminando%20perspectiva.jpg) | `caminando perspectiva.jpg` | — |
| ![Hombre caminando 2](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/hombre-caminando-2.png) | `hombre-caminando-2.png` | — |
| ![Hombre caminando](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/hombre-caminando.png) | `hombre-caminando.png` | ![GIF](https://github.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/blob/main/img-md/gifs/hombrecaminando.gif?raw=true) |
| ![Hombre con cuchillo](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/hombre-cuchillo.png) | `hombre-cuchillo.png` | ![GIF](https://github.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/blob/main/img-md/gifs/hombrecaminandocuchillo.gif?raw=true) |
| ![Megaman](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/megaman.png) | `megaman.png` | — |
| ![Tortuga](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/tortuga.png) | `tortuga.png` | ![GIF](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/gifs/tortuga.gif) |
| ![Osama corre](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/osama-corre.png) | `osama-corre.png` | ![GIF](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/gifs/osama.gif) |

---

## 🧩 Arquitectura del Código

El proyecto está organizado en **módulos JavaScript independientes** que se comunican a través de un estado centralizado. El principio rector es la **separación de responsabilidades**: cada archivo hace una sola cosa.

![Diagrama de Arquitectura](https://raw.githubusercontent.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce/main/img-md/architecture_diagram.png)

### Flujo de datos general

```
Usuario interactúa  →  6_interactionController.js
                              ↓
                     modifica  AppState  (2_appState.js)
                              ↓
              guarda historial (3_historyManager.js)
                              ↓
              renderiza canvas (5_canvasView.js)
              actualiza UI     (4_uiManager.js)
                              ↓
              persiste sesión  (9_sessionManager.js)
```

---

### 📄 `1_dom.js` — Referencias al DOM

**Líneas:** ~130 | **Rol:** Centralizar todas las referencias a elementos HTML.

```js
// En lugar de document.getElementById() dispersos por todo el código,
// todos los elementos viven en dos objetos exportados:
export const DOM = { canvas, rulerTop, rulerLeft, playPauseButton, fpsSlider, ... };
export const CTX = { main, rulerTop, rulerLeft, preview };
```

> **¿Por qué?** Evita repetir `getElementById()` y asegura que si un elemento cambia de `id` en el HTML, solo hay un lugar para actualizarlo.

---

### 🧠 `2_appState.js` — Estado Central (Single Source of Truth)

**Líneas:** ~109 | **Rol:** Contener todos los datos de la aplicación en un único objeto.

```js
export const AppState = {
    frames: [],          // Array de frames definidos en el canvas
    clips: [],           // Array de clips de animación
    activeClipId: null,  // ID del clip actualmente activo
    zoomLevel: 1.0,      // Nivel de zoom del editor
    animation: {
        isPlaying: false,
        fps: 12,
        currentFrameIndex: 0
    },
    // Métodos derivados (no modifican estado, solo leen):
    getActiveClip()       // → el clip activo
    getAnimationFrames()  // → sub-frames del clip ordenados
    getFlattenedFrames()  // → expande grupos con slicing a sub-frames individuales
};
```

> **Patrón:** Este objeto es la única fuente de verdad. Ningún módulo guarda su propio estado — todos leen y escriben en `AppState`.

---

### ↩️ `3_historyManager.js` — Historial con Doble Pila

**Líneas:** ~125 | **Rol:** Implementar Deshacer/Rehacer con dos pilas independientes.

```js
// Pila GLOBAL: guarda snapshots completos (frames + clips)
// Se activa al crear/borrar frames, cambiar clips, etc.
saveGlobalState() → JSON.stringify({ frames, clips, subFrameOffsets })

// Pila LOCAL: guarda solo los slices del frame seleccionado
// Se activa al mover líneas de slicing (mucho más eficiente)
saveLocalState() → JSON.stringify({ hSlices, vSlices })
```

**¿Por qué dos pilas?** Mover una línea de slicing dispara decenas de eventos por segundo. Guardar un snapshot global en cada pixel sería inviable. La pila local guarda solo los datos del frame activo, siendo extremadamente rápida.

Al hacer `Ctrl+Z`:
1. Si hay historial local → deshace el último movimiento de slice.
2. Si no → deshace el último cambio global.

---

### 🖥️ `4_uiManager.js` — Renderizado de la Interfaz

**Líneas:** ~250 | **Rol:** Sincronizar los datos con la interfaz de usuario (no el canvas).

```
AppState.frames → lista de frames en el panel derecho
AppState.clips  → <select> de clips + lista de frames del clip
AppState.animation.fps → badge de FPS + valor del slider
```

Toda actualización de UI pasa por `UIManager.render()`, que es llamado desde `App.updateAll()` en `main.js`. Nunca se manipula el DOM directamente desde otros módulos.

---

### 🎨 `5_canvasView.js` — Dibujo del Canvas

**Líneas:** ~221 | **Rol:** Pintar todo lo que se ve en el editor principal y las reglas.

El método `drawAll()` se llama en cada frame del editor y ejecuta en orden:

```
1. clearRect()          → limpiar canvas
2. drawGrid()           → cuadrícula de snap (si activa)
3. forEach frame        → borde del frame (azul/rojo si seleccionado)
   ├── si es grupo      → líneas de slicing H (rosa) y V (naranja/rosa)
   └── labels F0, F1…  → etiquetas de index
4. drawResizeHandles()  → puntos de control del frame seleccionado
5. pixel eraser preview → círculo blanco punteado bajo el cursor
6. drawRulers()         → regla superior e izquierda
```

**La regla** dibuja un fondo `#252743` (color panel Dulce), ticks en gris-azul `#4a5080` y números en el azul acento `#7aa2f7`. El `strokeStyle` se establece **explícitamente** antes de dibujar para no heredar el negro por defecto del canvas.

```js
// 5_canvasView.js — drawRulers()
CTX.rulerTop.fillStyle = '#252743';  // fondo visible contra el editor oscuro
CTX.rulerTop.fillRect(0, 0, w, h);
CTX.rulerTop.strokeStyle = '#4a5080'; // ticks
CTX.rulerTop.fillStyle  = '#7aa2f7'; // números
```

---

### 🖱️ `6_interactionController.js` — Eventos del Mouse

**Líneas:** ~700 | **Rol:** Manejar toda la interacción del usuario en el canvas.

Es el módulo más grande. Implementa:

| Acción | Descripción |
|---|---|
| **Click + Drag en vacío** | Crea un nuevo frame (herramienta `create`) |
| **Click en frame** | Selecciona y mueve el frame |
| **Drag en esquina/borde** | Redimensiona (8 handles: tl, t, tr, l, r, bl, b, br) |
| **Alt + Clic** | Añade división horizontal (hSlice) al frame grupo |
| **Ctrl + Clic** | Añade división vertical (vSlice) |
| **Drag en línea de slice** | Mueve la línea con snap opcional al grid |
| **Doble clic en sub-frame** | Toggle: añade/quita del clip activo |
| **Rueda del ratón** | Zoom in/out centrado en la posición del cursor |

Las coordenadas del mouse se convierten del espacio de pantalla al espacio del canvas con:

```js
const canvasX = (e.clientX - rect.left + scrollLeft) / zoom;
const canvasY = (e.clientY - rect.top  + scrollTop)  / zoom;
```

---

### ▶️ `7_animationManager.js` — Reproductor de Animación

**Líneas:** ~105 | **Rol:** Controlar el loop de reproducción en el panel de previsualización.

```js
// El loop usa requestAnimationFrame con control de tiempo por FPS
const animationLoop = (timestamp) => {
    const elapsed = timestamp - lastTime;
    if (elapsed > 1000 / fps) {
        drawFrameInPreview(animFrames[currentFrameIndex]);
        currentFrameIndex = (currentFrameIndex + 1) % animFrames.length;
        lastTime = timestamp;
    }
    animationFrameId = requestAnimationFrame(animationLoop);
};
```

`drawFrameInPreview()` calcula el **bounding box de toda la animación** (no solo del frame actual) para centrar correctamente sprites de distintos tamaños, respetando los offsets de cada sub-frame.

Los botones del panel usan **SVGs inline con `fill="currentColor"`** (no emojis) para mantener el estilo visual del tema Dulce. Al cambiar estado play/pause, el JS actualiza el `innerHTML` del botón con el SVG correspondiente:

```js
// play → pausa
DOM.playPauseButton.innerHTML = `<svg ...><rect .../><rect .../></svg>`;
// pausa → play
DOM.playPauseButton.innerHTML = `<svg ...><polygon points="5 3 19 12 5 21"/></svg>`;
```

---

### 📤 `8_exportManager.js` — Motor de Exportación

**Líneas:** ~700 | **Rol:** Implementar todos los formatos de exportación.

```
Exportación de Frames (ZIP)
  └── JSZip → recorre sub-frames → drawImage() en canvas temporal → toBlob() → .zip

Exportación GIF
  └── gif.js (Web Worker) → encola frames con delay = 1000/fps → genera Blob → descarga

Exportación HTML/CSS
  └── Genera página standalone con animación CSS background-position
  └── Resaltado de sintaxis via regex
  └── Muestra live preview en <iframe>

Exportación JSON
  └── Formatos: Default / Phaser 3 (con atlas JSON) / Godot (resource file)
```

---

### 💽 `9_sessionManager.js` — Persistencia

**Líneas:** ~180 | **Rol:** Guardar y restaurar proyectos en `localStorage`.

Guarda **dos tipos de datos** por separado:

```
localStorage["spriteSheetHistory"]  →  array de hasta 5 proyectos
  cada proyecto = {
    fileName,        // nombre del archivo original
    frames,          // array de frames
    clips,           // array de clips
    subFrameOffsets, // offsets de sub-frames
    imageData,       // ← imagen completa en base64 (solo al guardar con imagen)
    thumbnail        // miniatura 60×60px para el historial
  }
```

> La imagen **no se guarda en cada operación** (sería muy lento). Solo se guarda cuando se carga un archivo nuevo. Las operaciones de undo/redo llaman a `saveCurrent(false)` que solo actualiza metadatos.

---

### 🔍 `spriteDetection.js` — Detección Automática

**Líneas:** ~3000+ | **Rol:** Algoritmo de detección de sprites por color de fondo.

Utiliza un flood-fill modificado que:
1. Muestrea el color del borde como "fondo"
2. Escanea todos los píxeles con `getImageData()`
3. Agrupa píxeles no-fondo en regiones conectadas
4. Calcula bounding boxes y filtra ruido
5. Opcionalmente fusiona regiones adyacentes de un mismo sprite

---

## 🎨 Sistema de Diseño — Tema *Dulce*

El tema visual está definido completamente en `style.css` como variables CSS:

```css
:root {
    /* Fondo escalonado */
    --ps-bg:              #1a1b26;  /* fondo principal */
    --ps-bg-dark:         #0f1117;  /* fondo más oscuro */
    --ps-bg-panel:        #1f2035;  /* paneles laterales */
    --ps-bg-panel-header: #252743;  /* cabeceras de panel */

    /* Acentos */
    --ps-accent-blue:  #7aa2f7;  /* azul principal */
    --dulce-violet:    #9d7cd8;  /* violeta */
    --dulce-pink:      #f7768e;  /* rosa (danger) */
    --dulce-mint:      #73daca;  /* menta */
    --dulce-gold:      #e0af68;  /* dorado (warning) */
}
```

**Los botones de herramienta activos** usan un gradiente `azul→violeta` con `box-shadow` glow:
```css
.tool-btn.active {
    background: linear-gradient(135deg, rgba(122,162,247,0.18), rgba(157,124,216,0.16));
    border-color: rgba(122,162,247,0.38);
    box-shadow: 0 0 12px rgba(122,162,247,0.18);
}
```

**El canvas de la regla** pinta primero un fondo del color del panel antes de dibujar los ticks, evitando que el canvas transparente se vea negro sobre el editor oscuro.

**El panel de previsualización** tiene:
- Un `wrapper` con borde de gradiente tricolor (azul→violeta→menta)
- Un canvas con fondo de damero oscuro (consistente con el editor principal)
- Botones SVG con glassmorphism y glow en hover
- Slider FPS con thumb circular degradado y escala al hover

---

## 📁 Estructura del Proyecto

```
Sprite-Sheet-Suite-v4.5-Dulce/
├── index.html              # UI completa, un solo archivo HTML
├── style.css               # Tema Dulce (Tokyo Night), ~1200 líneas
├── js/
│   ├── main.js             # Orquestador principal + lógica de generación de grilla
│   ├── 1_dom.js            # Referencias centralizadas al DOM + CTX
│   ├── 2_appState.js       # Estado global (Single Source of Truth)
│   ├── 3_historyManager.js # Undo/Redo con doble pila
│   ├── 4_uiManager.js      # Sincronización de datos → UI
│   ├── 5_canvasView.js     # Dibujo del canvas principal y reglas
│   ├── 6_interactionController.js  # Mouse, zoom, drag, slicing
│   ├── 7_animationManager.js       # Loop de reproducción y FPS
│   ├── 8_exportManager.js          # ZIP, GIF, HTML/CSS, JSON
│   ├── 9_sessionManager.js         # Persistencia en localStorage
│   ├── spriteDetection.js          # Auto-detección por color
│   ├── tutorial.js                 # Modal de tutorial interactivo
│   └── gif.worker.js               # Web Worker para codificación GIF
├── img-md/                 # Hojas de sprites de ejemplo + GIFs
└── tutorial/               # SVGs para el tutorial paso a paso
```

---

## 🏗️ Cómo fue construido

El proyecto nació como una herramienta de corte simple y fue evolucionando conversación a conversación:

1. **Base funcional** — Canvas editor con drag para crear frames, generación de parrilla, exportación básica.
2. **Gestor de clips** — Añadido el sistema de múltiples animaciones por hoja, con `SortableJS` para reordenar.
3. **Slicing interno** — Implementado el sistema de divisiones H/V dentro de un frame para sprites con celdas de tamaño irregular.
4. **Persistencia** — `SessionManager` con `localStorage`, auto-guardado diferenciado (con/sin imagen).
5. **Historial** — Doble pila de undo/redo para operaciones globales vs locales de slicing.
6. **Tema Dulce** — Migración del tema Phoenix al tema Tokyo Night personalizado con acentos violeta y rosa.
7. **Regla de píxeles** — Canvas de regla con fondo opaco, ticks azules, números acento.
8. **Panel de previsualización premium** — Rediseño con wrapper glassmorphism, botones SVG inline, slider estilizado.
9. **Auto-detección** — Integración del algoritmo flood-fill para detectar sprites automáticamente.
10. **Exportación completa** — ZIP · GIF (Web Worker) · HTML/CSS con live preview · JSON multi-formato.

---

## 🧠 Documentación Interactiva

[![Explicación del Código](https://img.shields.io/badge/Explicación_del_Código-DeepWiki-6c8cbf?style=for-the-badge&logo=gitbook)](https://deepwiki.com/HectorDanielAyarachiFuentes/Sprite-Sheet-Suite-v4.5-Dulce)

---

## 👨‍💻 Sobre el Autor

Creado con 🎮 y mucho café por **Héctor Daniel Ayarachi Fuentes**.

[![GitHub](https://img.shields.io/badge/GitHub-HectorDanielAyarachiFuentes-1f2035?style=flat-square&logo=github)](https://github.com/HectorDanielAyarachiFuentes)
[![CodePen](https://img.shields.io/badge/CodePen-Demos_Web-1e1f2e?style=flat-square&logo=codepen)](https://codepen.io/HectorDanielAyarachiFuentes)

---

<div align="center">
  <sub>Sprite Sheet Suite v4.5 "Dulce" · Vanilla JS · Sin frameworks · Sin build step</sub>
</div>
