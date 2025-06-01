import Welcome from "./pages/welcomePage";
import ChatWelcome from "./pages/chatWelcomePage";
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/" element ={<Welcome/>}/>
          <Route path ="/chat-welcome" element ={<ChatWelcome/>}/>
        </Routes>
      </Router>

    </>
  );
}
export default App;
