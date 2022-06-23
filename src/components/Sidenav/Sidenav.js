import React, { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { WiDaySunny } from "react-icons/wi";
import {
  AiOutlineStar,
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineMenu,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sizeOfWindow } from "../../features/windowWidth/windowWidthSlice";
import {
  importentTasks,
  userData,
} from "../../features/Userstask/UserstaskSlice";
const Custom = ({ icon, text, path = "/", len }) => {
  return (
    <>
      <div>
        {" "}
        <NavLink
          to={`${path}`}
          className={({ isActive }) =>
            `${
              isActive
                ? `bg-[#323232] shadow-[inset_0.2em_0em_rgb(0,174,172)]`
                : "bg-transparent"
            } flex rounded-md items-center relative  hover:bg-[#323232]  gap-3 py-2 my-1 px-3 cursor-pointer`
          }
        >
          <div
            className={
              6 === 5
                ? " absolute left-0 w-1 rounded-xl h-5 bg-[#76b9ed]"
                : "absolute left-0"
            }
          ></div>
          <div>{icon}</div>
          <div className="font-base leading-5">{text}</div>
          <div className="absolute right-3 text-sm ">
            {len && (
              <p className="rounded-full w-5 h-5 text-center bg-gray-500">
                {" "}
                {len}
              </p>
            )}
          </div>
        </NavLink>
      </div>
    </>
  );
};
const Sidenav = () => {
  const sizeof = useSelector((state) => state.windowWidth.sizeWindow);
  const windowWidth = useSelector((state) => state.windowWidth.windowWidth);
  const datat = useSelector(userData);
  const dataI = useSelector(importentTasks);
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <div
        onClick={() => dispatch(sizeOfWindow(true))}
        className={` h-screen bg-[#20202026] text-white z-10 ${
          !sizeof && !(windowWidth > 700) ? "absolute w-screen" : "hidden "
        }`}
      ></div>
      <div
        className={`w-60 overflow-hidden h-screen bg-[#202020] text-white z-20 ${
          !sizeof && !(windowWidth > 700) ? "absolute" : ""
        }`}
      >
        <div
          className={`hover:bg-[#323232]  mt-2 ml-2 ${
            !sizeof && !(windowWidth > 700) ? "inline-block" : "hidden"
          } p-2 `}
          onClick={() => dispatch(sizeOfWindow(true))}
        >
          <AiOutlineMenu className="" size={15} />
        </div>

        <div className="p-2 ">
          <div className="Sidenav__user px-2  pt-1  item-center flex gap-2">
            <div className="bg-[#00aeac] text-center  w-12 h-12 pt-[9px] text-xl font-semibold rounded-full text-white">
              MV
            </div>
            <div className="pt-1 justify-center flex flex-col">
              <h3 className="text-xm font-bold leading-4 tracking-tight">
                Mehul vadsariya
              </h3>
              <p className="text-xs font-light tracking-wider leading-7">
                wwwoo70!gmail.com
              </p>
            </div>
          </div>
          <div className="mt-2 ">
            <Searchbar />
          </div>
          <div className="mt-2">
            {/* {
              <Custom
                icon={<WiDaySunny color="#5e676d" size={"20"} />}
                text={"My Day"}
                path={"/myDay"}
              />
            } */}
            {
              <Custom
                icon={<AiOutlineStar color="pink" size={"20"} />}
                text={"Important"}
                path={"/impor"}
                len={dataI.length < 1 ? null : dataI.length}
              />
            }
            {/* {
              <Custom
                icon={<AiOutlineSchedule color="#5d8683" size={"20"} />}
                text={"Planned"}
                path={"/planned"}
              />
            } */}
            {
              <Custom
                icon={<AiOutlineHome color="#697abf" size={"20"} />}
                text={"Tasks"}
                path={"/"}
                len={datat.length < 1 ? null : datat.length}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
