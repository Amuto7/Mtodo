import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { updatewind } from "../../features/windowWidth/windowWidthSlice";
import { deleteTask, updateHolder, updateTask } from "../../features/Userstask/UserstaskSlice";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
const Updatetask = () => {
  const updatewin = useSelector((state) => state.windowWidth.updatewin);
  const windowWidth = useSelector((state) => state.windowWidth.windowWidth);
  const updaHol = useSelector(updateHolder);
  const [inputVal, setInputVal] = useState({
    task:'',
    data:''
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setInputVal(e => ({...e,...updaHol}))
   
  }, [updaHol]);
  const handleon = (e) => {
    setInputVal((pre) => ({ ...pre, task: e.target.value }));

  };
  return (
    <div>
      {" "}
      <div
        className={`w-60 overflow-hidden h-screen bg-[#202020] text-white z-20 ${
          updatewin && !(windowWidth > 922) ? "absolute right-0 top-0" : ""
        }`}
      >
        <div className="px-2 py-1 ">
          <div className="float-left p-1 py-2 cursor-pointer" onClick={()=> (dispatch(updateTask(inputVal)),dispatch(updatewind(false)))}>
            <p className="text-xs">Update</p>
          </div>
          <div
            className=" float-right  hover:bg-[#393939] rounded p-2"
            onClick={() => dispatch(updatewind(false))}
          >
            <AiOutlineClose />
          </div>
          <div className="bg-[#393939] w-full h-20 rounded mt-10">
            <div className="flex justify-between  py-3 px-2 text-white rounded-md items-center mt-[1.8px]">
              <div className=" flex gap-2 items-center">
                <p>{<FaRegCircle size={20} />}</p>
                <input
                  type="text"
                  className="w-[10rem] bg-transparent focus:outline-none h-auto"
                  value={inputVal.task}
                  
                  onChange={handleon}
                />
              </div>
              <p>
                {updaHol.important ? (
                  <AiFillStar size={20} />
                ) : (
                  <AiOutlineStar size={20} />
                )}
              </p>
            </div>
          </div>
          <div className="flex absolute bottom-0 p-2 w-[230px] items-center  justify-between">
            <p className="text-center text-sm w-60 text-gray-400 ">
              Created  {moment(inputVal.data).fromNow()}
            </p>
            <div className=" hover:bg-[#393939] rounded p-2 " onClick={()=> (dispatch(deleteTask(updaHol)), dispatch(updatewind(false)))}>
              <RiDeleteBinLine />
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        onClick={() => dispatch(updatewind(false))}
        className={` h-screen bg-[#20202026] text-white z-10 ${
          updatewin && !(windowWidth > 922)
            ? "absolute w-screen left-0 top-0"
            : "w-0"
        }`}
      ></div>
    </div>
  );
};

export default Updatetask;
