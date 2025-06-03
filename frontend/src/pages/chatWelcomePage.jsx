import WelcomeFrame from "../assets/welcomeFrame.svg"
import Input from "../component/inputField"
import userFrame from "../assets/userFrame.svg"
import messageFrame from "../assets/message.svg"
import SuggestionBox from "../component/suggestionBox"

function ChatWelcome({name}){
    return(
        <div className="w-full h-100 text-center flex flex-col items-center">
            <img src={WelcomeFrame} alt="welcome frame" />
            <p>Welcome {name}</p>
            <p>I'm here to help you with medical questions, symptom checks, and general health advice. </p>
                <p>How can I assist you today?</p>
 
             <Input 
             type='text'
             placeholder=" Enter a Response "
             rightIcon ={<img src={userFrame}/>}
             button={<button type="submit">Send</button>}
             />

             <p className="mt-12 mb-2 text-[#646368]">Suggestions</p>
 
             <div className="flex justify-between pr-5 pl-5 gap-4 ">
                <SuggestionBox img ={messageFrame} name ='Headache'/>
                <SuggestionBox img ={messageFrame} name ='Fever and cold'/>
                <SuggestionBox img ={messageFrame} name ='Back Pain causes'/> 
             </div>
        </div>
    )
}export default ChatWelcome