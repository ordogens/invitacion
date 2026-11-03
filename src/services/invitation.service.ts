import type { PlanDetails } from '../types/invitation'

const DEFAULT_API_URL = 'https://invitacion-backend-nmz3.onrender.com'

interface ConfirmationResponse {
  success?: boolean
  message?: string
}

export async function sendInvitationConfirmation(plan: PlanDetails) {
  const apiUrl = (import.meta.env.VITE_API_URL?.trim() || DEFAULT_API_URL).replace(/\/+$/, '')

  let response: Response
  try {
    response = await fetch(`${apiUrl}/api/invitacion/confirmar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(plan),
      signal: AbortSignal.timeout(15_000),
    })
  } catch {
    throw new Error('No pudimos conectar con el servicio. Revisa tu conexión e inténtalo de nuevo.')
  }

  let result: ConfirmationResponse | null = null
  try {
    result = await response.json() as ConfirmationResponse
  } catch {
    // A non-JSON or empty response cannot be treated as a confirmation.
  }

  if (!response.ok || result?.success !== true) {
    throw new Error(result?.message ?? 'No pudimos confirmar el plan. Inténtalo de nuevo.')
  }
}
