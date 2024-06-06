import { render, screen } from "@testing-library/react";

import BookingPage, {
  initializeTimes,
  initialState,
  updateTimes,
} from "./components/pages/BookingPage";

test("Renders the BookingForm", () => {
  render(<BookingPage />);

  const firstFieldLabel = screen.getByText("Choose time");
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
