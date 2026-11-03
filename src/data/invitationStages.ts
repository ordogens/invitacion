import type { InvitationStageContent } from "../types/invitation";

export const invitationStages = [
  {
    id: "opening",
    message: `Hola, Jannin Juliana!, ¿tienes un momento?`,
    catMood: "curious",
    catDescription: "Gatito intelectual con gafas",
    imageSrc: "/images/intelectual.jpeg",
  },
  {
    id: "proposal-teaser",
    message: `Tengo una propuesta que podría interesarte...`,
    catMood: "suspicious",
    catDescription: "Gatito haciendo una seña de tranquilo",
    imageSrc: "/images/cool.jpeg",
  },
  {
    id: "invitation",
    message: `Me gustaría invitarte a salir.`,
    catMood: "serious",
    catDescription: "Gatito ofreciendo una rosa roja",
    imageSrc: "/images/romantico.jpeg",
  },
  {
    id: "the-plan",
    message: `Podríamos ir por\nalgo rico, conversar y pasar un buen rato.`,
    catMood: "excited",
    catDescription: "Gatito tierno haciendo un gesto con las patas",
    imageSrc: "/images/gaticoTierno.jpeg",
  },
  {
    id: "the-question",
    // message: "Piénsalo con calma, no hay afán.",
    message: `No hay afán, piénsalo con calma.`,
    catMood: "curious",
    catDescription: "Gatito negro pensativo con un símbolo de carga",
    imageSrc: "/images/pensativo.jpeg",
  },
  {
    id: "the-final-thought",
    message: `Y ahora sí, llegó la pregunta importante.`,
    catMood: "curious",
    catDescription: "Gatito blanco haciendo una mueca divertida",
    imageSrc: "/images/coronado.jpeg",
  },
  {
    id: "the-final-preview",
    // message: "Ya casi llegamos a la pregunta final.",
    message: `Ya casi llegamos, esta es la pregunta final.`,
    catMood: "excited",
    catDescription: "Gatito pequeño sacando la lengua",
    imageSrc: "/images/loquito.jpeg",
  },
  {
    id: "the-answer",
    message: `¿Te animas?`,
    catMood: "suspicious",
    catDescription: "Gatito naranja mirando de reojo con sospecha",
    imageSrc: "/images/sospechoso.jpeg",
  },
] satisfies InvitationStageContent[];
