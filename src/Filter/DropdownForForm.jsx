import React, { useEffect } from "react";
import { useState } from "react";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";

const DropdownForForm = () => {
  const [open, setoppen] = useState(false);
  const [datavalue, setdatavalue] = useState("");

  const handleselect = (option) => {
    setdatavalue(option.name);

    setoppen(false);
  };

  useEffect(() => {
    console.log(datavalue);
  }, [datavalue]);

  const data = [
    {
      name: "John",
    },
    {
      name: "Jane",
    },
    {
      name: "Bob",
    },
  ];

  return (
    <div className="w-[200px]">
      <div
        className=" relative w-[100%] rounded px-3 py-2 cursor-pointer bg-slate-400 flex justify-between items-center"
        onClick={() => setoppen(!open)}
      >
        <div>{datavalue ? datavalue : "Select Product"}</div>
        <span>
          <BsCaretDown />
        </span>
        {open && (
          <div
            className=" w-[200px] absolute top-6
        left-0 z-10 mt-4 bg-black text-white
         origin-top-right rounded border-gray-500 shadow-lg"
          >
            <div>
              {data.map((value, index) => {
                return (
                  <div
                    className=" block rounded-lg px-4 py-2 text-sm text-gray-200 cursor-pointer no-underline hover:bg-gray-700 "
                    onClick={() => handleselect(value)}
                    key={index}
                  >
                    {value.name}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* <div className="relative">
          <button
            type="button"
            className=" inline-flex
           h-full justify-center items-center rounded-r-md px-2 text-gray-600
            hover:bg-gray-50 hover:text-gray-700 "
          >
            {" "}
            <BsCaretDown />
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default DropdownForForm;
