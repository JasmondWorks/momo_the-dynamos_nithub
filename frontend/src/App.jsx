import Welcome from "./pages/welcomePage";
import ChatWelcome from "./pages/chatWelcomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiCall from "./pages/aiCall";
import SplashScreen from "./component/splashScreen";
function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path ="/" element ={<Welcome/>}/>
          <Route path ="/chat-welcome" element ={<ChatWelcome/>}/>
          <Route path ="/call-ai" element={<AiCall/>}/>
        </Routes>
      </Router> */}
      <SplashScreen />
    </>
  );
}
export default App;
