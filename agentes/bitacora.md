# Bitácora de desarrollo y guía de estudio

Este archivo registra los cambios que se realizan en el proyecto y explica su propósito para facilitar el aprendizaje. Se actualiza junto con cada cambio funcional o estructural.

## 2026-11-01 — Identidad y documentación inicial

### Cambio solicitado

El nombre de la persona invitada es **Jannin Juliana**. Las instrucciones del proyecto también piden documentar el desarrollo para poder estudiar cómo funciona la aplicación.

### Archivos modificados

- `agentes/descripciondeTrabajo.md`: se cambió el nombre de Andrea por Jannin Juliana en el mensaje de apertura y en la secuencia. Este documento es la especificación funcional que guía el desarrollo.
- `index.html`: el idioma del documento ahora es español (`lang="es"`) y el título de la pestaña dice “Invitación para Jannin Juliana”. El título del navegador ayuda a identificar la página; el idioma ayuda a lectores de pantalla y navegadores.
- `README.md`: se reemplazó la guía genérica de Vite por una introducción al proyecto, los comandos para ejecutarlo, un mapa de archivos y el estado actual.
- `agentes/bitacora.md`: se creó este registro con explicaciones de los cambios y notas para estudiar el código.

### Estado técnico observado

El repositorio todavía contiene la pantalla de demostración que Vite genera por defecto (`src/App.tsx`), no el flujo de invitación. No existen todavía los componentes `InvitationFlow`, `CatMeme`, `DateForm` ni los demás elementos funcionales definidos en la especificación. No se debe confundir la descripción del diseño futuro con funcionalidad ya programada.

### Conceptos para estudiar

- **HTML de entrada:** `index.html` crea el elemento `<div id="root">` donde React dibuja la aplicación.
- **Montaje de React:** `src/main.tsx` llama a `createRoot(...).render(...)` y muestra el componente `App` dentro de `StrictMode`.
- **Componente:** en React, una función como `App` devuelve elementos de interfaz. La pantalla y la lógica de interacción se dividirán en componentes pequeños conforme se implemente la invitación.
- **Estilos:** `src/index.css` contiene reglas generales; `src/App.css` contiene las reglas asociadas a la pantalla de `App`.
- **Archivos públicos:** los recursos colocados en `public/` se sirven desde la raíz del sitio. Por ejemplo, `public/images/gato.jpg` se referenciará como `/images/gato.jpg`.
- **Vite:** sirve la aplicación durante el desarrollo y genera archivos optimizados con `npm run build`.

### Verificación

Se inspeccionaron los archivos del proyecto y se confirmó el estado de plantilla inicial. En este cambio no se ejecutaron pruebas ni compilación.

## Registro de próximas sesiones

Para cada cambio nuevo, agregar fecha, objetivo, archivos afectados, explicación del funcionamiento, conceptos de estudio y verificaciones realizadas (indicando si alguna no se ejecutó).

## 2026-11-01 — Preparación de Tailwind CSS

### Objetivo

Dejar Tailwind CSS listo para usar en las siguientes fases sin construir de una vez la experiencia de invitación.

### Archivos afectados

- `vite.config.ts`: se agregó el plugin oficial `@tailwindcss/vite` junto a los plugins que ya tenía Vite. Se conservó React Compiler.
- `src/index.css`: se agregó `@import "tailwindcss"` y se redujo el CSS global a una base pequeña. Tailwind genera sus utilidades durante el proceso de Vite.
- `package.json` y `package-lock.json`: npm instaló y registró las dependencias `tailwindcss` y `@tailwindcss/vite`.
- `README.md`: se añadió Tailwind al stack y al mapa del proyecto.

### Conceptos para estudiar

