import "./Calendar.scss";

export default function Calendar() {
  return (
    <div className="calendar-container">
      <div className="calendar">
        <p className="month-year">Tháng 1 năm 2026</p>
        <p className="day">1</p>
        <p className="lunar-calendar">Âm lịch: 13 tháng 11</p>
      </div>
      <div className="fact">
        <p className="fact-content">Nguyên tử chỉ là không gian trống</p>
      </div>
    </div>
  );
}
