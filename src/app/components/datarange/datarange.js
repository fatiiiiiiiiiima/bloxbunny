"use client"
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import './globals.css'; // Assuming you're using CSS modules
import { FaCalendarAlt } from 'react-icons/fa'; // Assuming you're using react-icons

const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      onDateChange(formatDate(startDate), formatDate(endDate));
    }
  }, [startDate, endDate, onDateChange]);

  const handleDateChange = (dates) => {
    const [newStartDate, newEndDate] = dates;
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  const toggleDatePicker = () => {
    setShowDatePicker((prevShowDatePicker) => !prevShowDatePicker);
  };

  // Function to format date to 'yyyy-mm-dd' format
  const formatDate = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="dateRangePicker">
      <div className="inputContainer">
        <button onClick={toggleDatePicker}>
          <FaCalendarAlt /> <span>Select Date</span>
        </button>
        {showDatePicker && (
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;