- Un **plugin de Vite** amplía el proceso de desarrollo y compilación. El plugin oficial de Tailwind detecta las clases usadas en componentes y genera el CSS correspondiente.
- `@import "tailwindcss"` carga el conjunto de estilos y utilidades de Tailwind v4. En esta integración no hace falta crear los archivos de configuración de Tailwind v3 (`tailwind.config.js` y `postcss.config.js`) para empezar.
- Las clases utilitarias se escriben en `className` dentro de JSX, por ejemplo `className="mx-auto max-w-xl p-6"`.
- `src/index.css` se importa una sola vez desde `src/main.tsx`, así que el CSS resultante está disponible para toda la aplicación.

### Verificación

`npm run build` terminó correctamente: TypeScript compiló y Vite generó la versión de producción. No se ejecutaron pruebas automatizadas.

## 2026-11-01 — Estructura inicial de carpetas

### Objetivo

Ordenar el código por responsabilidades siguiendo la arquitectura propuesta en `descripciondeTrabajo.md`, sin empezar todavía a implementar el flujo.

### Estructura creada

- `src/components/invitation/`: componentes específicos: `InvitationFlow`, `Typewriter`, `CatMeme`, `EscapingButton`, `DateForm` y `ConfirmationScreen`.
- `src/components/shared/`: componentes visuales reutilizables, solo cuando haya una necesidad real.
- `src/data/`: mensajes y datos estáticos que no pertenecen a la lógica de navegación.
- `src/types/`: definiciones TypeScript compartidas.
- `src/hooks/`: lógica de interacción/animación React reutilizable para no duplicarla.
- `src/utils/`: funciones independientes de React, por ejemplo una validación de fecha futura si resulta útil.
- `public/images/`: imágenes locales para los memes, según la especificación.
- `src/README.md`: mapa de carpetas, explica el rol de cada una y cómo se relacionan con la futura implementación.

Las carpetas vacías usan archivos `.gitkeep` para conservar su existencia en el control de versiones. Los logos y estilos de la pantalla inicial de Vite se mantienen por ahora porque la pantalla se reemplazará en una fase posterior.

### Cómo leer esta organización

`main.tsx` inicia React y `App.tsx` será el contenedor de alto nivel. El flujo interactivo estará separado en componentes. Los datos que muestra el flujo se mantienen aparte de la interfaz, y los tipos describen la forma de esos datos. Los hooks permiten compartir lógica ligada a React; `utils` aloja funciones puras que se pueden usar desde distintos componentes.

### Verificación

No se ejecutó el build en esta fase porque solo se añadieron documentación y archivos marcadores; no se modificó código de la aplicación. El build de la fase anterior con Tailwind había terminado correctamente.

## 2026-11-01 — Plan de implementación fase por fase

### Objetivo

Establecer un orden de construcción que siga los requisitos existentes y evite implementar todo en una sola entrega.

### Archivos afectados

- `agentes/planDeTrabajo.md`: se añadieron ocho fases, sus objetivos, alcance y criterios de cierre. La primera etapa implementable será la base visual y el primer mensaje; después se agregará el avance progresivo de mensajes.
- `README.md`: se enlazó el plan para que sea fácil ubicarlo.

### Cómo usar el plan

Antes de iniciar una fase se toma solo su alcance. Al terminar, se revisa el criterio de cierre, se actualiza la bitácora y se decide el siguiente avance. Las imágenes finales se reservan para una fase posterior; mientras tanto, se usarán placeholders locales para poder desarrollar el flujo sin URLs inestables.

### Verificación

Se contrastó el orden con la sección de arquitectura, flujo, botón interactivo, formulario, criterios de calidad y alcance de primera fase de `descripciondeTrabajo.md`. No se modificó código de la aplicación ni se ejecutó el build.

## 2026-11-01 — Fase 1: tarjeta y saludo inicial

### Objetivo

Retirar la pantalla de ejemplo de Vite e implementar únicamente el primer mensaje con una base visual mobile-first, sin avanzar todavía por la secuencia.

### Archivos implementados

