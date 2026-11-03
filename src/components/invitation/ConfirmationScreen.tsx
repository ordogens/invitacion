import { foodImageByOption } from '../../data/planOptions'
import type { PlanDetails } from '../../types/invitation'
import CatMeme from './CatMeme'

interface ConfirmationScreenProps {
  plan: PlanDetails
}

function ConfirmationScreen({ plan }: ConfirmationScreenProps) {
  const selectedFood = plan.places.at(-1)
  const selectedFoodImage = selectedFood ? foodImageByOption[selectedFood] : undefined
  const date = new Date(`${plan.date}T12:00:00`)
  const dateDisplay = new Intl.DateTimeFormat('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(date)
  const [hours = '0', minutes = '00'] = plan.time.split(':')
  const hour = Number(hours)
  const timeDisplay = `${hour % 12 || 12}:${minutes} ${hour >= 12 ? 'p. m.' : 'a. m.'}`

  return (
    <>
      <div className="invitation-copy confirmation-copy">
        <div className="stage-kicker">
          <span aria-hidden="true" className="stage-number">✓</span>
          <span className="stage-label">Plan listo</span>
        </div>
        <h1 className="stage-title confirmation-title" id="invitation-message">
          La cita queda para el {dateDisplay} a las {timeDisplay}.
        </h1>
        {plan.places.length > 0 && (
          <div className="confirmation-detail">
            <h2>Comida elegida</h2>
            <ul className="confirmation-food-list">
              {plan.places.map((place) => <li key={place}>{place}</li>)}
            </ul>
          </div>
        )}
        {plan.message && (
          <p className="confirmation-message">“{plan.message}”</p>
        )}
      </div>
      <div className="invitation-art-panel">
        <CatMeme
          mood="excited"
          description={selectedFood ? `Gatito relacionado con ${selectedFood}` : 'Gatito celebrando el plan'}
          imageSrc={selectedFoodImage}
        />
      </div>
    </>
  )
}

export default ConfirmationScreen
