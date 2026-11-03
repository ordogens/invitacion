import useTypewriter from "../../hooks/useTypewriter";

interface TypewriterProps {
  text: string;
}

function Typewriter({ text }: TypewriterProps) {
  const { displayedText, isComplete } = useTypewriter(text);

  return (
    <>
      <span className="typewriter-layout ">
        <span aria-hidden="true" className="typewriter-reserve">
          {text}
        </span>
        <span aria-hidden="true" className="typewriter-visible">
          {displayedText}
          {!isComplete && <span className="typewriter-cursor" />}
        </span>
      </span>
      <span aria-atomic="true" aria-live="polite" className="sr-only">
        {text}
      </span>
    </>
  );
}

export default Typewriter;
