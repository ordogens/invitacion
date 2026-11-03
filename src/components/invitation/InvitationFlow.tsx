import { useRef, useState } from "react";
import { invitationStages } from "../../data/invitationStages";
import type { PlanDetails } from "../../types/invitation";
import CatMeme from "./CatMeme";
import CelebrationScreen from "./CelebrationScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import DateForm from "./DateForm";
import EscapingButton from "./EscapingButton";
import Typewriter from "./Typewriter";
import "./InvitationFlow.css";

function InvitationFlow() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [screen, setScreen] = useState<
    "messages" | "celebration" | "form" | "confirmation"
  >("messages");
  const [hasDeclined, setHasDeclined] = useState(false);
  const [plan, setPlan] = useState<PlanDetails | null>(null);
  const choiceAreaRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const currentStage = invitationStages[currentStageIndex];
  const isLastStage = currentStageIndex === invitationStages.length - 1;

  function handleContinue() {
    setCurrentStageIndex((stageIndex) =>
      Math.min(stageIndex + 1, invitationStages.length - 1),
    );
  }

  return (
    <main className="invitation-page">
      <div aria-hidden="true" className="invitation-backdrop">
        <div className="backdrop-orb backdrop-orb--rose" />
        <div className="backdrop-orb backdrop-orb--cream" />
      </div>

      <div className="invitation-shell">
        <header className="invitation-header">
          {/* <a className="invitation-brand" href="#inicio">
            <span aria-hidden="true" className="brand-spark">✳</span>
            una invitación
          </a> */}
        </header>

        <section
          aria-labelledby="invitation-message"
          className="invitation-card"
          id="inicio"
        >
          {screen === "messages" && (
            <>
              <div className="invitation-copy" key={currentStage.id}>
                <div className="stage-kicker">
                  <h1 className="stage-title" id="invitation-message">
                    <span className="absolute top-10 right-8 z-40 flex size-10 items-center justify-center rounded-full bg-red-100 text-[25px] tracking-tight font-semibold text-[#9e3e5b] border-1 border-[#edc8d4]">
                      {String(currentStageIndex + 1).padStart(2, "0")}
                    </span>
                    <Typewriter
                      key={currentStage.id}
                      text={currentStage.message}
                    />
                  </h1>
                  {/* <span className="stage-label">Un pequeño mensaje</span> */}
                </div>

                {/* <p className="stage-description">
                  Una invitación pequeña, con una pregunta importante.
                </p> */}

                {!isLastStage && (
                  <button
                    className="continue-button"
                    onClick={handleContinue}
                    type="button"
                  >
                    Continuar
                    <span aria-hidden="true" className="continue-arrow">
                      →
                    </span>
                  </button>
                )}

                {isLastStage && (
                  <div className="decision-area">
                    <div className="choice-buttons" ref={choiceAreaRef}>
                      <button
                        className="answer-button answer-button--yes"
                        onClick={() => setScreen("celebration")}
                        ref={yesButtonRef}
                        type="button"
                      >
                        ¡Sí, me apunto! <span aria-hidden="true">😸</span>
                      </button>
                      <EscapingButton
                        areaRef={choiceAreaRef}
                        yesButtonRef={yesButtonRef}
                        stopEscaping={hasDeclined}
                        onSelect={() => setHasDeclined(true)}
                      />
                    </div>
                    <p
                      aria-live="polite"
                      className="decision-feedback"
                      role="status"
                    >
                      {hasDeclined
                        ? "Está bien, gracias por responder con sinceridad."
                        : ""}
                    </p>
                  </div>
                )}

                <div
                  aria-label="Progreso de la invitación"
                  className="stage-progress"
                  role="group"
                >
                  <ol className="stage-progress-list">
                    {invitationStages.map((stage, index) => (
                      <li
                        aria-current={
                          index === currentStageIndex ? "step" : undefined
                        }
                        aria-label={`Mensaje ${index + 1}${index === currentStageIndex ? ", actual" : ""}`}
                        className={`stage-progress-dot${index <= currentStageIndex ? " stage-progress-dot--complete" : ""}`}
                        key={stage.id}
                      />
                    ))}
                  </ol>
                  <span className="stage-progress-count">
                    {currentStageIndex + 1} de {invitationStages.length}
                  </span>
                </div>
              </div>

              <div
                className="invitation-art-panel"
                key={`meme-${currentStage.id}`}
              >
                <CatMeme
                  mood={currentStage.catMood}
                  description={currentStage.catDescription}
                  imageSrc={currentStage.imageSrc}
                />
              </div>
            </>
          )}

          {screen === "celebration" && (
            <CelebrationScreen onContinue={() => setScreen("form")} />
          )}

          {screen === "form" && (
            <DateForm
              onConfirm={(details) => {
                setPlan(details);
                setScreen("confirmation");
              }}
            />
          )}

          {screen === "confirmation" && plan && (
            <ConfirmationScreen plan={plan} />
          )}
        </section>
      </div>
    </main>
  );
}

export default InvitationFlow;
