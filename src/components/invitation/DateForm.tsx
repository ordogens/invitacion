import { useState, type FormEvent } from "react";
import { foodOptions } from "../../data/planOptions";
import type { PlanDetails } from "../../types/invitation";
import CatMeme from "./CatMeme";

interface DateFormProps {
  onConfirm: (plan: PlanDetails) => void;
}

function DateForm({ onConfirm }: DateFormProps) {
  const [message, setMessage] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [foodError, setFoodError] = useState("");

  function toggleFood(food: string) {
    setFoodError("");
    setSelectedFoods((selected) =>
      selected.includes(food)
        ? selected.filter((item) => item !== food)
        : [...selected, food],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedFoods.length === 0) {
      setFoodError("Marca al menos una opción de comida.");
      return;
    }

    const [date = "", time = ""] = dateTime.split("T");

    onConfirm({
      date,
      time,
      message: message.trim(),
      places: selectedFoods,
    });
  }

  return (
    <>
      <div className="invitation-copy form-copy">
        <div className="stage-kicker">
          <span aria-hidden="true" className="stage-number">
            ✎
          </span>
          <span className="stage-label">Armemos el plan</span>
        </div>
        <h1 className="stage-title form-title" id="invitation-message">
          Elige el día y la hora
        </h1>
        {/* <p className="form-description">Puedes escoger cualquier día del miércoles 4 al domingo 8 de noviembre.</p> */}

        <form className="date-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="meeting-time">
              Fecha y hora
            </label>
            <input
              className="form-control"
              id="meeting-time"
              lang="en-US"
              max="2026-11-08T23:59"
              min="2026-11-04T00:00"
              name="meeting-time"
              onChange={(event) => setDateTime(event.target.value)}
              required
              type="datetime-local"
              value={dateTime}
            />
          </div>
          <fieldset
            aria-describedby={foodError ? "food-error" : undefined}
            className="food-fieldset"
          >
            <legend className="food-legend">¿Qué te gustaría comer?</legend>
            <div className="food-options">
              {foodOptions.map((food) => (
                <label
                  className={`food-option${selectedFoods.includes(food) ? " food-option--selected" : ""}`}
                  key={food}
                >
                  <input
                    checked={selectedFoods.includes(food)}
                    className="food-checkbox"
                    onChange={() => toggleFood(food)}
                    type="checkbox"
                    value={food}
                  />
                  <span className="food-checkmark" aria-hidden="true">
                    ✓
                  </span>
                  <span className="food-option-label">{food}</span>
                </label>
              ))}
            </div>
            {foodError && (
              <span className="form-error" id="food-error" role="alert">
                {foodError}
              </span>
            )}
          </fieldset>

          <div className="form-field">
            <label className="form-label" htmlFor="message">
              Mensaje opcional
            </label>
            <textarea
              className="form-control form-control--textarea"
              id="message"
              maxLength={240}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="¿Algo que quieras agregar?"
              rows={2}
              value={message}
            />
          </div>

          <button className="continue-button date-form-submit" type="submit">
            Confirmar el plan 😸
          </button>
        </form>
      </div>
      <div className="invitation-art-panel">
        <CatMeme
          mood="curious"
          description="Gatito verde con hojas, como en un meme de fotosíntesis"
          imageSrc="/images/fotosintesis.jpeg"
        />
      </div>
    </>
  );
}

export default DateForm;
