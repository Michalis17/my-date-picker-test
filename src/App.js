import React from "react";
import './App.css'
import DatePickerComponent from "./components/DatePicker/DatePicker";

function App() {
  return (
    <div className="App">
      <h1>DatePicker Component</h1>
      <DatePickerComponent minDiff={30} disableMinDiff={false} darkMode  />
    </div>
  );
}

export default App;