import { useReducer, useState } from "react";
import BookingForm from "../BookingForm";
import Steps from "../Steps";
import { fetchAPI } from "../../lib/api";
import CreateAccount from "../CreateAccount";

// this it initial state
export function initializeTimes() {
  return fetchAPI(new Date());
}

// this is the reducer function
export function updateTimes(state, action) {
  // console.log("state?", state, "\naction?", action);
  return fetchAPI(new Date(action?.date));
}

export default function BookingPage() {
  const [step, setStep] = useState(2);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div>
      <div className="pt-16 pb-32 bg-primary-green">
        <h1 className="mb-0 leading-none text-center text-title text-primary-yellow">
          {step === 1
            ? "Reserve a table"
            : step === 2
            ? "Create an account"
            : step === 3
            ? "Success!"
            : "Account Login"}
        </h1>
        <div className="mt-6">
          <Steps step={step} setStep={setStep} />
        </div>
      </div>

      <div className="pt-12 pb-24 bg-primary-lightGray">
        <div className="max-w-lg p-6 mx-auto -mt-32 bg-white rounded-xl">
          {step === 1 && (
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              setCurrentStep={setStep}
            />
          )}
          {step === 2 && <CreateAccount setCurrentStep={setStep} />}
        </div>
      </div>
    </div>
  );
}