- `src/App.tsx`: ahora compone la app montando `InvitationFlow`.
- `src/components/invitation/InvitationFlow.tsx`: estructura de la primera etapa, tarjeta adaptable, título, progreso visual y composición de página con clases Tailwind.
- `src/components/invitation/CatMeme.tsx`: presenta un placeholder local reemplazable para el gatito curioso; no depende de una URL externa.
- `src/data/invitationStages.ts`: contiene el texto del saludo y la descripción del gatito, separado de la presentación visual.
- `src/types/invitation.ts`: define los tipos TypeScript del contenido de la etapa y la expresión del gatito.
- `README.md` y `src/README.md`: reflejan el nuevo estado y distinguen componentes existentes de los que se crearán en fases siguientes.
- `agentes/planDeTrabajo.md`: registra la implementación de la Fase 1 y la revisión visual pendiente.

### Conceptos para estudiar

- `App` funciona como punto de composición: mantiene la entrada simple y delega el flujo en un componente con responsabilidad clara.
- `InvitationFlow` recibe datos desde `openingStage`, así que cambiar el mensaje no requiere editar el JSX de presentación.
- `CatMeme` acepta propiedades tipadas (`mood` y `description`) y muestra un placeholder hasta incorporar un meme real local.
- Las clases `sm:` y `md:` de Tailwind aplican cambios desde anchos de pantalla mayores; el diseño empieza en una sola columna y cambia a dos columnas en escritorio.
- `aria-labelledby` conecta la sección con su título, y el placeholder ofrece un nombre accesible para lectores de pantalla.

### Verificación y estado

`npm run build` terminó correctamente, incluyendo la compilación TypeScript y el bundle de Vite. Intenté revisar la página en Brave, pero la herramienta de control visual detuvo la sesión porque no pudo determinar con confianza la URL actual del navegador; por eso la revisión visual real en móvil y escritorio sigue pendiente. No se ejecutaron pruebas automatizadas.

La Fase 1 está implementada y compila. La siguiente será la Fase 2: avanzar progresivamente por los mensajes y añadir la animación de escritura respetando movimiento reducido.

## 2026-11-01 — Fase 2: secuencia progresiva

### Objetivo

Permitir avanzar por los cinco mensajes de la invitación en el orden acordado, con una animación de escritura reutilizable.

### Archivos modificados

- `src/data/invitationStages.ts`: ahora contiene los cinco textos, orden, emoción y descripción de cada placeholder.
- `src/types/invitation.ts`: amplió el tipo `CatMood` a curioso, sospechoso, serio y emocionado.
- `src/components/invitation/InvitationFlow.tsx`: centraliza el índice de etapa en estado React, renderiza el botón Continuar, actualiza el progreso y pasa los datos de la etapa a sus componentes.
- `src/components/invitation/CatMeme.tsx`: añadió las expresiones placeholder para las nuevas etapas.
- `src/components/invitation/Typewriter.tsx`: presenta el texto animado y mantiene el mensaje completo en una región accesible para tecnologías de asistencia.
- `src/hooks/useTypewriter.ts`: comparte la temporización de letras, limpia el temporizador al cambiar de etapa y muestra el mensaje al instante si el usuario prefiere movimiento reducido.
- `src/index.css`: define una transición común para cada etapa; Tailwind `motion-safe:` evita ejecutarla con movimiento reducido.
- `README.md` y `src/README.md`: actualizan el estado y explican los nuevos componentes y responsabilidades.
- `agentes/planDeTrabajo.md`: marca la Fase 2 implementada y deja la elección para la siguiente fase.

### Conceptos para estudiar

- El estado `currentStageIndex` controla una sola fuente de verdad para mensaje, meme y progreso. El botón incrementa el índice con un límite.
- `invitationStages` separa contenido de presentación. El tipo `InvitationStageContent` valida que cada etapa tenga el mismo formato.
- El hook `useTypewriter` concentra el temporizador, así el componente visual no contiene lógica de tiempo.
- `matchMedia('(prefers-reduced-motion: reduce)')` escucha la preferencia del sistema y la animación de entrada usa la variante Tailwind `motion-safe`.
- El texto visual está oculto para lectores de pantalla mientras una región `aria-live` anuncia el mensaje completo al cambiar de etapa.

