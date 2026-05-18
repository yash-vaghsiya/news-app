import React from "react";
import "./DateFilter.css";

const DateFilter = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="date-filter">
      <label>Select News Date:</label>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) =>
          setSelectedDate(e.target.value)
        }
      />
    </div>
  );
};

export default DateFilter;