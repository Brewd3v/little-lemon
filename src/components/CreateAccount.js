import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { submitAPI } from "../lib/api";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your first name"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your last name"),
  number: Yup.string().required("Please enter your number"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8, "Your password needs to be at least 8 charaters")
    .required("Your password needs to be at least 8 charaters"),
  accountHolder: Yup.string().required("Enter your account holder name"),
  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "Invalid CVV")
    .required("CVV is required"),
  cardNumber: Yup.string().min(16).max(19).required("Card number is required"),
  expiryDate: Yup.string()
    .required("Expiry date is required MM/YY")
    .test("valid-month", "Invalid month", function (value) {
      if (!value) {
        return false;
      }

      const [month] = value.split("/").map((item) => parseInt(item, 10));

      return month >= 1 && month <= 12;
    })
    .test(
      "is-future-date",
      "Expiry date must be in the future MM/YY",
      function (value) {
        if (!value) {
          return false;
        }

        const currentDate = new Date();
        const [month, year] = value
          .split("/")
          .map((item) => parseInt(item, 10));

        // Adding 1 to the month because JavaScript months are zero-indexed
        const expiryDate = new Date(year + 2000, month, 1);

        return expiryDate > currentDate;
      }
    ),
});

export default function CreateAccount({ setCurrentStep }) {
  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiryDate = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Limit to four numeric characters
    const formattedValue = numericValue.slice(0, 4);

    // Add the '/' separator after the first two characters
    if (formattedValue.length > 2) {
      return formattedValue.slice(0, 2) + " / " + formattedValue.slice(2);
    } else {
      return formattedValue;
    }
  };

  async function handleSubmit(values) {
    const res = await submitAPI(values);
    if (res) {
      console.log(values);
      setCurrentStep(3);
    }
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        password: "",
        accountHolder: "",
        cardNumber: "",
        cvv: "",
        expiryDate: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleBlur, handleChange, errors, touched }) => (
        <Form className="flex flex-col space-y-4">
          <h2 className="block mb-0 text-sectiontitle font-karla">
            Contact details:
          </h2>

          <div className="block w-full">
            <Field
              data-testid="firstName"
              className={`
                ${errors.firstName && touched.firstName && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="firstName"
              placeholder="First name"
              aria-invalid={errors.firstName && touched.firstName}
              aria-describedby={
                errors.firstName && touched.firstName && "firstNameError"
              }
            />
            <p
              id="firstNameError"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              <ErrorMessage name="firstName" />
            </p>
          </div>

          <div className="block w-full">
            <Field
              data-testid="lastName"
              className={`
                ${errors.lastName && touched.lastName && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="lastName"
              placeholder="Last name"
              aria-invalid={errors.lastName && touched.lastName}
              aria-describedby={
                errors.lastName && touched.lastName && "lastNameError"
              }
            />
            <p
              id="lastNameError"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              <ErrorMessage name="lastName" />
            </p>
          </div>

          <div className="block w-full">
            <Field
              data-testid="number"
              className={`
                ${errors.number && touched.number && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="number"
              placeholder="Contact number"
              aria-invalid={errors.number && touched.number}
              aria-describedby={
                errors.number && touched.number && "numberError"
              }
            />
            <p
              id="numberError"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              <ErrorMessage name="number" />
            </p>
          </div>

          <h2 className="block mb-0 text-sectiontitle font-karla">
            Account and Payment details:
          </h2>

          <div className="block w-full">
            <Field
              data-testid="email"
              className={`
                ${errors.email && touched.email && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="email"
              type="email"
              placeholder="Email"
              aria-invalid={errors.email && touched.email}
              aria-describedby={errors.email && touched.email && "emailError"}
            />
            <p id="emailError" className="mt-2 text-sm text-red-600 text-karla">
              <ErrorMessage name="email" />
            </p>
          </div>

          <div className="block w-full">
            <Field
              data-testid="password"
              className={`
                ${errors.password && touched.password && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="password"
              type="password"
              placeholder="Password"
              aria-invalid={errors.password && touched.password}
              aria-describedby={
                errors.password && touched.password && "passwordError"
              }
            />
            <p
              id="passwordError"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              <ErrorMessage name="password" />
            </p>
          </div>

          <div className="block w-full pt-4">
            <Field
              data-testid="accountHolder"
              className={`
                ${
                  errors.accountHolder &&
                  touched.accountHolder &&
                  "!border-red-600"
                }
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="accountHolder"
              type="accountHolder"
              placeholder="Account holder (name on card)"
              aria-invalid={errors.accountHolder && touched.accountHolder}
              aria-describedby={
                errors.accountHolder &&
                touched.accountHolder &&
                "accountHolderError"
              }
            />
            <p
              id="accountHolderError"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              <ErrorMessage name="accountHolder" />
            </p>
          </div>

          <div className="block w-full">
            <Field
              data-testid="cardNumber"
              className={`
                ${errors.cardNumber && touched.cardNumber && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
              name="cardNumber"
              type="cardNumber"
              placeholder="Card number"
              value={formatCardNumber(values.cardNumber)}
              onChange={(e) => {
                e.target.value = formatCardNumber(e.target.value);
                handleChange(e);
              }}
              maxLength={19}
              aria-invalid={errors.cardNumber && touched.cardNumber}
              aria-describedby={
                errors.cardNumber && touched.cardNumber && "cardNumberError"
              }
            />
            <p
              id="cardNumberError"
              className="mt-2 text-sm text-red-600 text-karla"
            >
              <ErrorMessage name="cardNumber" />
            </p>
          </div>

          <div className="flex gap-4 pb-6">
            <div className="w-1/2">
              <Field
                data-testid="expiryDate"
                className={`
                ${errors.expiryDate && touched.expiryDate && "!border-red-600"}
                border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
                name="expiryDate"
                type="expiryDate"
                placeholder="Expiry date eg. MM/YY"
                value={formatExpiryDate(values.expiryDate)}
                onChange={(e) => {
                  e.target.value = formatExpiryDate(e.target.value);
                  handleChange(e);
                }}
                aria-invalid={errors.expiryDate && touched.expiryDate}
                aria-describedby={
                  errors.expiryDate && touched.expiryDate && "expiryDateError"
                }
              />
              <p id="expiryDateError" className="mt-2 text-sm text-red-600 text-karla">
                <ErrorMessage name="expiryDate" />
              </p>
            </div>

            <div className="w-1/2">
              <div className="relative">
                <img
                  className="absolute -translate-y-1/2 right-1 top-1/2"
                  src="http://localhost:3000/cvv.svg"
                  alt="cvv icon"
                />{" "}
                <Field
                  data-testid="cvv"
                  className={`
                    ${errors.cvv && touched.cvv && "!border-red-600"}
                    border-2 border-transparent w-full px-4 py-3 shadow-lg min-h-12 text-p bg-primary-lightGray rounded-xl focus:border-primary-green focus:outline-primary-green`}
                  name="cvv"
                  type="cvv"
                  placeholder="CVV"
                  aria-invalid={errors.cvv && touched.cvv}
                  aria-describedby={
                    errors.cvv && touched.cvv && "cvvError"
                  }
                />
              </div>

              <div className="flex justify-between mt-3">
                <p id="cvvError" className="text-sm text-red-600 text-karla">
                  <ErrorMessage name="cvv" />
                </p>
                <img
                  className="h-5"
                  src="http://localhost:3000/cards.svg"
                  alt="card icons"
                />
              </div>
            </div>
          </div>

          <button
            className="py-3 text-base font-bold duration-150 ease-in-out rounded-xl font-karla bg-primary-yellow hover:bg-primary-coral text-primary-green focus:outline-primary-green"
            type="submit"
            data-testid="submit"
          >
            Confirm booking and create account
          </button>
        </Form>
      )}
    </Formik>
  );
}