### Verificación y alcance

`npm run build` pasó (TypeScript y Vite). La Fase 2 llega hasta la pregunta “¿Te animas?”; la elección Sí/No pertenece a la Fase 3 y todavía no aparece en pantalla.

## 2026-11-01 — Corrección de import CSS en desarrollo

### Problema reportado

El navegador mostró `[plugin:vite:css] [postcss] ENOENT` al intentar abrir `...invitacion\tailwindcss` desde `src/index.css`.

### Cambio

El primer ajuste a `@import "tailwindcss/index.css"` tampoco funcionó: Vite seguía tratando el import CSS como una ruta relativa. Se quitó el import de Tailwind de `src/index.css` y se agregó `import 'tailwindcss/index.css'` en `src/main.tsx`. Así Vite resuelve directamente el archivo CSS exportado por el paquete mediante el sistema de módulos; el `postcss-import` integrado ya no intenta abrirlo como ruta relativa desde `src/`. Se conserva `@tailwindcss/vite` como plugin. También se retiraron de `index.html` un enlace de prueba a `/src/style.css` que apuntaba a un archivo inexistente y un `Hello world!` que estaba fuera del árbol de React.

### Verificación

`npm run build` terminó correctamente. Además, se creó un servidor Vite en modo middleware y se transformó directamente `/node_modules/tailwindcss/index.css`: devolvió CSS generado con las utilidades de la aplicación, sin el error ENOENT. La petición HTTP al servidor local no se pudo realizar desde el entorno aislado.

## 2026-11-01 — Estilos propios de la tarjeta

### Motivo

La vista seguía percibiéndose poco estilizada en el navegador. La tarjeta necesitaba una hoja clara y explícita para materializar la dirección visual del documento.

### Cambios

- `src/components/invitation/InvitationFlow.css`: se añadió una hoja de estilos con fondo crema y acentos pastel, encabezado, tarjeta, panel del gatito, botón, progreso, tipografía, estados de foco y distribución responsive. También incluye animaciones suaves y las reduce con `prefers-reduced-motion`.
- `InvitationFlow.tsx`, `CatMeme.tsx` y `Typewriter.tsx`: ahora usan nombres de clase semánticos definidos en esa hoja.
- `src/index.css`: reúne la tipografía, colores y reglas globales; la hoja específica se importa desde `InvitationFlow`.
- `README.md` y `src/README.md`: documentan dónde viven los estilos y cómo encontrarlos.

### Conceptos para estudiar

- Una clase semántica como `.invitation-card` nombra el papel del elemento. Su diseño queda en CSS, separado de la lógica React.
- Las media queries `max-width` cambian columnas, tamaños y espacios cuando el viewport pasa a móvil.
- `:focus-visible` permite identificar con teclado qué control está seleccionado.
- `prefers-reduced-motion` reduce animaciones para personas que lo hayan indicado en el sistema.

### Verificación

`npm run build` terminó correctamente. Se buscó en el CSS generado evidencia de `.invitation-page`, `.invitation-card`, `.cat-meme`, `.continue-button` y la media query de movimiento reducido. También se transformó la hoja directamente con el servidor Vite en modo desarrollo y se confirmó que incluye `.invitation-card` y la regla `prefers-reduced-motion`. No se pudo realizar una revisión visual real en el navegador desde este entorno.

## 2026-11-01 — Paleta rosada pastel

### Cambio

Se ajustaron los colores de `src/index.css` y `src/components/invitation/InvitationFlow.css`: fondo rosa muy claro, halos en rosa y blush, detalles y progreso en rosa medio, texto en ciruela cálida y botón rosa más visible con un tono más profundo al pasar el cursor. Se mantuvieron superficies claras y contraste suficiente para leer el mensaje.

### Verificación

`npm run build` terminó correctamente. No se hizo una captura de pantalla del navegador.

## 2026-11-01 — Intensidad rosada aumentada

### Cambio

