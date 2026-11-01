# Invitación para Jannin Juliana

Aplicación web para una invitación interactiva, casual y divertida con memes de gatitos y una paleta de rosas pastel. El proyecto está construido con React, TypeScript, Vite y Tailwind CSS.

## Estado actual

Las Fases 1 a 6 están implementadas: el recorrido incluye ocho vistas de mensaje, la elección Sí/No, celebración, formulario con fecha/hora fijadas y pantalla de confirmación. El botón No escapa indefinidamente con el puntero, pero se puede elegir con teclado. El plan solo se conserva en el estado de React durante la sesión.

## Ejecutar en desarrollo

1. Instala Node.js si todavía no está instalado.
2. En una terminal, abre la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm run dev` y abre en el navegador la dirección local que indique Vite.

Para generar la versión de producción: `npm run build`. Para revisar esa versión localmente: `npm run preview`.

## Mapa de archivos

- `index.html`: documento HTML inicial; define idioma, metadatos y título de la pestaña.
- `src/main.tsx`: punto de entrada. Monta React dentro del elemento `#root` y carga los estilos globales.
- `src/App.tsx`: monta el flujo de invitación.
- `src/index.css`: estilos globales. Tailwind se importa desde `src/main.tsx`; `src/components/invitation/InvitationFlow.css` contiene la apariencia responsive de la tarjeta. `src/App.css` conserva estilos de la plantilla inicial y ya no se importa.
- `src/README.md`: mapa de carpetas de código fuente y relación con la arquitectura del proyecto.
- `src/components/invitation/`: componentes del flujo, estilos y espacio neutro reservado para las imágenes locales que se añadirán cuando estén disponibles.
- `src/data/planOptions.ts`: fecha y hora fijadas, y opciones de comida para el checklist.
- `src/components/shared/`: reservado para piezas reutilizables entre componentes.
- `src/data/`, `src/types/`, `src/hooks/` y `src/utils/`: datos estáticos, tipos TypeScript, lógica React reutilizable y funciones auxiliares.
- `vite.config.ts`: conecta los complementos de React y Tailwind con Vite.
- `agentes/descripciondeTrabajo.md`: requisitos y alcance funcional acordados.
- `agentes/planDeTrabajo.md`: orden de implementación por fases y criterio de cierre de cada una.
- `agentes/bitacora.md`: registro de cambios y notas de estudio.
- `public/images/`: reservado para imágenes locales de memes de gatitos, servidas directamente desde la raíz del sitio.

## Guía para estudiar el flujo futuro

La lógica de navegación vive en `InvitationFlow`: el estado de React indica qué etapa se muestra. Los mensajes están en `data/` y cada componente visual recibe datos mediante props. El formulario futuro validará fecha y hora en el navegador; al confirmar, la pantalla final mostrará los datos en memoria. Esta primera versión no guardará datos ni enviará mensajes.

Consulta la bitácora para ver qué está implementado en cada momento. Las decisiones y explicaciones de cambios futuros se irán agregando allí.
