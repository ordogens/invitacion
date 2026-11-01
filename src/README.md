# Organización de `src`

Esta estructura reserva un lugar por responsabilidad. Las carpetas se crean antes de implementar componentes para que podamos construir el proyecto paso a paso.

```text
src/
├── assets/                 # Recursos importados desde el código fuente
├── components/
│   ├── invitation/         # Componentes y estilos de la invitación
│   └── shared/             # Piezas visuales reutilizables si hacen falta
├── data/                   # Textos y datos estáticos de las etapas
├── hooks/                  # Lógica React reutilizable (animaciones/interacciones)
├── types/                  # Tipos TypeScript compartidos
├── utils/                  # Funciones puras de apoyo, por ejemplo validaciones
├── App.tsx                 # Composición de la aplicación
├── App.css                 # Estilos legados de la plantilla; ya no se importa
├── index.css               # Tipografía, colores y reglas globales
└── main.tsx                # Entrada, importación de Tailwind y montaje de React
```

## Relación con el documento del proyecto

`InvitationFlow`, `CatMeme`, `Typewriter`, `EscapingButton`, `CelebrationScreen`, `DateForm` y `ConfirmationScreen` viven en `components/invitation/`. La navegación y su estado se centralizan en `InvitationFlow`. Los mensajes ordenados por etapa y el horario fijo/lista de comidas e imágenes de cada opción van en `data/`, los tipos de etapas y formulario en `types/`, y la lógica de escritura en `hooks/useTypewriter.ts`.

`components/invitation/InvitationFlow.css` define la apariencia de la tarjeta, el espacio reservado para imágenes y los controles. `CatMeme` ya no dibuja caras genéricas: acepta una imagen local cuando se proporcione y, mientras tanto, muestra un marco neutro. Tailwind se carga desde `main.tsx` como una hoja de estilos del paquete; `index.css` queda dedicado a reglas globales.

Las imágenes que se referencien por URL local estarán en `public/images/`; recursos que se importen desde TypeScript pueden estar en `assets/`. No se debe duplicar una imagen en ambos lugares.

Las carpetas que aún están vacías contienen `.gitkeep` solo para que su estructura inicial quede registrada. Se pueden borrar cuando tengan archivos reales.
