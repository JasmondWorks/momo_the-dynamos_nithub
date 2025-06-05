import phoneIcon from "../assets/phoneIcon.svg";
import helpIcon from "../assets/helpIcon.svg";
import goBackIcon from "../assets/goBackIcon.svg";
import sendIcon from "../assets/sendIcon.svg";

import userFrame from "../assets/userFrame.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "../component/inputField";

const messages = [
  {
    id: 1,
    type: "sent",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident non distinctio quos",
    time: Math.floor(Math.random() * 8),
  },
  {
    id: 2,
    type: "received",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident non distinctio quos",
    time: Math.floor(Math.random() * 8),
  },
  {
    id: 3,
    type: "sent",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident non distinctio quos",
    time: Math.floor(Math.random() * 8),
  },
  {
    id: 4,
    type: "sent",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident non distinctio quos",
    time: Math.floor(Math.random() * 8),
  },
  {
    id: 5,
    type: "received",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident non distinctio quos",
    time: Math.floor(Math.random() * 8),
  },
];

function Chat() {
  const { chatId } = useParams();
  const navigate = useNavigate();

  function handlePlaceCall() {
    navigate(`/chats/${chatId}/call`);
  }
  console.log(chatId);

  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="p-6 lg:p-12 h-dvh max-w-5xl mx-auto text-sm">
      <div className="p-5 px-8 border border-neutral-400 rounded-xl h-full grid grid-rows-[auto_1fr] gap-5 lg:gap-0 relative">
        <header className="flex justify-between items-center">
          <Link to="/chat-welcome">
            <img src={goBackIcon} alt="back icon" className="h-4" />
          </Link>
          <button
            onClick={handlePlaceCall}
            className="bg-[var(--color-primary)] rounded-full p-[.6rem] cursor-pointer"
          >
            <img
              src={phoneIcon}
              alt="phone icon"
              className="aspect-square h-4"
            />
          </button>
        </header>
        <div className="lg:px-20 md:px-10 overflow-y-auto no-scrollbar pb-[100px]">
          <div className="flex flex-col gap-10">
            {messages.map((message) => (
              <Message key={message.id} {...message} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 right-[50%] translate-x-[50%] w-full lg:px-25 md:px-20 px-8">
          {/* <div className="flex justify-center"> */}
          {/* <div className="md:px-20 w-full"> */}
          <Input
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder=" Enter a Response "
            rightIcon={<img src={userFrame} />}
            button={
              <button
                type="submit"
                disabled={!input}
                className="disabled:cursor-not-allowed disabled:opacity-40 p-2 rounded-full text-white bg-[#8E44AD] cursor-pointer"
              >
                <img src={sendIcon} alt="" />
              </button>
            }
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

function Message({ type = "sent", text = "", time }) {
  return (
    <div className={`flex text-sm ${type === "sent" ? "justify-end " : ""}`}>
      <div className="flex flex-col gap-2">
        <div
          className={`flex gap-2 items-center text-xs ${
            type === "sent" ? "flex-row-reverse" : ""
          }`}
        >
          {type === "sent" && <img src={userFrame} alt="" />}
          {type !== "sent" && (
            <div className="bg-[var(--color-primary)] rounded-full p-1.5">
              <img
                className="h-4 aspect-square"
                src={helpIcon}
                alt="help icon"
              />
            </div>
          )}
          <span className="font-medium text-[#344054]">
            {type === "sent" ? "Me" : "MOMO Chatbot"}
          </span>
          <span className="text-[#a6a6a9]">{time}m</span>
        </div>
        <div
          className={`p-3 max-w-lg rounded-lg text-[#344054] ${
            type === "sent"
              ? "bg-transparent border-2 border-[var(--color-secondary)]"
              : "ml-5 bg-[var(--color-secondary--light)]"
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Chat;
