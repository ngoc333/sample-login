import React, { useState } from 'react';

function TimePicker() {
  const [selectedTime, setSelectedTime] = useState('');

  const handleChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto">
      <label htmlFor="timeInput" className="block text-gray-700 font-bold mb-2">
        Select a Time:
      </label>
      <input
        type="time"
        id="timeInput"
        name="timeInput"
        value={selectedTime}
        onChange={handleChange}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        style={{ maxWidth: '100%' }} // Ensure input takes full width on mobile
      />
      {selectedTime && <p className="text-gray-600 mt-2">Selected Time: {selectedTime}</p>}
    </div>
  );
}

export default TimePicker;
