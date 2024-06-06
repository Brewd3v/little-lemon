import { useState } from "react";
import ConfirmedBooking from "./ConfirmedBooking";

export default function BookingForm({ availableTimes, dispatch }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    date: new Date(),
    time: "",
    guests: "1",
    occasion: "",
  });

  // Update values on change
  function handleChange(e) {
    e.preventDefault();

    // if the date changed dispatch to availableTimes reducer
    if (e.target.name === "date") {
      dispatch({ type: "DATE_CHANGED", date: e.target.value });
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    // submitAPI(form);
    let res = true;

    if (res) {
      setStep(2);
    }
  }

  return (
    <div className="max-w-2xl p-6 mx-auto -mt-32 bg-white shadow rounded-2xl">
      {step === 1 && (
        <form onSubmit={handleSubmit} className="grid max-w-[200px] gap-[20px]">
          <fieldset>
            <label htmlFor="res-date">Choose date</label>
            <input
              className="h-12 px-4 text-base shadow-lg bg-primary-lightGray rounded-xl"
              type="date"
              id="res-date"
              name="date"
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label className="block" htmlFor="res-time">
              Choose time
            </label>
            <select
              className="h-12 px-4 text-base shadow-lg bg-primary-lightGray rounded-xl"
              id="res-time"
              name="time"
              onChange={handleChange}
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="guests">Number of guests</label>
            <input
              className="h-12 px-4 text-base shadow-lg bg-primary-lightGray rounded-xl"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="occasion">Occasion</label>
            <select
              className="h-12 px-4 text-base shadow-lg bg-primary-lightGray rounded-xl"
              id="occasion"
              name="occasion"
              onChange={handleChange}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </fieldset>

          <button type="submit">Make Your reservation</button>
        </form>
      )}
      {step === 2 && <ConfirmedBooking />}
    </div>
  );
}
