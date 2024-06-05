import { useReducer } from "react";
import BookingForm from "../BookingForm";
import Steps from "../Steps";

export default function BookingPage() {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // this it initial state
  function initializeTimes() {
    return initialState;
  }

  // this is the reducer function
  function updateTimes(state, action) {
    console.log("state?", state, "\naction?", action);
    return initialState;
  }

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div>
      <div className="pt-16 pb-32 bg-primary-green">
        <h1 className="mb-0 leading-none text-center text-title text-primary-yellow">
          Reserve a table
        </h1>
        <div>
          <Steps />
        </div>
      </div>
      <div className="pt-12 pb-24 bg-primary-lightGray">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </div>
  );
}
