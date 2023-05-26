import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineClose } from "react-icons/ai";
const CustomDropdown = (props) => {
  const { options, placeholder, onChange, selectedKey, keys ,values} = props;
  const [inputValue, setInputValue] = useState("");
  const [open,setopen]=useState(false)
  const ref = useRef();
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onItemSelected = (option) => {
    onChange !== undefined && onChange(option[`${keys}`]);
    onChange !== undefined && setInputValue(option[`${values}`]);
    setopen(false);
  };
  const border = "1px solid #d3d3d3";

  const cleardropDown = () => {
    setInputValue("");
    onChange("");
  };

  const onInputClick = () => {
    setopen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setopen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  useEffect(() => {
    if (!open && options.findIndex((opt) => opt.value === inputValue) === -1) {
      if (!inputValue) {
        onChange("");
      } 
    }
  }, [inputValue, onChange, open, options, selectedKey]);

  useEffect(() => {
    if (selectedKey) {
      setInputValue(options.find((opt) => opt[`${keys}`] === selectedKey)[`${values}`]);
    }
  }, [selectedKey, options]);

  return (
    <div className="w-[250px] relative">
      <div className=" relative w-full " onClick={onInputClick} ref={ref}>
        <input
          className="w-full p-0 border-[1px] outline-none h-9 pl-3 box-border"
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={onInputChange}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 -mt-1 ">
          <AiOutlineArrowDown />
        </div>
        {selectedKey || inputValue ? (
          <div
            onClick={cleardropDown}
            className="absolute right-8 cursor-pointer top-1/2 -translate-y-1/2 -mt-1 "
          >
            <AiOutlineClose />
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`box-border absolute rounded shadow w-full max-h-[100px] overflow-y-scroll ${open ? "block" : "hidden"} `}
        style={{ border: border, borderBottom: "none" }}
      >
        {options
          .filter((item) => {
            const searchItem = inputValue.toLocaleLowerCase();
            const v = item[`${values}`].toLocaleLowerCase();
            if (!searchItem) return true;
            return v.startsWith(searchItem);
          })
          .map((opt, ind) => {
            return (
              <div
                key={ind}
                onClick={() => onItemSelected(opt)}
                style={{ borderBottom: border }}
                className="h-9 border-b-[1px solid black] flex items-center pl-3 cursor-pointer bg-white
              hover:bg-slate-400
              "
              >
                {opt[`${values}`]}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CustomDropdown;