A petición del usuario, se aumentó aproximadamente un 20% la presencia del rosa en los fondos, halos, badges, bordes, panel del placeholder y progreso. El botón principal usa ahora un rosa más saturado y su estado hover un tono más oscuro. Se conservaron los textos ciruela oscuros para mantener la legibilidad.

### Verificación

`npm run build` terminó correctamente.

## 2026-11-01 — Fase 3: botones de respuesta

### Objetivo

Agregar las opciones afirmativa y de rechazo según el documento, incluyendo la interacción limitada del botón No.

### Archivos modificados

- `src/components/invitation/InvitationFlow.tsx`: muestra las dos opciones al llegar a “¿Te animas?”, registra la selección y comunica el mensaje acordado después del Sí. El No seleccionado muestra una respuesta respetuosa.
- `src/components/invitation/EscapingButton.tsx`: desplaza el botón con pointer enter/down, limita los escapes a tres, calcula posiciones dentro del área y busca posiciones que no se solapen con el botón Sí. `ResizeObserver` recalcula la posición si cambia el tamaño del área. La activación por teclado permanece disponible.
- `src/components/invitation/InvitationFlow.css`: define los dos estilos de botón y el área reservada para que el botón desplazado no cubra otros elementos; adapta el área a una columna en pantallas pequeñas y desactiva el gesto táctil de desplazamiento sobre el botón fugitivo.
- `src/hooks/useTypewriter.ts`: ajusta la animación a progreso derivado y elimina una advertencia de lint sobre actualizar estado sincrónicamente desde un efecto.
- `README.md`, `src/README.md` y `agentes/planDeTrabajo.md`: actualizan el estado de la fase y describen el componente nuevo.

### Conceptos para estudiar

- `pointerenter` cubre el puntero del ratón o lápiz y `pointerdown` permite reaccionar al toque sin crear implementaciones separadas para cada tipo de dispositivo.
- `getBoundingClientRect()` obtiene dimensiones actuales para calcular posiciones contenidas; se comprueba el rectángulo del botón afirmativo antes de aceptar una posición.
- El contador `MAX_ESCAPE_ATTEMPTS` limita la interacción. A partir de tres evasiones, los eventos dejan de mover el botón y el clic elige la respuesta.
- La activación de teclado (`event.detail === 0`) puede seleccionar el No sin tener que perseguirlo con puntero.
- El área de posiciones tiene altura reservada, y el botón usa `position: absolute` dentro de ella cuando escapa, para que el resto del contenido no salte.

### Verificación y alcance

`npm run build` y `npm run lint` terminaron correctamente. El clic en Sí muestra el mensaje de aceptación acordado; la celebración visual pertenece a la Fase 4. No se hizo una prueba manual de puntero en navegador/táctil.

## 2026-11-01 — Más intentos y desplazamientos más visibles

### Cambio

Se aumentó el máximo de tres a trece escapes (diez adicionales). El cálculo exige ahora una distancia mínima entre la posición actual y la nueva, el área reservada es más alta y CSS anima los cambios de `left` y `top` para dar más recorrido al botón. El botón sigue dentro de su área y evita tanto el puntero como el botón afirmativo. Se actualizó `descripciondeTrabajo.md`, `README.md` y el plan de fases para reflejar el nuevo límite solicitado.

### Verificación

`npm run build` y `npm run lint` terminaron correctamente. La prueba manual del puntero en el navegador/dispositivo táctil sigue pendiente.

## 2026-11-01 — Aceptación, formulario y confirmación

### Objetivo

Al aceptar la invitación, mostrar la celebración del documento, permitir proponer fecha/hora y terminar en la pantalla de confirmación.

### Archivos creados o modificados

