import React from 'react';

function ClockComponent({ index, hours, minutes, onTimeSelect }) {
  const handleHoursChange = (event) => {
    const newHours = parseInt(event.target.value, 10);
    onTimeSelect(index, newHours, minutes);
  };

  const handleMinutesChange = (event) => {
    const newMinutes = parseInt(event.target.value, 10);
    onTimeSelect(index, hours, newMinutes);
  };

  return (
    <div className="clock-container">
      <img src={`${process.env.PUBLIC_URL}/clockImage/시계.png`} alt="Clock" className="clock-image" />
      <div className="time-selectors">
        <label>
          시:
          <input type="number" value={hours} onChange={handleHoursChange} min="0" max="23" />
        </label>
        <label>
          분:
          <input type="number" value={minutes} onChange={handleMinutesChange} min="0" max="59" />
        </label>
      </div>
      <div className="clock-arms">
        <div className="hour-arm" style={{ transform: `rotate(${hours * 30}deg)` }} />
        <div className="minute-arm" style={{ transform: `rotate(${minutes * 6}deg)` }} />
        <div className="second-arm" style={{ transform: `rotate(${0}deg)` }} />
      </div>
    </div>
  );
}

export default ClockComponent;
