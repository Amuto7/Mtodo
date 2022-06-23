import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../../components/Sidenav/Sidenav";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  SetscreenSize,
  sizeOfWindow,
} from "../../features/windowWidth/windowWidthSlice";
import { AiOutlineMenu } from "react-icons/ai";
import Updatetask from "../../components/Updatetask/Updatetask";
const Home = () => {
  const dispatch = useDispatch();
  const winWid = useSelector((state) => state.windowWidth.windowWidth);
  const sizeof = useSelector((state) => state.windowWidth.sizeWindow);
  const updatewin = useSelector((state) => state.windowWidth.updatewin);
  useEffect(() => {
    const handleResize = () =>
      dispatch(SetscreenSize(parseInt(window.innerWidth)));

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  useEffect(() => {
    dispatch(sizeOfWindow(winWid <= 760 ? true : false));
  }, [winWid]);

  return (
    <div className="bg-[#1c1c1c] w-full h-screen overflow-hidden">
      <div className="flex ">
        <div className={sizeof ? "hidden" : ""}>
          <Sidenav />
        </div>
        <div
            className={`hover:bg-[#a18f8fdd] translate-x-6 rounded p-2 absolute mt-2 ml-2  ${
              sizeof ? "inline-block" : "hidden"
            }  `}
            onClick={() => dispatch(sizeOfWindow(false))}
          >
            <AiOutlineMenu className="" color="white" size={20} />
          </div>
        <div className=" basis-full h-screen">

        <Outlet />
        </div>
        <div className={updatewin ? "" : "hidden"}>
          <Updatetask />
        </div>
      </div>
    </div>
  );
};

export default Home;
