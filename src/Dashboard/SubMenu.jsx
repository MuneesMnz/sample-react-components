import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const SubMenu = ({ data }) => {
    const [dropdown,setdropdown]=useState(false)
  return (
    <>
      <li className="link"  onClick={()=>setdropdown(!dropdown)}>
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown className={`${dropdown && 'rotate-180 '} duration-200`} />
      </li>
      <motion.ul 
      animate={
        dropdown ? {
            height:"fit-content"
        }:{
            height :0
        }
      }
      className="flex flex-col pl-14 text-[13px] font-normal overflow-hidden h-0">
        {data.menus.map((menu) => {
          return (
            <li key={menu} >
              <div className="link !bg-transparent capitalize">{menu}</div>
            </li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default SubMenu;
