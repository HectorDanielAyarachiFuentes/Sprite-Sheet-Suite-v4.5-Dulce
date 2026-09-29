// --- Módulo de Estado de Interacción y Geometría ---
// Centraliza el estado de interacción del usuario y utilidades geométricas
// para desacoplar completamente CanvasView e InteractionController.

export let InteractionState = {
    isDrawing: false,
    isDragging: false,
    isResizing: false,
    isDraggingSlice: false,
    isPixelErasing: false,     // Para el borrador de píxeles de imagen
    isActionPending: false,    // Para el anti-jitter: indica que una acción puede empezar
    pendingAction: null,       // 'drag', 'resize', 'dragSlice'
    startPos: { x: 0, y: 0 },
    lastMousePos: { x: 0, y: 0 }, // Posición actual del ratón (coordenadas de imagen)
    newRect: null,
    dragStartFrameRect: null,  // Almacena el rect original al iniciar arrastre
    resizeHandle: null,
    draggedSlice: null,
    HANDLE_SIZE: 8,
    SLICE_HANDLE_WIDTH: 6,
    DRAG_THRESHOLD: 4          // Umbral en píxeles para iniciar arrastre y evitar "jitter"
};

export const getResizeHandles = (rect) => {
    if (!rect) return {};
    const { x, y, w, h } = rect;
    return {
        tl: { x, y },
        tr: { x: x + w, y },
        bl: { x, y: y + h },
        br: { x: x + w, y: y + h },
        t:  { x: x + w / 2, y },
        b:  { x: x + w / 2, y: y + h },
        l:  { x, y: y + h / 2 },
        r:  { x: x + w, y: y + h / 2 }
    };
};
