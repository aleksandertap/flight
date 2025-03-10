import React, { useState } from 'react'

const FlightDate = ({selectedDate,setSelectedDate}) => {
  const dateChangeHandler = (event) => {
    setSelectedDate(event.target.value)
  }
  return (
    <div>
        <select value={selectedDate} onChange={dateChangeHandler}>
            <option value="">Vali kuupäev</option>
            <option value="24.03.2025">24.03.2025</option>
            <option value="25.03.2025">25.03.2025</option>
            <option value="26.03.2025">26.03.2025</option>
            <option value="27.03.2025">27.03.2025</option>
            <option value="28.03.2025">28.03.2025</option>
            <option value="29.03.2025">29.03.2025</option>
            <option value="30.03.2025">30.03.2025</option>
            <option value="31.03.2025">31.03.2025</option>
            <option value="01.04.2025">01.04.2025</option>
            <option value="02.04.2025">02.04.2025</option>
            <option value="03.04.2025">03.04.2025</option>
            <option value="04.04.2025">04.04.2025</option>
            <option value="05.04.2025">05.04.2025</option>
            <option value="06.04.2025">06.04.2025</option>

        </select>
    </div>
  )
}

export default FlightDate