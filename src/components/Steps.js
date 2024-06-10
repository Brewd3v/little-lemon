import StepCheckIcon from "./icons/StepCheck";

export default function Steps({ step, setStep }) {
  function handleStepChange(selectedStep) {
    if (step > selectedStep) {
      setStep(selectedStep);
    }
  }
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className={`${
          step >= 1 && "bg-primary-lightGray !text-primary-green"
        } flex items-center justify-center w-8 h-8 border-2 rounded-full text-cardtitle text-primary-lightGray`}
        onClick={() => handleStepChange(1)}
        disabled={step <= 1}
      >
        {step > 1 ? <StepCheckIcon /> : "1"}
      </button>
      <span className="h-[2px] bg-primary-lightGray w-6"></span>
      <button
        type="button"
        className={`${
          step >= 2 && "bg-primary-lightGray !text-primary-green"
        } flex items-center justify-center w-8 h-8 border-2 rounded-full text-cardtitle text-primary-lightGray`}
        onClick={() => handleStepChange(2)}
        disabled={step <= 2}
      >
        {step > 2 ? <StepCheckIcon /> : "2"}
      </button>
      <span className="h-[2px] bg-primary-lightGray w-6"></span>
      <button
        type="button"
        className={`${
          step >= 3 && "bg-primary-lightGray !text-primary-green"
        } flex items-center justify-center w-8 h-8 border-2 rounded-full text-cardtitle text-primary-lightGray`}
        onClick={() => handleStepChange(3)}
        disabled={true}
      >
        {step > 3 ? <StepCheckIcon /> : "3"}
      </button>
    </div>
  );
}
