import type { CatMood } from '../../types/invitation'

interface CatMemeProps {
  mood: CatMood
  description: string
  imageSrc?: string
}

function CatMeme({ mood, description, imageSrc }: CatMemeProps) {
  return (
    <figure className="cat-meme" data-mood={mood}>
      {imageSrc ? (
        <img alt={description} className="cat-meme-image" loading="lazy" src={imageSrc} />
      ) : (
        <div aria-label="Espacio reservado para la imagen de esta etapa" className="cat-meme-placeholder" role="img">
          <svg aria-hidden="true" className="cat-meme-placeholder-icon" fill="none" viewBox="0 0 48 48">
            <rect height="30" rx="5" stroke="currentColor" strokeWidth="1.7" width="36" x="6" y="9" />
            <circle cx="17" cy="19" r="3" stroke="currentColor" strokeWidth="1.7" />
            <path d="m9 34 10-9 7 6 5-5 8 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
          <span>Imagen pendiente</span>
        </div>
      )}
    </figure>
  )
}

export default CatMeme
