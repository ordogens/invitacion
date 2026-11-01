import type { PlanDetails } from '../types/invitation'

export const fixedPlanSchedule: Pick<PlanDetails, 'date' | 'time'> & { display: string } = {
  date: '2026-11-06',
  time: '19:00',
  display: 'viernes 6 de noviembre a las 7:00 p. m.',
}

export const foodOptions = [
  'Salchipapas',
  'Pizza',
  'Tacos',
  'Alitas de pollo',
  'Ensalada de frutas',
  'Coito',
]

export const foodImageByOption: Record<string, string> = {
  Salchipapas: '/comida/salchipapa.jpg',
  Pizza: '/comida/pizza.jpg',
  Tacos: '/comida/tacos.jpg',
  'Alitas de pollo': '/comida/alitasDePollo.jpg',
  'Ensalada de frutas': '/comida/ensalaDeFruta.jpg',
  Coito: '/comida/coito.jpg',
}
