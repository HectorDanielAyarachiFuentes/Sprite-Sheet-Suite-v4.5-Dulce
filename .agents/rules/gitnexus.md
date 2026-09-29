# 🧠 Reglas de Agente — Integración GitNexus

Este repositorio utiliza **GitNexus** como motor de inteligencia de código y grafo de conocimiento estructural. Todos los agentes de IA que operen en este proyecto deben adherirse estrictamente a las siguientes directivas.

---

## ⚡ Directivas Obligatorias (Always Do)

1. **Análisis de Impacto Previo a Modificaciones (Impact Analysis)**:
   - Antes de modificar cualquier función, clase, método o módulo central, **DEBES** ejecutar un análisis de impacto aguas arriba (`upstream`):
     ```bash
     node .gitnexus/run.cjs impact "<NombreDelSimbolo>" --direction upstream --repo .
     ```
   - Si está disponible la herramienta MCP: `impact({ target: "NombreDelSimbolo", direction: "upstream" })`.
   - Identifica siempre: llamadores (*callers*), procesos afectados y nivel de riesgo (*risk*).

2. **Verificación de Cambios en el Grafo antes de Confirmar (Pre-Commit)**:
   - Antes de dar por finalizada una tarea o hacer un commit, analiza las modificaciones estructurales:
     ```bash
     node .gitnexus/run.cjs detect-changes --scope all --repo .
     ```
   - O mediante MCP: `detect_changes({ scope: "all" })`.
   - Asegúrate de que no haya regresiones imprevistas en los flujos de ejecución.

3. **Manejo de Advertencias de Riesgo**:
   - **ALTO/CRÍTICO**: Advierte explícitamente y revisa todos los puntos de integración antes de continuar.
   - **RIESGO UNKNOWN**: No asumas que es seguro o no utilizado; significa que el grafo no pudo resolver dinámicamente las llamadas (ej. propiedades dinámicas de objetos, eventos del DOM o llamadas indirectas). Valida mediante búsqueda en el código antes de alterar o remover.

4. **Búsqueda Estructural Primero**:
   - Para entender conceptos o flujos de ejecución:
     ```bash
     node .gitnexus/run.cjs query "<concepto>" --repo .
     ```
   - Para inspeccionar un símbolo en 360° (llamadores, llamados, dependencias):
     ```bash
     node .gitnexus/run.cjs context "<NombreDelSimbolo>" --repo .
     ```

---

## 🚫 Prohibiciones Estrictas (Never Do)

1. **NUNCA** edites funciones o módulos clave sin verificar previamente su impacto en el grafo.
2. **NUNCA** sustituyas el análisis del grafo por un simple *find-and-replace* al renombrar símbolos compartidos; usa la herramienta o verifica todos los *callers*.
3. **NUNCA** ignores advertencias de riesgo ALTO o CRÍTICO reportadas por GitNexus.
4. **NUNCA** sobrescribas o borres los metadatos de `.gitnexus/` o los delimitadores `<!-- gitnexus:start -->` / `<!-- gitnexus:end -->` en la documentación raíz.

---

## 🛠️ Herramientas y Referencias de GitNexus

| Tarea | Comando / Recurso |
| :--- | :--- |
| **Explorar Arquitectura** | `node .gitnexus/run.cjs query "<término>"` |
| **Contexto de Símbolo** | `node .gitnexus/run.cjs context "<símbolo>"` |
| **Radio de Impacto** | `node .gitnexus/run.cjs impact "<símbolo>"` |
| **Detectar Cambios** | `node .gitnexus/run.cjs detect-changes --scope all` |
| **Re-indexar Grafo** | `node .gitnexus/run.cjs analyze --index-only` |
| **Habilidades GitNexus** | Ver `.agents/skills/gitnexus-*/SKILL.md` |
