import "./Calendar.scss";
import { LunarCalendar } from "@dqcai/vn-lunar";
import { getSubjectClass } from "./Calendar.utils";

export default function Calendar() {
  const today = LunarCalendar.today();
  const { day, month, year } = today.solarDate;

  const subjectClass = getSubjectClass(day);

  return (
    <div className={`calendar-container ${subjectClass}`}>
      <div className="calendar">
        <p className="month-year" data-testid="month-year">
          Tháng {month} năm {year}
        </p>
        <p className="day" data-testid="day">
          {day}
        </p>
        <p className="lunar-calendar">
          Âm lịch: {today.formatLunar()} ({today.yearCanChi})
        </p>
      </div>
      <div className="fact">
        <p className="fact-content">Nguyên tử chỉ là không gian trống</p>
      </div>
    </div>
  );
}
