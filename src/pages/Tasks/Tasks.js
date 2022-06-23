import React, { useEffect } from "react";
import PageTtle from "../../components/PageTitle/PageTtle";
import { AiOutlineHome, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import Addnote from "../../components/Addnote/Addnote";
import { data } from "./dummy";
import { useSelector, useDispatch } from "react-redux";
import {
  addCompleted,
  addImprotent,
  addUser,
  complatedTasks,
  setUpdateHolder,
  updateHolder,
  userData,
  setsearch
} from "../../features/Userstask/UserstaskSlice";
import CompletedTasks from "./CompletedTasks/CompletedTasks";
import Mcli from "../../aastas/Mcli.mp3";
import { Howl } from "howler";
import { updatewind } from "../../features/windowWidth/windowWidthSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const dataR = useSelector(userData);
  const completedTaskd = useSelector(complatedTasks);

  const handleOnClick = (para) => {
    dispatch(addImprotent(para));
  };
  const handleOnCheck = (para) => {
    dispatch(addCompleted(para));

  };

  const SoundPlay = () => {
    const sound = new Howl({
      src: [Mcli],
    });
    sound.play();
  };

  return (
    <div className="w-full h-full mb-10 bg-pink-600 p-10 ">
      <div className=" relative">
        <PageTtle
          text={"Tasks"}
          icon={<AiOutlineHome size={27} color={"white"} />}
          sett="..."
        />
        <div className="flex flex-col mt-10 gap-[1.9px] overflow-y-auto h-[25rem]  ">
          {dataR.length < 1  && completedTaskd.length <1 ? (
            <div className="text-center translate-y-[150px] ">
              <p>Tasks show up hear try adding.</p>
            </div>
          ) : (
            dataR.map((ele, i) => (
              <div
                key={ele.id + i}
                className="flex justify-between bg-[#202020] py-3 px-2 text-white rounded-md items-center"
              >
                  <p onClick={() => handleOnCheck(ele)}>
                    {<FaRegCircle size={20} onClick={SoundPlay} />}
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
            ))
          )}
          <CompletedTasks />
        </div>
        <div className="mt-10">
          <Addnote />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
