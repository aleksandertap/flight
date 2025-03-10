import React, { useEffect, useState } from "react";
import FlightDate from "./FlightDate.jsx";
const Destination = () => {
  const [showDate, setShowDate] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const destinationChangeHandler = (event) => {
    if(event.target.value !== ""){
        setShowDate(true)
        setSelectedDate("")
    }
    else{
        setShowDate(false)
    }
  }
  
  return (
    <div>
      <p>Vali reisikoht</p>
      <select onChange={destinationChangeHandler}>
        <option value="">Vali sihtkoht</option>
        <option value="Amsterdam">Amsterdam</option>
        <option value="Antalya">Antalya</option>
        <option value="Riia">Riia</option>
      </select>
      {showDate && <FlightDate selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>}
    </div>
  );
};

export default Destination;