- `src/components/invitation/InvitationFlow.tsx`: amplió la navegación central para controlar vistas de mensajes, celebración, formulario y confirmación. El plan confirmado se guarda solo en estado React.
- `src/components/invitation/CelebrationScreen.tsx`: presenta “¡Excelente decisión! Ahora viene la parte importante...”, un placeholder celebratorio y el paso hacia el formulario.
- `src/components/invitation/DateForm.tsx`: incluye fecha futura obligatoria, hora obligatoria, mensaje opcional y el botón “Confirmar el plan 😸”.
- `src/components/invitation/ConfirmationScreen.tsx`: muestra la confirmación y resume los datos que se acaban de introducir.
- `src/components/invitation/InvitationFlow.css`: añadió estilos rosados para controles de formulario, mensajes de error, resumen del plan y ajustes responsive.
- `src/types/invitation.ts`: añade `PlanDetails`, el tipo del plan capturado.
- `src/utils/date.ts`: calcula una fecha mínima local y verifica que la seleccionada sea posterior a hoy, evitando la conversión UTC del valor `date`.
- `README.md`, `src/README.md` y `agentes/planDeTrabajo.md`: documentan el flujo implementado y actualizan el estado de las fases.

### Flujo y conceptos

1. Al elegir Sí, `InvitationFlow` cambia la vista a celebración.
2. El botón “Elegir fecha y hora” abre `DateForm`.
3. Los atributos `required` y `min` aportan validación del navegador; la función `isFutureDateInputValue` comprueba otra vez que la fecha sea futura antes de aceptar los datos.
4. `PlanDetails` transporta el resultado del formulario a `ConfirmationScreen`; no se almacena en base de datos ni se envía a otra aplicación.

Las etiquetas `label` están asociadas a cada control mediante `htmlFor`/`id`. La fecha mínima se calcula usando componentes locales de calendario para que un cambio de zona horaria no convierta mañana en hoy.

### Verificación

`npm run build` y `npm run lint` terminaron correctamente. No se ejecutaron pruebas automatizadas ni una prueba manual completa del formulario en navegador.

## 2026-11-01 — Horario fijado y checklist de comida

### Cambios solicitados

- El botón No queda con escape infinito para ratón/táctil y movimientos más amplios. Se conserva la activación por teclado para mantener accesible la opción de rechazo.
- La cita queda fijada para el **viernes 6 de noviembre de 2026 a las 7:00 p. m.**; se quitaron los controles para elegir fecha y hora.
- Se añadió un checklist multiselección con salchipapas, pizza, tacos, alitas de pollo y ensalada de frutas.
- Se requiere marcar al menos una comida antes de confirmar.
- Se conserva el campo de mensaje opcional.
- La confirmación muestra el texto “La cita queda para el viernes 6 de noviembre a las 7:00 p. m.” y resume comidas marcadas y mensaje opcional.

### Archivos modificados

- `src/components/invitation/EscapingButton.tsx`: eliminó el límite de escapes y aumentó la distancia mínima de los desplazamientos.
- `src/components/invitation/DateForm.tsx`: reemplazó los campos fecha/hora por un horario fijo visible y agregó las casillas de comida.
- `src/components/invitation/ConfirmationScreen.tsx`: muestra la frase exacta de fecha/hora fijadas y las elecciones del formulario.
- `src/data/planOptions.ts`: centraliza el horario y las opciones de comida.
- `src/types/invitation.ts`: añade comidas seleccionadas a `PlanDetails`.
- `src/components/invitation/InvitationFlow.css`: amplía el área de escape y estiliza el horario fijo, las casillas y la confirmación.
- `agentes/descripciondeTrabajo.md`, `agentes/planDeTrabajo.md`, `README.md` y `src/README.md`: reflejan las instrucciones actualizadas. Se retiró la utilidad anterior para validar fecha, porque ya no se le pide a la usuaria seleccionar una.

### Verificación

`npm run build` y `npm run lint` terminaron correctamente. Se comprobó con JavaScript que el 6 de noviembre de 2026 cae viernes. No se hizo una prueba manual con puntero/táctil ni del formulario en el navegador.

## 2026-11-01 — Preparación para imágenes definitivas y saludo

### Cambio

