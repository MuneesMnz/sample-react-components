import React, { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { Calendar } from 'react-modern-calendar-datepicker';
import './calender.scss'

const Calender = () => {
    const preselectedDays = [
        {
          year: 2023,
          month: 3,
          day: 2,
        },
        {
          year: 2023,
          month: 3,
          day: 15,
        },
        {
          year: 2023,
          month: 3,
          day: 30,
        },
      ]
      const [selectedDayRange, setSelectedDayRange] = useState(
        preselectedDays
      );
  return (
    <div>
       
        <Calendar
         value={selectedDayRange}
         calendarClassName="react-calendar"
        shouldHighlightWeekends
        
         />
       
    </div>
  )
}

export default Calender
