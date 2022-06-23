import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  complatedTasks,
  setUpdateHolder,
} from "./../../../features/Userstask/UserstaskSlice";
import {
  addCompleted,
  addImprotent,
} from "./../../../features/Userstask/UserstaskSlice";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { AiOutlineHome, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { updatewind } from "../../../features/windowWidth/windowWidthSlice";
const CompletedTasks = () => {
  const dispatch = useDispatch();
  const completedTaskd = useSelector(complatedTasks);
  const [show, setshow] = useState(false);
  const handleOnClick = (para) => {
    dispatch(addImprotent(para));
  };
  const handleOnCheck = (para) => {
    dispatch(addCompleted(para));
  };
  return (
    <>
      {completedTaskd.length > 0 && (
        <div className=" mt-1">
          <div
            className="flex mb-2 text-white items-center p-1 rounded gap-1 m max-w max-w-fit bg-[#202020] hover:bg-[#323232]"
            onClick={() => setshow((e) => !e)}
          >
            {show === true ? <IoIosArrowDown /> : <IoIosArrowForward />}
            <p>Completed</p>
            <p>{completedTaskd.length}</p>
          </div>
          {show &&
            completedTaskd.map((ele, i) => (
              <div
              key={ele.id + i}
              className="flex justify-between bg-[#202020] py-3 px-2 text-white rounded-md items-center"
            >
                <p onClick={() => handleOnCheck(ele)}>
                  {<FaRegCircle size={20}  />}
                </p>
                <div
                  className="w-full flex-2 text-left items-center ml-2"
                  onClick={() => (
                    dispatch(setUpdateHolder(ele)), dispatch(updatewind(true))
                  )}
                >
                  <p className="flex-2">{ele.task}</p>
                </div>
                <p onClick={() => handleOnClick(ele)}>
                  {ele.improtent ? (
                    <AiFillStar size={20} />
                  ) : (
                    <AiOutlineStar size={20} />
                  )}
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CompletedTasks;
