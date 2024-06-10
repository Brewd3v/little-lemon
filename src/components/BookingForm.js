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
    date: Yup.string().required("Please select a booking date"),
    time: Yup.string().required("Please select a time"),
    guests: Yup.number()
      .required("Please specify how many guests are coming")
      .min(1)
      .max(10),
    occasion: Yup.string(),
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
                name="date"
                dispatch={dispatch}
                data-testid="datepicker"
              />
            </div>
            <p className="mt-2 text-sm text-red-600 text-karla">
              <ErrorMessage name="date" />
            </p>
          </div>

          <div className="w-full">
            <label className="block font-bold font-karla" htmlFor="time">
              What time? (required)
            </label>
            <select
              data-testid="time"
              className="w-full h-12 px-4 mt-2 shadow-lg text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green"
              id="time"
              name="time"
              value={values.time}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
            <br />
            <p className="mt-2 text-sm text-red-600 text-karla">
              {errors.time && touched.time && errors.time}
            </p>
          </div>

          <div className="block w-full">
            <label className="block font-bold font-karla" htmlFor="guests">
              How many guests? (required)
            </label>
            <Field
              data-testid="guests"
              className="w-full h-12 px-4 mt-2 shadow-lg text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green"
              name="guests"
              type="number"
              placeholder="between 1 - 10"
            />
            <p className="mt-2 text-sm text-red-600 text-karla">
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
              >
                <option value="Inside">Inside</option>
                <option value="Outside">Outside</option>
              </select>
            </div>
            <p className="mt-2 text-sm text-red-600 text-karla">
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
              className="w-full px-4 py-3 mt-2 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green"
              name="additional"
              as="textarea"
              rows="4"
              placeholder="eg. one of the guests is in a wheelchair. "
            />
            <p className="mt-2 text-sm text-red-600 text-karla">
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

const FormDatePicker = ({ name = "", dispatch }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  function handleChange(date) {
    dispatch({ type: "DATE_CHANGED", date: date });
    setValue(moment(date).format("MM/DD/YYYY"));
  }

  return (
    <DatePicker
      className="w-full h-12 !pl-12 pr-4 shadow-lg text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green"
      format="DD/MM/YYYY"
      {...field}
      showIcon
      placeholder="Select a date"
      selected={value}
      onChange={(date) => handleChange(date)}
    />
  );
};
