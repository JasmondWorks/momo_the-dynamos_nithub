import WelcomeFrame from "../assets/welcomeFrame.svg";
import Input from "../component/inputField";
import userFrame from "../assets/userFrame.svg";
import messageFrame from "../assets/message.svg";
import SuggestionBox from "../component/suggestionBox";

import phoneIcon from "../assets/phoneIcon.svg";
import goBackIcon from "../assets/goBackIcon.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ChatWelcome({ name = "Bolu" }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  console.log(input);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) return;

    navigate("/chats/abc");
  }

  return (
    <>
      <div className="p-6 lg:p-12 h-[100vh]  bg-[#fdfcfc]">
        <div className="max-w-5xl mx-auto text-sm h-full">
          <div className="p-3 px-5 border border-neutral-400 rounded-lg h-full grid grid-rows-[auto_1fr] gap-5">
            <header className="flex justify-between items-center">
              <img src={goBackIcon} alt="back icon" className="h-4" />
              <Link
                to="/chats/abc/call"
                className="bg-[var(--color-primary)] rounded-full p-2 cursor-pointer"
              >
                <img
                  src={phoneIcon}
                  alt="phone icon"
                  className="aspect-square h-4"
                />
              </Link>
            </header>
            <div className="flex items-center justify-center overflow-y-auto no-scrollbar">
              <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={WelcomeFrame}
                    alt="welcome frame"
                    className="h-16"
                  />
                  <p className="text-lg leading-4">Welcome {name}</p>
                  <p className="text-center text-sm text-[#646368]">
                    I'm here to help you with medical questions, symptom checks,
                    and general health advice. <br />
                    How can I assist you today?
                  </p>
                  <p></p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center gap-3"
                >
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
                        className="disabled:cursor-not-allowed disabled:opacity-40 p-2 rounded-md text-white bg-[#8E44AD] cursor-pointer"
                      >
                        Send
                      </button>
                    }
                  />
                  <p className="text-[#646368] text-xs font-semibold !mt-5">
                    Suggestions
                  </p>
                  <div className="flex flex-wrap items-center justify-center pr-5 pl-5 gap-4 ">
                    <SuggestionBox img={messageFrame} name="Headache" />
                    <SuggestionBox img={messageFrame} name="Fever and cold" />
                    <SuggestionBox img={messageFrame} name="Back Pain causes" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatWelcome;
