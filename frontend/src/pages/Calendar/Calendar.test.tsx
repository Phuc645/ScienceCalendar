import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";
import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { LunarCalendar } from "@dqcai/vn-lunar";

describe("Calendar Page", () => {
  it("should render today date accurately", () => {
    render(<Calendar />);
    const today = LunarCalendar.today();
    const { day, month, year } = today.solarDate;
    const dayElement = screen.getByTestId("day");
    const monthYearElement = screen.getByTestId("month-year");
    expect(dayElement).toBeInTheDocument();
    expect(monthYearElement).toBeInTheDocument();
    expect(dayElement.textContent).toBe(`${day}`);
    expect(monthYearElement.textContent).toBe(`Tháng ${month} năm ${year}`);
  });
});
