import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addUser, userData } from "../../features/Userstask/UserstaskSlice";
import { v4 as uuid } from "uuid";

const Addnote = () => {
  const dispatch = useDispatch();
  const [text, settext] = useState({
    id: uuid(),
    task: "",improtent:false,completed:false,data:`${new Date()}`,Comdate:''
  });

  const handleOnchange = (e) => {
    settext((pre) => ({ ...pre, task: e.target.value }));
  };
  const dispatchTask = () => {
    if (text.task.length !== 0) {
      dispatch(addUser(text));
      settext((e) => ({ ...e, task: "",id:uuid() }));
    }
  };

  return (
    <>
      <div className=" sticky top-[3rem] flex gap-1 w-full py-3 rounded-md bg-[#000000cf]   text-white items-center hover:bg-[#0e0d0d7f] ">
        <AiOutlinePlus
          className="mx-2 cursor-pointer"
          size={25}
          onClick={dispatchTask}
        />
        <input
          type="text"
          className=" w-full bg-transparent p-0 m-0 focus:outline-none text-white placeholder:text-sm placeholder:font-medium placeholder:text-white "
          placeholder="Add a task"
          onChange={handleOnchange}
          value={text.task}
        />
      </div>
    </>
  );
};

export default Addnote;
