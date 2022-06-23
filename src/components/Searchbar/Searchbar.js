import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  complatedTasks,
  setsearch,
  userData,
} from "../../features/Userstask/UserstaskSlice";
const Searchbar = () => {
  const [toggleS, settoggleS] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userD = useSelector(userData);
  const compD = useSelector(complatedTasks);
  const [text, setText] = useState("");
  const onChange = (e) => {
    const text = e.target.value;
    setText(e.target.value);
    const allData = [...userD, ...compD];
    if (text.length !== 0) {
      const filterS = allData.filter((e) =>
        e.task.toUpperCase().includes(text.toUpperCase())
      );
      dispatch(setsearch(filterS));
      navigate("/search");
    } else {
      dispatch(setsearch([]));
      navigate("/");
    }
  };
  return (
    <div className="bg-[#202020]" onMouseLeave={() => settoggleS(false)}>
      <div
        className={`flex shadow-md  rounded-md items-center border-b border-[${
          toggleS ? "#00aba9" : "#8d8d8d"
        }]  p-2 gap-2`}
      >
        <input
          type="text"
          className="bg-transparent focus:outline-none pointer-events-auto ba flex-2 font-semibold text-sm leading-5"
          placeholder="Search"
          onClick={() => settoggleS(true)}
          onChange={(e) => onChange(e)}
          value={text}
        />
        {text.length > 0 && (
          <AiOutlineClose
            className="  cursor-pointer "
            onClick={() => (setText(""), navigate("/"))}
          />
        )}
        <VscSearch className=" " />
      </div>
    </div>
  );
};

export default Searchbar;
