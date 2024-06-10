import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import OccasionIcon from "./icons/Occasion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { submitAPI } from "../lib/api";
import moment from "moment";

export default function BookingForm({
  availableTimes,
  dispatch,
  setCurrentStep,
}) {
  const validationSchema = Yup.object({
    date: Yup.string()
      .required("Please select a booking date")
      .test(
        "dates-test",
        "Booking date should be in the future",
        (value, context) => {
          let today = moment().format("MM/DD/YYYY");
          let givenDate = moment(value).format("MM/DD/YYYY");
          return givenDate >= today;
        }
      ),
    time: Yup.string().required("Please select a time"),
    guests: Yup.number()
      .required("Please specify how many guests are coming")
      .min(1)
      .max(10),
    occasion: Yup.string(),
    additional: Yup.string().max(100, "Comment must be at most 100 characters"),
  });

  async function handleSubmit(values) {
    const res = await submitAPI(values);
    if (res) {
      console.log(values);
      setCurrentStep(2);
    }
  }

  return (
    <Formik
      initialValues={{
        date: new Date(),
        time: "17:00",
        guests: "2",
        seated: "Inside",
        occasion: "Birthday",
        additional: "One person is in a wheelchair",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleBlur, handleChange, errors, touched }) => (
        <Form className="flex flex-col space-y-4">
          <div className="w-full">
            <label className="block font-bold font-karla" htmlFor="date">
              When are you booking for? (required)
            </label>
            <div className="mt-2">
              <FormDatePicker
                className={`
                ${errors.date && touched.date && "!border-red-600"}
                border-2 border-transparent !pl-12 w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
                name="date"
                dispatch={dispatch}
                aria-invalid={errors.date && touched.date}
                aria-describedby={errors.date && touched.date && "dateErrors"}
              />
            </div>
            <p id="dateErrors" className="mt-2 text-sm text-red-600 text-karla">
              <ErrorMessage name="date" />
            </p>
          </div>

          <div className="w-full">
            <label className="block font-bold font-karla" htmlFor="time">
              What time? (required)
            </label>
            <select
              data-testid="time"
              className={`
                ${errors.expiryDate && touched.expiryDate && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              id="time"
              name="time"
              value={values.time}
              onBlur={handleBlur}
              onChange={handleChange}
              aria-invalid={errors.time && touched.time}
              aria-describedby={errors.time && touched.time && "timeError"}
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
            <br />
            <p id="timeError" className="mt-2 text-sm text-red-600 text-karla">
              {errors.time && touched.time && errors.time}
            </p>
          </div>

          <div className="block w-full">
            <label className="block font-bold font-karla" htmlFor="guests">
              How many guests? (required)
            </label>
            <Field
              data-testid="guests"
              className={`
                ${errors.date && touched.date && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="guests"
              type="number"
              placeholder="between 1 - 10"
              aria-invalid={errors.guests && touched.guests}
              aria-describedby={
                errors.guests && touched.guests && "guestsErrors"
              }
            />
            <p
              id="guestsErrors"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              <ErrorMessage name="guests" />
            </p>
          </div>

          <div>
            <label className="block font-bold font-karla" htmlFor="seated">
              Where would you like to be seated? (required)
            </label>
            <div className="relative w-full mt-2">
              <select
                data-testid="seated"
                className={`${
                  values.seated !== "" ? "text-primary-lightGray active" : ""
                } font-semibold duration-150 ease-in-out w-full h-12 px-4 text-center shadow-lg text-p rounded-xl focus:border-primary-green focus:outline-primary-green`}
                id="seated"
                name="seated"
                value={values.seated}
                onBlur={handleBlur}
                onChange={handleChange}
                aria-invalid={errors.seated && touched.seated}
                aria-describedby={
                  errors.seated && touched.seated && "seatedErrors"
                }
              >
                <option value="Inside">Inside</option>
                <option value="Outside">Outside</option>
              </select>
            </div>
            <p
              id="seatedErrors"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              {errors.seated && touched.seated && errors.seated}
            </p>
          </div>

          <div>
            <label className="block font-bold font-karla" htmlFor="occasion">
              Is it a special occasion? (optional)
            </label>
            <div className="relative w-full mt-2">
              <OccasionIcon className="absolute w-auto h-6 -translate-y-1/2 left-3 top-1/2 text-primary-green" />
              <select
                data-testid="occasion"
                className={`${
                  values.occasion !== "" ? "text-primary-lightGray active" : ""
                } font-semibold duration-150 ease-in-out w-full h-12 px-4 text-center shadow-lg text-p rounded-xl focus:border-primary-green focus:outline-primary-green`}
                id="occasion"
                name="occasion"
                value={values.occasion}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                <option value="">Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            <p className="mt-2 text-sm text-red-600 text-karla">
              {errors.occasion && touched.occasion && errors.occasion}
            </p>
          </div>

          <div className="block w-full">
            <label className="block font-bold font-karla" htmlFor="additional">
              Additional information (optional)
            </label>
            <Field
              data-testid="additional"
              className={`
                ${errors.additional && touched.additional && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="additional"
              as="textarea"
              rows="4"
              placeholder="eg. one of the guests is in a wheelchair."
              aria-invalid={errors.additional && touched.additional}
              aria-describedby={
                errors.additional && touched.additional && "additionalErrors"
              }
            />
            <p
              id="additionalErrors"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              <ErrorMessage name="additional" />
            </p>
          </div>

          <button
            className="py-3 mt-8 text-base font-bold duration-150 ease-in-out rounded-xl font-karla bg-primary-yellow hover:bg-primary-coral text-primary-green focus:outline-primary-green"
            type="submit"
            data-testid="submit"
          >
            Submit and continue to contact details
          </button>
        </Form>
      )}
    </Formik>
  );
}

const FormDatePicker = ({ name = "", dispatch, className }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  function handleChange(date) {
    dispatch({ type: "DATE_CHANGED", date: date });
    setValue(moment(date).format("MM/DD/YYYY"));
  }

  return (
    <DatePicker
      className={className}
      format="DD/MM/YYYY"
      {...field}
      showIcon
      placeholder="Select a date"
      selected={value}
      onChange={(date) => handleChange(date)}
    />
  );
};
