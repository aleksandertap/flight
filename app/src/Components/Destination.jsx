import React, { useEffect, useState } from "react";
import FlightDate from "./FlightDate.jsx";
const Destination = () => {
  const [showDate, setShowDate] = useState(false)
  const destinationChangeHandler = (event) => {
    if(event.target.value !== ""){
        setShowDate(true)
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
        <option value="Bahrain">Bahrain</option>
      </select>
      {showDate && <FlightDate/>}
    </div>
  );
};

export default Destination;
