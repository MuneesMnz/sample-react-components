import React, { useState } from "react";
import { BsCaretDown ,BsCaretUp} from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import FilterData from "../Filter/FilterData";

const Dropdown = () => {
  const [inpValue, setInpValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open,setOpen]=useState(false)
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
    // {
    //   name: "Rice",
    // },
    // {
    //   name: "Household",
    // },
    // {
    //   name: "Drinks",
    // },
  ];
  return (
    <div className="w-72 font-medium h-80" >
      <div onClick={()=>setOpen(!open)} className={`bg-[#D2E9E9] w-full p-2 flex items-end justify-between rounded ${!selected && 'text-gray-700'}` }
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Category"}
       {open ?   <BsCaretUp size={20} />:<BsCaretDown size={20} /> }
      </div>
      <ul className={`bg-[gray] mt-2  overflow-y-auto ${open ? 'max-h-40' : 'max-h-0'} `} >
        <div className="flex items-center sticky top-0 bg-white">
          <AiOutlineSearch size={20} className="text-gray-500" />
          <input
            type="text"
            value={inpValue}
            placeholder="Enter Category"
            onChange={(e) => setInpValue(e.target.value.toUpperCase())}
            className="placeholder:text-gray-700 p-2 outline-none w-full"
          />
        </div>

        {data.map((value, index) => {
          return (
            <li
              key={index}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer ${
                value?.name?.toUpperCase().startsWith(inpValue)
                  ? "block"
                  : "hidden"
              }`}
              onClick={() => {
                if (value?.name?.toUpperCase() !== selected.toUpperCase()) {
                  setSelected(value?.name);
                  setOpen(false)
                }
              }}
            >
              {value.name}
            </li>
          );
        })}
      </ul>
      <FilterData filtvalue={selected} />
    </div>
  );
};

export default Dropdown;
