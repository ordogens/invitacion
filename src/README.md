# Organización de `src`

Esta es la estructura de código fuente vigente, organizada por responsabilidad.

```text
src/
├── assets/                 # Recursos importados desde el código fuente
├── components/
│   └── invitation/         # Componentes y estilos de la invitación
├── data/                   # Textos y datos estáticos de las etapas
├── hooks/                  # Lógica React reutilizable (animaciones/interacciones)
├── services/               # Comunicación HTTP con el backend
├── types/                  # Tipos TypeScript compartidos
├── App.tsx                 # Composición de la aplicación
├── App.css                 # Estilos legados de la plantilla; ya no se importa
├── index.css               # Tipografía, colores y reglas globales
└── main.tsx                # Entrada, importación de Tailwind y montaje de React
```

## Relación con el documento del proyecto

`InvitationFlow`, `CatMeme`, `Typewriter`, `EscapingButton`, `CelebrationScreen`, `DateForm` y `ConfirmationScreen` viven en `components/invitation/`. La navegación y su estado se centralizan en `InvitationFlow`. Los mensajes de las etapas y las opciones de comida con sus imágenes van en `data/`; los tipos compartidos están en `types/`, y la lógica de escritura vive en `hooks/useTypewriter.ts`.

`components/invitation/InvitationFlow.css` define la apariencia de la tarjeta, el espacio reservado para imágenes y los controles. `CatMeme` ya no dibuja caras genéricas: acepta una imagen local cuando se proporcione y, mientras tanto, muestra un marco neutro. Tailwind se carga desde `main.tsx` como una hoja de estilos del paquete; `index.css` queda dedicado a reglas globales.

Las imágenes que se referencien por URL local estarán en `public/images/`; recursos que se importen desde TypeScript pueden estar en `assets/`. No se debe duplicar una imagen en ambos lugares.

El formulario usa un único control nativo `datetime-local` para seleccionar fecha y hora entre el 4 y el 8 de noviembre de 2026. `services/invitation.service.ts` envía el `PlanDetails` al backend; solo se muestra la confirmación después de una respuesta exitosa. El contrato y el flujo están descritos en `../../BACKEND_CONTEXT.md` y `../../backend/docs/`.
