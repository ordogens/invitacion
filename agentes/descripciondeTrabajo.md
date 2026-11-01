Gatito curioso: "Hola, Jannin Juliana, ¿tienes un momento?"
Gatito sospechoso: "Tengo una propuesta que podría interesarte..."
Gatito serio: "Me gustaría invitarte a salir."
Gatito emocionado: "Podríamos ir por algo rico, conversar y pasar un buen rato."
La pregunta: "¿Te animas?"
Los botones: "¡Sí, me apunto! 😸" y "No, gracias 🙈".
Si acepta: "¡Excelente decisión! Ahora viene la parte importante..."
Formulario: "¿Qué día y a qué hora te gustaría?"
Confirmación: "La cita queda para el viernes 6 de noviembre a las 7:00 p. m.".

Los memes de gatitos reales aparecerían entre los mensajes, acompañando las expresiones. No todos los gatitos tienen que ser románticos; algunos pueden tener una cara seria, sospechosa o dramática.

Documento de instrucciones para Codex

Este es el documento que vamos a usar como punto de partida. Está escrito para que Codex entienda el proyecto, sus requisitos y cómo debe comenzar a desarrollarlo sin intentar construirlo todo de golpe.

Proyecto: Invitación interactiva con memes de gatitos
Proyecto: Invitación interactiva con memes de gatitos
1. Objetivo

Crear una aplicación web interactiva para invitar a una persona a salir.

La experiencia debe ser divertida, original, ligeramente romántica y casual. No debe parecer una página excesivamente romántica ni infantil.

La aplicación debe funcionar correctamente tanto en computadores como en celulares.

2. Tecnologías
React
TypeScript
Vite
Tailwind CSS
Lucide React para iconos, si es necesario

La aplicación debe tener una arquitectura modular y componentes reutilizables.

No implementar backend ni integración con WhatsApp en esta primera fase.

3. Dirección visual

Estética: Cute, playful & casual.

Características:

Fondo crema o blanco cálido.
Colores pastel con acentos rosados suaves.
Tipografía moderna, legible y ligeramente redondeada.
Diseño limpio y responsive.
Animaciones sutiles.
Memes de gatitos reales con expresiones graciosas.
Evitar ilustraciones kawaii genéricas.
Evitar corazones excesivos y frases empalagosas.

Las imágenes deben poder reemplazarse fácilmente mediante archivos locales.

Organizar las imágenes en una carpeta pública, por ejemplo:

public/images/

No utilizar imágenes de URLs aleatorias que puedan desaparecer.

Si todavía no existen las imágenes definitivas, crear placeholders visuales que puedan reemplazarse posteriormente.

4. Flujo de la experiencia

La aplicación debe mostrar los mensajes progresivamente.

No mostrar todos los mensajes al mismo tiempo.

Cada etapa debe tener:

Un mensaje.
Una imagen de un meme de gatito.
Una transición visual suave.
Un botón para continuar cuando corresponda.

Secuencia:

Etapa 1

Mensaje:

"Hola, Jannin Juliana, ¿tienes un momento?"

Gatito curioso.

Etapa 2

Mensaje:

"Tengo una propuesta que podría interesarte..."

Gatito con expresión sospechosa.

Etapa 3

Mensaje:

"Me gustaría invitarte a salir."

Gatito serio o sorprendido.

Etapa 4

Mensaje:

"Podríamos ir por algo rico, conversar y pasar un buen rato."

Gatito emocionado.

Etapa 5

Mensaje:

"¿Te animas?"

Mostrar dos botones:

¡Sí, me apunto! 😸
No, gracias 🙈
5. Botón interactivo

El botón "No, gracias" debe tener un comportamiento divertido.

Cuando la usuaria intente tocarlo, el botón puede desplazarse a una nueva posición dentro del área de la tarjeta.

Debe funcionar en dispositivos móviles mediante eventos pointer.

Requisitos:

No permitir que el botón salga del contenedor.
Evitar que se superponga con otros elementos.
Mantener una transición fluida.
No provocar desplazamientos de toda la página.
El botón puede escapar indefinidamente mientras se use el puntero, con desplazamientos notorios.
No debe salir del contenedor, cubrir el botón afirmativo ni provocar desplazamientos de la página.

La opción de rechazo debe permanecer disponible mediante teclado.

6. Si acepta

Al seleccionar "¡Sí, me apunto!":

Mostrar una nueva etapa con una animación y un meme de gatito celebrando.

Mensaje:

"¡Excelente decisión! Ahora viene la parte importante..."

Después, mostrar un formulario.

7. Formulario

La fecha y hora quedan fijadas para el viernes 6 de noviembre de 2026 a las 7:00 p. m.; no se muestran campos para que ella las elija.

Incluir una lista de comidas que pueda marcar:

- Salchipapas
- Pizza
- Tacos
- Alitas de pollo
- Ensalada de frutas
- Coito

Conservar el campo de mensaje opcional.

El formulario debe permitir marcar varias comidas y validar el envío.

Botón:

"Confirmar el plan 😸"

Al confirmar, mostrar una pantalla final con el texto:

"La cita queda para el viernes 6 de noviembre a las 7:00 p. m."

En esta primera fase, la información puede mantenerse en el estado de React. No implementar todavía persistencia ni notificaciones.

8. Arquitectura sugerida

Crear componentes separados:

InvitationFlow
Typewriter
CatMeme
EscapingButton
DateForm
ConfirmationScreen

Mantener la lógica de navegación entre etapas centralizada.

No duplicar la lógica de las animaciones.

Utilizar TypeScript para definir los tipos de los datos y las propiedades de los componentes.

9. Criterios de calidad
Diseño mobile-first.
Compatible con navegadores modernos.
Código legible y organizado.
Componentes reutilizables.
No utilizar dependencias innecesarias.
Respetar las preferencias de movimiento reducido del sistema.
Evitar errores de TypeScript.
Verificar que la aplicación funcione con npm run dev.
Ejecutar el build de producción para comprobar que no existan errores.
10. Alcance de la primera fase

En esta primera fase solamente se debe crear el frontend y el flujo visual completo.

No implementar:

WhatsApp API.
Backend.
Base de datos.
Autenticación.
Sistemas de notificaciones.

Estas funciones se evaluarán en fases posteriores.

Instrucción inicial para Codex

Comienza inspeccionando el directorio actual.

Si el proyecto está vacío, inicializa React, TypeScript, Vite y Tailwind CSS con una configuración compatible y actual.

Después implementa la primera versión funcional del frontend.

No te limites a generar una página estática: implementa el flujo entre etapas, las animaciones y las interacciones.

Al terminar, ejecuta las comprobaciones disponibles y explica brevemente qué archivos creaste, cómo ejecutar el proyecto y qué falta por implementar.

No avances a la integración del backend ni de WhatsApp sin una instrucción explícita.