- Se eliminaron del componente de imagen las caras emoji, captions genéricos, etiquetas de gato y el adorno de huella del pie de página. El espacio ahora tiene un marco neutro con un icono de imagen, listo para recibir los memes locales.
- `CatMeme` acepta `imageSrc` y `description`: cuando llegue un archivo real, se mostrará con texto alternativo; mientras tanto aparece “Imagen pendiente”.
- El saludo inicial ahora dice “Hola, Jannin Juliana, ¿tienes un momento?”.
- Se actualizaron `descripciondeTrabajo.md`, `planDeTrabajo.md`, `README.md` y `src/README.md` para reflejar el saludo y la preparación de imágenes.

### Verificación

`npm run build` y `npm run lint` terminaron correctamente.

## 2026-11-01 — Primera imagen en el saludo

### Cambio

- Se conectó `public/images/intelectual.jpeg` con la primera etapa del flujo, donde aparece el saludo “Hola, Jannin Juliana”.
- La imagen conserva sus proporciones dentro del marco mediante `object-fit: contain`.
- Las demás etapas siguen mostrando el espacio “Imagen pendiente” hasta que se agreguen sus imágenes correspondientes.

### Ajuste de centrado y encuadre

- Tras revisar la captura, se cambió el marco a un contenedor flex que centra las imágenes en ambos ejes.
- Las imágenes ahora usan dimensiones automáticas con límites máximos del marco y `object-position: center`; así se conserva toda la foto, sin estirarla ni recortarla, sea cuadrada o apaisada.

### Verificación

- Se ejecutó `npm run build` para comprobar la compilación del cambio.

## 2026-11-01 — Imagen del segundo mensaje

### Cambio

- Se asignó `public/images/cool.jpeg` al segundo mensaje (“Tengo una propuesta que podría interesarte...”); el texto alternativo describe la imagen como un gatito haciendo una seña de tranquilo.
- La imagen usa el marco centrado y sin recorte implementado para todas las etapas.

### Verificación

- `npm run build` terminó correctamente después de conectar la segunda imagen.

## 2026-11-01 — Imagen del tercer mensaje

### Cambio

- Se asignó `public/images/romantico.jpeg` al tercer mensaje (“Me gustaría invitarte a salir.”); el texto alternativo describe al gatito ofreciendo una rosa roja.
- La imagen usa el marco centrado y sin recorte común a las etapas.

### Verificación

- `npm run build` terminó correctamente después de conectar la tercera imagen.

## 2026-11-01 — Imagen del cuarto mensaje

### Cambio

- Se asignó `public/images/gaticoTierno.jpeg` al cuarto mensaje (“Podríamos ir por algo rico, conversar y pasar un buen rato.”); el texto alternativo describe al gatito haciendo un gesto con las patas.
- La imagen se muestra centrada y completa con el marco compartido.

### Verificación

- `npm run build` terminó correctamente después de conectar la cuarta imagen.

## 2026-11-01 — Imagen del quinto mensaje

### Cambio

- Se asignó `public/images/coronado.jpeg` al quinto mensaje (“¿Te animas?”); el texto alternativo describe al gato blanco haciendo una mueca.
- Con esta imagen quedan asignadas las cinco imágenes a sus cinco mensajes, todas con el marco centrado y sin recorte.

### Verificación

- `npm run build` terminó correctamente después de conectar la quinta imagen.

## 2026-11-01 — Sexta etapa y reubicación de imágenes

### Cambio

- Se asignó `public/images/pensativo.jpeg` a la quinta etapa, con el mensaje “Piénsalo con calma, no hay afán.”
- La imagen que estaba en la quinta etapa, `public/images/coronado.jpeg`, pasó a la sexta etapa junto a la pregunta final “¿Te animas?”.
- El progreso y la condición para mostrar las respuestas se derivan del número de etapas, así que ahora la pregunta y los botones aparecen al final de la sexta.

### Verificación

- `npm run build` terminó correctamente después de añadir la sexta etapa.

## 2026-11-01 — Séptima etapa con la imagen alfa

### Cambio

