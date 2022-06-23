import React from "react";
import PageTtle from "../../components/PageTitle/PageTtle";
import { AiOutlineHome, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import Addnote from "../../components/Addnote/Addnote";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompleted,
  addImprotent,
  importentTasks,
  setUpdateHolder,
  updateHolder,
} from "../../features/Userstask/UserstaskSlice";
import { data } from "../Tasks/dummy";
import { updatewind } from "../../features/windowWidth/windowWidthSlice";

const Improtent = () => {
  const dataR = useSelector(importentTasks);
  const dispatch = useDispatch();
  const handleOnClick = (para) => {
    dispatch(addImprotent(para));
  };

  return (
    <div className="w-full h-full mb-10 bg-purple-600 p-10 ">
      <div className=" relative">
        <PageTtle
          text={"Importent"}
          icon={<AiOutlineStar size={30} color={"white"} />}
          sett="..."
        />
        <div className="flex flex-col mt-10 gap-[1.9px] overflow-y-auto h-[25rem]  ">
          {dataR.length < 1 ? (
            <div className="text-center translate-y-[150px] "><p>Try starring some tasks to see them hear.</p></div>
          ) : (
            dataR.map((ele, i) => (
              <div
              key={ele.id + i}
              className="flex justify-between bg-[#202020] py-3 px-2 text-white rounded-md items-center"
            >
                <p >
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
                <p onClick={() => handleOnClick(ele)}>{<AiFillStar size={20} />}</p>
              </div>
            ))
          )}
        </div>
        <div className="mt-10">
          <Addnote />
        </div>
      </div>
    </div>
  );
};

export default Improtent;
