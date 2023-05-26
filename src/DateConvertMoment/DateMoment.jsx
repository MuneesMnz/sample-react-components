import moment from 'moment/moment'
import React from 'react'

const DateMoment = () => {
    const dates=['2023-03-13','2023-03-14','2023-03-15','2023-03-16']

    const conDay=[];
    const conMonth=[];
    const conYear=[]; 

    dates.forEach((value)=>{
        conDay.push(moment(value).format("D"))
    })
    dates.forEach((value)=>{
        conMonth.push(moment(value).format("MMMM"))
    })
    dates.forEach((value)=>{
        conYear.push(moment(value).format("YYYY"))
    })

    const date=moment('2023-03-13').format('MMMM D YYYY')
    const day=moment('2023-03-13').format('MMMM')
    console.log(day);

    console.log(conDay);
    console.log(conMonth);
    console.log(conYear);
  return (
    <div>
      {date}
    </div>
  )
}

export default DateMoment
