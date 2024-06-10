import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import moment from "moment";

import BookingPage, {
  initializeTimes,
  initialState,
  updateTimes,
} from "./components/pages/BookingPage";

test("Renders the BookingForm", () => {
  render(<BookingPage />);

  const firstFieldLabel = screen.getByText("What time? (required)");
  expect(firstFieldLabel).toBeInTheDocument();
});

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

test("form validation", async () => {
  render(<BookingPage />); // Assuming BookingPage renders the BookingForm

  const handleSubmit = jest.fn();
  const button = screen.getByTestId("submit");

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

  // Submit form
  fireEvent.click(button);

  await waitFor(() => {
    expect(
      screen.queryByText(/Please select a booking date/)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Please select a time/)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Please specify how many guests are coming/)
    ).not.toBeInTheDocument();
  });
});
