import useTypewriter from '../../hooks/useTypewriter'

interface TypewriterProps {
  text: string
}

function Typewriter({ text }: TypewriterProps) {
  const { displayedText, isComplete } = useTypewriter(text)

  return (
    <>
      <span aria-hidden="true">
        {displayedText}
        {!isComplete && (
          <span aria-hidden="true" className="typewriter-cursor" />
        )}
      </span>
      <span aria-atomic="true" aria-live="polite" className="sr-only">
        {text}
      </span>
    </>
  )
}

export default Typewriter
