// --- Módulo de Gestión de Zoom y Vista (ZoomManager) ---
// Extraído de main.js para mejorar la modularidad y reducir el tamaño del orquestador.

import { DOM } from './1_dom.js';
import { AppState } from './2_appState.js';
import { CanvasView } from './5_canvasView.js';

export const ZoomManager = {
    apply() {
        DOM.imageContainer.style.transform = `scale(${AppState.zoomLevel})`;
        DOM.zoomDisplay.textContent = `${Math.round(AppState.zoomLevel * 100)}%`;
        CanvasView.drawAll();
    },
    zoomIn() {
        AppState.zoomLevel = Math.min(AppState.zoomLevel * 1.25, 16);
        this.apply();
    },
    zoomOut() {
        AppState.zoomLevel = Math.max(AppState.zoomLevel / 1.25, 0.1);
        this.apply();
    },
    fit() {
        if (!DOM.imageDisplay.complete || DOM.imageDisplay.naturalWidth === 0) return;
        const editorRect = DOM.editorArea.getBoundingClientRect();
        const viewWidth = editorRect.width - 60;
        const viewHeight = editorRect.height - 60;
        const scaleX = viewWidth / DOM.imageDisplay.naturalWidth;
        const scaleY = viewHeight / DOM.imageDisplay.naturalHeight;
        AppState.zoomLevel = Math.min(scaleX, scaleY, 1);
        this.apply();
    },
    zoomToRect(rect) {
        if (!rect) return;
        const editorRect = DOM.editorArea.getBoundingClientRect();
        // Añadir algo de padding a la vista
        const viewWidth = editorRect.width - 100;
        const viewHeight = editorRect.height - 100;

        const scaleX = viewWidth / rect.w;
        const scaleY = viewHeight / rect.h;
        
        // Establecer un nivel de zoom razonable, ni muy cerca ni muy lejos.
        AppState.zoomLevel = Math.min(scaleX, scaleY, 4); // Zoom máximo 4x
        this.apply();

        // Ahora, hacer scroll hacia el rectángulo.
        const scaledRectX = rect.x * AppState.zoomLevel;
        const scaledRectY = rect.y * AppState.zoomLevel;
        const scaledW = rect.w * AppState.zoomLevel;
        const scaledH = rect.h * AppState.zoomLevel;

        DOM.editorArea.scrollLeft = scaledRectX - (editorRect.width / 2) + (scaledW / 2);
        DOM.editorArea.scrollTop = scaledRectY - (editorRect.height / 2) + (scaledH / 2);
    }
};
