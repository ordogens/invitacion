# Plan de trabajo por fases

El proyecto se construirá en partes pequeñas. Cada fase debe quedar funcional y comprensible antes de iniciar la siguiente. Este plan sigue el alcance de `descripciondeTrabajo.md`; no añade backend ni integraciones externas.

## Preparación completada

- Proyecto React, TypeScript y Vite inspeccionado.
- Tailwind CSS instalado mediante el plugin oficial de Vite.
- Carpetas iniciales para componentes, datos, tipos, hooks, utilidades e imágenes creadas.
- La plantilla de Vite fue sustituida por la primera escena. El flujo completo de invitación todavía no está implementado.

## Fase 1 — Base visual y primer mensaje

**Objetivo:** sustituir la pantalla de demostración por la tarjeta principal de la invitación y mostrar solo el primer mensaje: “Hola, Jannin Juliana, ¿tienes un momento?”. Mantener un espacio neutro para la imagen hasta recibir los archivos finales.

**Incluye:** estructura responsive mobile-first, estilos de la tarjeta, componente `InvitationFlow`, espacio para imagen reemplazable y textos separados de la vista.

**Cierre:** se ve correctamente en móvil y escritorio; el nombre y el mensaje son correctos; no hay dependencias de imágenes remotas.

**Estado:** implementada la vista y validada con `npm run build`. La revisión visual interactiva queda pendiente.

## Fase 2 — Secuencia de mensajes

**Objetivo:** avanzar progresivamente por los mensajes 2 a 5 con una acción clara para continuar.

**Incluye:** estado de etapa centralizado en `InvitationFlow`, textos/expresiones definidos en `data/`, transición suave y efecto de escritura reutilizable con respeto a `prefers-reduced-motion`.

**Cierre:** cada mensaje aparece por separado, en el orden de la especificación, con su placeholder/imagen correspondiente y sin duplicar la lógica de animación.

**Estado:** implementada la secuencia y validada con `npm run build`. La elección de respuesta queda para la Fase 3.

## Fase 3 — Decisión y botón de rechazo

**Objetivo:** completar la elección “¡Sí, me apunto!” o “No, gracias”.

**Incluye:** botón que escapa indefinidamente dentro del área definida usando eventos pointer, desplazamientos notorios y posición acotada. La opción de rechazo permanece accesible mediante teclado.

**Cierre:** la interacción funciona con ratón y pantalla táctil, el botón no sale de su contenedor y la página no se desplaza al intentar tocarlo.

**Estado:** implementadas las opciones Sí/No, evasiones acotadas al área y rechazo por teclado. La compilación y el lint pasan; la comprobación manual en dispositivos queda pendiente.

## Fase 4 — Respuesta afirmativa

**Objetivo:** al aceptar, mostrar el mensaje de celebración y continuar al formulario.

**Incluye:** etapa de celebración, transición accesible y meme/placeholder correspondiente.

**Cierre:** la elección afirmativa lleva a la etapa de celebración y desde ahí al formulario.

**Estado:** implementada con mensaje, placeholder de gatito y botón para continuar al formulario.

## Fase 5 — Formulario de la salida

**Objetivo:** presentar el plan con fecha y hora fijadas, y recoger preferencias de comida y un mensaje opcional.

**Incluye:** fecha y hora fijadas para el viernes 6 de noviembre de 2026 a las 7:00 p. m., checklist de comidas, mensaje opcional, etiquetas accesibles y datos mantenidos en el estado de React.

**Cierre:** el formulario muestra la fecha/hora fijadas, exige al menos una comida marcada y conserva el mensaje opcional.

**Estado:** implementado; no se pide elegir la fecha ni la hora.

## Fase 6 — Confirmación

**Objetivo:** mostrar “La cita queda para el viernes 6 de noviembre a las 7:00 p. m.” al confirmar.

**Incluye:** pantalla final con las preferencias de comida seleccionadas y el mensaje opcional.

**Cierre:** el recorrido afirmativo completo termina en una confirmación comprensible.

**Estado:** implementada; la pantalla presenta el horario fijado, las comidas marcadas y el mensaje opcional.

## Fase 7 — Reemplazo de placeholders y pulido

**Objetivo:** incorporar memes locales definitivos y pulir la experiencia responsive, visual y accesible.

**Incluye:** imágenes locales en `public/images/`, textos alternativos, estados de carga/error útiles si hacen falta, revisión de contraste, foco, movimiento reducido y tamaños móviles.

**Cierre:** recursos locales correctamente asociados a cada etapa y revisión final del flujo en móvil y escritorio.

## Fase 8 — Revisión de entrega

**Objetivo:** comprobar el proyecto completo y documentar cómo ejecutarlo y cómo está organizado.

**Incluye:** compilación de producción, revisión de TypeScript y lint disponible; actualización de README y bitácora con lo comprobado.

**Cierre:** compilación correcta y documentación coherente con el comportamiento implementado.

## Forma de avanzar

En cada fase se implementa solo el alcance indicado, se explica qué archivos intervienen y por qué, se revisa el resultado y se registra el avance en `bitacora.md`. Si aparece una decisión visual o funcional que el documento no resuelve, se registra antes de ampliar el alcance.
