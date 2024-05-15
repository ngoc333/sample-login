import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="max-w-md mx-auto">
      <label htmlFor="datePicker" className="block text-gray-700 font-bold mb-2">
        Select a Date:
      </label>
      <DatePicker
        id="datePicker"
        selected={selectedDate}
        onChange={handleDateChange}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {selectedDate && <p className="text-gray-600 mt-2">Selected Date: {selectedDate.toDateString()}</p>}
    </div>
  );
}

export default DatePickerComponent;
