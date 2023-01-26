import React from 'react';

// import s from './DateInfo.module.scss';

const DateInfo = ({ dateInfo }) => {
  let date, year, month, day, hours, minutes, seconds;

  if (dateInfo) {
    date = new Date(dateInfo);
  }
  if (!dateInfo) {
    date = new Date();
  }
  year = date.getFullYear().toString().padStart(2, 0);
  month = (date.getMonth() + 1).toString().padStart(2, 0);
  day = date.getDate().toString().padStart(2, 0);
  hours = date.getHours().toString().padStart(2, 0);
  minutes = date.getMinutes().toString().padStart(2, 0);
  seconds = date.getSeconds().toString().padStart(2, 0);

  return (
    <div>
      <span>{dateInfo ? `${day}.${month}.${year}` : `00.00.0000`}</span> <span>{dateInfo ? `(${hours}:${minutes}:${seconds})` : `(00:00:00)`}</span>
    </div>
  );
};

export default DateInfo;
