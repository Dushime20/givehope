import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Calendar</h2>
      <div className="text-center">
        <p className="text-xl font-bold">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
        <div className="mt-2">
          <Calendar
            onChange={setCurrentDate}
            value={currentDate}
            view="month"
            showWeekNumbers={false} // Optional: Remove week numbers
            tileClassName="text-center"
            className="react-calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
