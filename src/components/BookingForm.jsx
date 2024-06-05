import { z } from "zod";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch }) {
  const [form, setForm] = useState({
    date: "",
    time: "17:00",
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
  }

  return (
    <div className="max-w-2xl p-6 mx-auto -mt-32 bg-white shadow rounded-2xl">
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

        <Button type="submit">Make Your reservation</Button>
      </form>
    </div>
  );
}