- Se agregó `public/images/alfa.jpeg` al séptimo mensaje, “¿Te animas?”.
- La imagen `coronado.jpeg` permanece en el sexto lugar; se añadió el mensaje de transición “Y ahora sí, llegó la pregunta importante.” para mantener la pregunta y los botones de respuesta al final del flujo.
- El indicador de progreso y la aparición de los botones se ajustan a siete etapas automáticamente.

### Verificación

- `npm run build` terminó correctamente después de añadir la séptima etapa.

## 2026-11-01 — Octava vista con la imagen loquito

### Cambio

- Se asignó `public/images/loquito.jpeg` a la octava vista, que conserva la pregunta final “¿Te animas?” y los botones de respuesta.
- La imagen `alfa.jpeg` permanece en la séptima vista; se añadió un mensaje de transición para que la pregunta y la decisión sigan en la última etapa.
- El indicador de progreso se ajusta automáticamente a ocho vistas.

### Verificación

- `npm run build` terminó correctamente después de añadir la octava vista.

## 2026-11-01 — Novena vista con la imagen sospechoso

### Cambio

- Se asignó `public/images/sospechoso.jpeg` a la novena vista, que muestra la pregunta “¿Te animas?” y los botones de respuesta.
- `loquito.jpeg` permanece en la octava vista con un mensaje previo a la pregunta final.
- Se ajustó el texto de la séptima vista para evitar repetir el mismo mensaje de transición.
- El progreso se adapta automáticamente a nueve vistas.

### Verificación

- `npm run build` terminó correctamente después de añadir la novena vista.

## 2026-11-01 — Simplificación del mensaje y reubicación de alfa

### Cambio

- Se eliminó la vista redundante “Piénsalo con calma, aquí te espero.” del recorrido.
- `public/images/alfa.jpeg` se movió desde esa vista a la pantalla de aceptación “¡Excelente decisión! Ahora viene la parte importante...”.
- El recorrido queda con ocho vistas; el indicador se actualiza según la cantidad de etapas.
- Se actualizaron los README para reflejar la cantidad actual de vistas y retirar el conteo anterior de cinco mensajes.

### Verificación

- `npm run build` terminó correctamente después de eliminar la vista y mover la imagen.

## 2026-11-01 — Imagen en la selección de comida y opción de checklist

### Cambio

- Se asignó `public/images/fotosintesis.jpeg` al panel visual del formulario donde se seleccionan las comidas.
- Se agregó “Coito” como opción adicional del checklist. Al seleccionarse, se conserva en la confirmación igual que las demás opciones.
- Se actualizó la descripción del proyecto para que la lista documentada coincida con la aplicación.

### Verificación

- `npm run build` terminó correctamente después de actualizar el formulario y la lista.

## 2026-11-01 — Retiro del letrero del encabezado

### Cambio

- Se eliminó el texto “HECHA CON CARIÑO” del encabezado, junto con sus estilos de escritorio y móvil.
- No se añadió ningún elemento en su lugar.

### Verificación

- `npm run build` terminó correctamente después del cambio visual.

## 2026-11-01 — Imagen dinámica de la comida en la confirmación

### Cambio

- Se relacionaron las seis opciones del formulario con sus imágenes de `public/comida/`, incluyendo `ensalaDeFruta.jpg` para “Ensalada de frutas”.
- La pantalla final ahora muestra la imagen de la última opción marcada. Si se seleccionan varias comidas, se conservan todas las etiquetas y la imagen corresponde a la última seleccionada.
- La relación opción/ruta se centraliza en `src/data/planOptions.ts` para que sea fácil mantenerla.

### Verificación

- `npm run build` terminó correctamente después de conectar las imágenes dinámicas.

## 2026-11-01 — Limpieza de textos de celebración y pie

### Cambio

- Se quitó la indicación para elegir día y hora de la pantalla de celebración, porque el horario ya está fijado.
- El botón de esa pantalla ahora dice “Continuar”.
- Se eliminó el texto “tómate tu tiempo” y su pie del diseño.

### Verificación

- `npm run build` terminó correctamente después de retirar los textos.
