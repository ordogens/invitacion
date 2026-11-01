export type CatMood = 'curious' | 'suspicious' | 'serious' | 'excited'

export interface InvitationStageContent {
  id: string
  message: string
  catMood: CatMood
  catDescription: string
  imageSrc?: string
}

export interface PlanDetails {
  date: string
  time: string
  message?: string
  places: string[]
}
