import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Logo from "../assets/codeVerse_Logo.jpg"

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="bg-[#1c1e29] h-[100vh] w-[100vw]">
    {/* home page wrapper */}
    <div className="flex flex-col h-full justify-between items-center ">
      {/* form wrapper */}
      <div className="flex flex-col mx-auto my-auto bg-[#282a36] p-5 rounded-sm h-[350px] max-h-[90%] w-[400px] max-w-[90%] items-center  justify-center  text-white">
        <img
          className="h-[20%]"
          src={Logo}
          alt="CodeVerse logo"
        />
        <h4 className="my-4">Paste invitaion ROOM ID</h4>

        <div className="flex flex-col">
          <div className="flex-col flex gap-y-4 ">
            <input
              type="text"
              className="rounded-md p-[.5rem] text-black focus:outline-none focus:ring focus:ring-green-400   "
              placeholder="ROOM ID"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
              onKeyUp={handleInputEnter}
            />
            <input
              type="text"
              className=" rounded-md p-[.5rem] text-black focus:outline-none focus:ring focus:ring-green-400"
              placeholder="USERNAME"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              onKeyUp={handleInputEnter}
            />
          </div>

          <div className="my-2 flex flex-row-reverse">
            <button
              onClick={joinRoom}
              className=" inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white dark:text-white  focus:outline-none dark:focus:ring-none object-cover w-[100px] "
            >
              <span className=" px-5 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                Join
              </span>
            </button>
          </div>
          <span>
            If you don't have an invite the create &nbsp;
            <span className=" text-green-400 underline  hover:cursor-pointer underline-offset-1">
              <a  onClick={createNewRoom} href="">
                new room
              </a>
            </span>
          </span>
        </div>
      </div>
      {/* footer */}
      <footer className="text-white">
        <h4 className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            Built with <FaHeart className=" text-orange-500" />{" "}
          </span>
          <a href="https://github.com/Vishwa-03"> by Vishwa </a>
        </h4>
      </footer>
    </div>
  </div>
  );
};

export default Home;
