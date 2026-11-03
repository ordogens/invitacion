# Invitación para Jannin Juliana

Aplicación web para una invitación interactiva, casual y divertida con memes de gatitos y una paleta de rosas pastel. El proyecto está construido con React, TypeScript, Vite y Tailwind CSS.

## Estado actual

El frontend y el backend están implementados: incluyen ocho vistas de mensaje, la elección Sí/No, celebración, formulario para elegir fecha y hora entre el 4 y el 8 de noviembre de 2026, selección de comidas y pantalla de confirmación dinámica. El formulario espera la respuesta del backend antes de confirmar. El backend valida el plan y envía una notificación privada con Telegram; no hay base de datos. Una notificación real de prueba ya fue aceptada por Telegram.

## Ejecutar en desarrollo

1. Instala Node.js si todavía no está instalado.
2. En una terminal, abre `frontend/`.
3. Ejecuta `npm install` para instalar las dependencias del frontend.
4. Ejecuta `npm run dev` y abre en el navegador la dirección local que indique Vite.

Desde `frontend/`, genera la versión de producción con `npm run build` y revísala localmente con `npm run preview`.

## Ejecutar el backend local

En la raíz del proyecto, crea `backend/.env` desde `backend/.env.example` y completa el token del bot y el ID del chat privado. Crea `frontend/.env.local` desde `frontend/.env.example` para configurar `VITE_API_URL`.

```powershell
cd backend
npm install
npm run dev
```

Desde otra terminal, inicia Vite desde `frontend/` con `npm run dev`. El backend escucha por defecto en el puerto 3001. Consulta [backend/README.md](backend/README.md) para detalles, comandos y variables de entorno.

## Mapa de archivos

- `frontend/index.html`: documento HTML inicial; define idioma, metadatos y título de la pestaña.
- `frontend/src/main.tsx`: punto de entrada. Monta React dentro del elemento `#root` y carga los estilos globales.
- `frontend/src/App.tsx`: monta el flujo de invitación.
- `frontend/src/index.css`: estilos globales. Tailwind se importa desde `frontend/src/main.tsx`; `frontend/src/components/invitation/InvitationFlow.css` contiene la apariencia responsive de la tarjeta. `frontend/src/App.css` conserva estilos de la plantilla inicial y ya no se importa.
- `frontend/src/README.md`: mapa de carpetas de código fuente y relación con la arquitectura del proyecto.
- `frontend/src/components/invitation/`: componentes y estilos del flujo de invitación.
- `frontend/src/data/planOptions.ts`: opciones de comida e imágenes asociadas.
- `frontend/src/data/`, `frontend/src/types/` y `frontend/src/hooks/`: mensajes y opciones estáticas, tipos TypeScript y lógica React reutilizable.
- `frontend/vite.config.ts`: conecta los complementos de React y Tailwind con Vite.
- `agentes/descripciondeTrabajo.md`: requisitos y alcance funcional acordados.
- `agentes/planDeTrabajo.md`: orden de implementación por fases y criterio de cierre de cada una.
- `agentes/bitacora.md`: registro de cambios y notas de estudio.
- `BACKEND_CONTEXT.md`: estructura, flujo de confirmación y datos disponibles para planear el backend.
- `backend/README.md` y `backend/docs/`: configuración, contrato HTTP, arquitectura y registro de implementación del backend.
- `frontend/public/images/`: imágenes locales de memes de gatitos, servidas directamente desde la raíz del sitio.

## Guía para estudiar el flujo futuro

La lógica de navegación vive en `InvitationFlow`. `DateForm` envía `date`, `time`, `message` y `places` al servicio HTTP del frontend; la confirmación aparece solo después de que el backend informa que Telegram recibió el mensaje. El backend no persiste datos. Consulta `backend/docs/api.md` y `backend/docs/architecture.md` para el contrato y flujo actuales.

Consulta la bitácora para ver qué está implementado en cada momento. Las decisiones y explicaciones de cambios futuros se irán agregando allí.
