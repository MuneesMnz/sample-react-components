import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import SubMenu from "./SubMenu";
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebar_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

  const subMenusList = [
    {
      name: "build",
      icon: RiBuilding3Line,
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  const [open, setOpen] = useState(true);
  return (
    <div>
      <motion.div
        variants={sidebar_animation}
        animate={open ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden mg:relative fixed"
      >
        <div className="text-xl flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3 ">
          Logo <span className="text-lg whitespace-pre"></span>
        </div>
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[15px] py-5 flex flex-col gap-1 font-medium overflow-x-hidden font-Montserrat scrollbar-thin scrollbar-track-white h-[80%] max-h-[78%]">
            <li>
              <div className={"link"}>
                <AiOutlineAppstore size={23} className=" min-w-max" />
                All Apps
              </div>
            </li>
            <li>
              <div className={"link"}>
                <BsPerson size={23} className=" min-w-max" />
                Authentication
              </div>
            </li>
            <li>
              <div className={"link"}>
                <HiOutlineDatabase size={23} className=" min-w-max" />
                Storage
              </div>
            </li>
            {open && (
              <div className="border-y py-5 border-slate-300 ">
                <div className="pl-3 text-slate-500 inline-block mb-2">
                  Product Categories
                </div>
                {subMenusList?.map((menu) => {
                  return (
                    <div key={menu} className="flex flex-col gap-1">
                      <SubMenu data={menu} />
                    </div>
                  );
                })}
              </div>
            )}
            <li>
              <div className={"link"}>
                <SlSettings size={23} className=" min-w-max" />
                Settings
              </div>
            </li>
          </ul>
          {
            open && <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium font-Montserrat">
                    <div className="flex items-center justify-between border-y border-slate-300 p-4 ">
                        <div>
                            <p>Spark</p>
                            <small>No-cost $0/month</small>
                        </div>
                        <div className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded">
                            Upgrade
                        </div>
                    </div>
            </div>
          }
        </div>
        <motion.div
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: 0,
                  y: 0,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          onClick={() => setOpen(!open)}
          className="absolute w-fit h-fit z-50 right-2 bottom-2 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
