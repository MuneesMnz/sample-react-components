import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const abc = (e) => {
    e.preventDefault();
    const d = {
      start: moment(startDate).format("MMMM D YYYY"),
      end: endDate,
    };
    console.log(d);
  };

  return (
    <div className="w-full p-5">
      <form onSubmit={(e) => abc(e)}>
        <div className="flex gap-10 mb-7 items-center">
          <div className="flex flex-col flex-1 ">
            <label className="text-xl text-gray-600">Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy/MM/dd"
              className="border-[1px] rounded outline-none w-full px-3 py-3 text-md bg-slate-50 shadow-inner"
              minDate={new Date()}
            />
            {/* <input type='date'  className='border-2 rounded outline-none'  /> */}
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-xl text-gray-600">Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy/MM/dd"
              className="border-2 rounded outline-none w-full"
              minDate={startDate}
            />
          </div>
        </div>
        <div className="flex gap-10 items-center  mb-7 " >
          <div className="flex flex-col flex-1 ">
            <label className="text-xl text-gray-600">select</label>
            <select className="border-[1px] rounded outline-none w-full px-3 py-3 text-md bg-slate-50 shadow-inner" >
              <option selected>Choose a country</option>
              <option className="py-2" value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {/* <input type='date'  className='border-2 rounded outline-none'  /> */}
          </div>
          <div className="   flex-1">
            
            <input id="default-radio-1" type="checkbox" value="" name="default-radio" className="mr-2" />
            <label className="text-xl text-gray-600">Date</label>
          </div>
        </div>
        <div className="flex gap-10 items-center " >
            <textarea rows='2' className="border-[1px] rounded outline-none w-full px-3 py-3 text-md bg-slate-50 shadow-inner" >

            </textarea>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
