// Datepicker.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ deadline, setDeadline }) => {
  // Function to format date as dd/mm/yy
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(2);
    return `${day}/${month}/${year}`;
  };

  return (
    <DatePicker
      selected={deadline}
      onChange={(date) => setDeadline(date)}
      dateFormat="dd/MM/yy"
      className="p-2 bg-deep tracking-wide"
      value={formatDate(deadline)} // Set the formatted value
    />
  );
};

export default Datepicker;
