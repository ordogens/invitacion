import useTypewriter from "../../hooks/useTypewriter";

interface TypewriterProps {
  text: string;
}

function Typewriter({ text }: TypewriterProps) {
  const { displayedText, isComplete } = useTypewriter(text);
  const visibleCharacterCount = Array.from(displayedText).length;
  const characters = Array.from(text);

  return (
    <>
      <span aria-hidden="true" className="typewriter-layout">
        {!isComplete && visibleCharacterCount === 0 && (
          <span className="typewriter-cursor" />
        )}
        {characters.map((character, index) => (
          <span
            className={
              index < visibleCharacterCount
                ? "typewriter-character"
                : "typewriter-character typewriter-character--hidden"
            }
            key={`${index}-${character}`}
          >
            {character}
            {!isComplete && index === visibleCharacterCount - 1 && (
              <span className="typewriter-cursor" />
            )}
          </span>
        ))}
      </span>
      <span aria-atomic="true" aria-live="polite" className="sr-only">
        {text}
      </span>
    </>
  );
}

export default Typewriter;
