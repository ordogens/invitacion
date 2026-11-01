import CatMeme from './CatMeme'

interface CelebrationScreenProps {
  onContinue: () => void
}

function CelebrationScreen({ onContinue }: CelebrationScreenProps) {
  return (
    <>
      <div className="invitation-copy celebration-copy">
        <div className="stage-kicker">
          <span aria-hidden="true" className="stage-number">✦</span>
          <span className="stage-label">¡Qué buena noticia!</span>
        </div>
        <h1 className="stage-title" id="invitation-message">
          ¡Excelente decisión! Ahora viene la parte importante...
        </h1>
        <button className="continue-button" onClick={onContinue} type="button">
          Continuar
          <span aria-hidden="true" className="continue-arrow">→</span>
        </button>
      </div>
      <div className="invitation-art-panel">
        <CatMeme
          mood="excited"
          description="Gatito naranja tomando café"
          imageSrc="/images/alfa.jpeg"
        />
      </div>
    </>
  )
}

export default CelebrationScreen
