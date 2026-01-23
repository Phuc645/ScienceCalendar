import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";
import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { LunarCalendar } from "@dqcai/vn-lunar";
import { getSubjectClass } from "./Calendar.utils";

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
  it("should apply correct subject class based on the day", () => {
    const testCases = [
      { day: 1, expectedClass: "math" },
      { day: 2, expectedClass: "physics" },
      { day: 3, expectedClass: "chemistry" },
      { day: 4, expectedClass: "biology" },
      { day: 5, expectedClass: "math" },
      { day: 6, expectedClass: "physics" },
      { day: 7, expectedClass: "chemistry" },
      { day: 8, expectedClass: "biology" },
    ];
    testCases.forEach(({ day, expectedClass }) => {
      const subjectClass = getSubjectClass(day);
      expect(subjectClass).toBe(expectedClass);
    });
  });
});
