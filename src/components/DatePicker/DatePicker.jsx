import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import "./style.css";
import PropTypes from "prop-types";

const DatePickerComponent = ({ minDiff = 30, disableMinDiff = false }) => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Custom input component with ref forwarding
  const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
    <button className="datePicker" onClick={onClick} ref={ref}>
      SELECT DATES
    </button>
  ));

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    if (!disableMinDiff && start) {
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays >= minDiff) {
        setEndDate(end);
      } else {
        alert(
          "Checkout date must be at least ${minDiff} days after check-in date."
        );
      }
    } else {
      setEndDate(end);
    }
  };
  return (
    <DatePicker
      minDate={currentDate}
      onChange={handleChange}
      startDate={startDate}
      endDate={endDate}
      monthsShown={2}
      selectsRange
      shouldCloseOnSelect={false}
      excludeDateIntervals={
        startDate
          ? [{ start: addDays(startDate, 1), end: addDays(startDate, minDiff) }]
          : []
      }
      isClearable
      popperPlacement="bottom-end"
      customInput={<ExampleCustomInput />}
      calendarClassName={
        isDarkMode ? "custom_calander_darkMode" : "custom_calander"
      }
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div
          className={
            isDarkMode ? "calander_header_darkMode" : "calander_header"
          }
        >
          <button
            aria-label="Previous Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
              }
            >
              {"<"}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              }
            >
              {">"}
            </span>
          </button>
        </div>
      )}
    >
      <label
        className={
          isDarkMode
            ? "darkMode_checkbox_label_darkMode"
            : "darkMode_checkbox_label"
        }
      >
        Dark Mode:
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
      </label>
    </DatePicker>
  );
};

DatePickerComponent.propTypes = {
  minDiff: PropTypes.number,
  disableMinDiff: PropTypes.bool,
};

export default DatePickerComponent;
