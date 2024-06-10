import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import moment from "moment";
import CreateAccount from "./components/CreateAccount";
import { submitAPI } from "./lib/api";
import {
  initializeTimes,
  updateTimes,
} from "./components/pages/BookingPage";

import BookingForm from "./components/BookingForm";

test("initializeTimes function", () => {
  const result = initializeTimes();
  expect(result.length).toBeGreaterThan(1);
});

test("updateTimes function", () => {
  const result = updateTimes([], {
    type: "DATE_UPDATED",
    date: "2024-06-15",
  });

  expect(result.length).toBeGreaterThan(1);
});

test('render and validates BookingForm', async () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const dispatch = jest.fn();
  const setCurrentStep = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} setCurrentStep={setCurrentStep} />);

  const button = screen.getByTestId('submit');

  // Date input
  const date = moment().format("MM/DD/YYYY");
  const dateInputNode = screen.getByDisplayValue(date);
  fireEvent.change(dateInputNode, { target: { value: date } });
  expect(dateInputNode.value).toBe(date);

  // Time input
  const timeInputNode = screen.getByTestId("time");
  fireEvent.change(timeInputNode, { target: { value: "17:00" } });
  expect(timeInputNode.value).toBe("17:00");

  // Guests input
  const guestsInputNode = screen.getByTestId("guests");
  fireEvent.change(guestsInputNode, { target: { value: "2" } });
  expect(guestsInputNode.value).toBe("2");

  // Occasion input
  const occasionInputNode = screen.getByTestId("occasion");
  fireEvent.change(occasionInputNode, { target: { value: "Birthday" } });
  expect(occasionInputNode.value).toBe("Birthday");

  // Additional information input
  const additionalInputNode = screen.getByTestId("additional");
  fireEvent.change(additionalInputNode, { target: { value: "One person is in a wheelchair" } });
  expect(additionalInputNode.value).toBe("One person is in a wheelchair");

  // Submit form
  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.queryByText(/Please select a booking date/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Please select a time/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Please specify how many guests are coming/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Comment must be at most 100 characters/)).not.toBeInTheDocument();
  });

  expect(setCurrentStep).toHaveBeenCalledWith(2);
});




test("render and validates CreateAccount form", async () => {
  const setCurrentStep = jest.fn();

  render(<CreateAccount setCurrentStep={setCurrentStep} />);

  const submitButton = screen.getByTestId("submit");

  // Fill in the form fields
  fireEvent.change(screen.getByTestId("firstName"), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByTestId("lastName"), {
    target: { value: "Doe" },
  });
  fireEvent.change(screen.getByTestId("number"), {
    target: { value: "1234567890" },
  });
  fireEvent.change(screen.getByTestId("email"), {
    target: { value: "john.doe@example.com" },
  });
  fireEvent.change(screen.getByTestId("password"), {
    target: { value: "password123" },
  });
  fireEvent.change(screen.getByTestId("accountHolder"), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByTestId("cardNumber"), {
    target: { value: "4111111111111111" },
  });
  fireEvent.change(screen.getByTestId("expiryDate"), {
    target: { value: "12/30" },
  });
  fireEvent.change(screen.getByTestId("cvv"), {
    target: { value: "123" },
  });

  // Submit the form
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.queryByText(/Please enter your first name/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Please enter your last name/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Please enter your number/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Please enter your email/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Your password needs to be at least 8 charaters/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Enter your account holder name/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Card number is required/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Expiry date is required MM\/YY/)).not.toBeInTheDocument();
    expect(screen.queryByText(/CVV is required/)).not.toBeInTheDocument();
  });

  expect(setCurrentStep).toHaveBeenCalledWith(3);
});
