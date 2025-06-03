import Welcome from "./pages/welcomePage";
import ChatWelcome from "./pages/chatWelcomePage";
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import AiCall from "./pages/aiCall";
import Medication from "./pages/medication";
import CheckUp from "./modalsUi/checkUp";
import FoodCheck from "./modalsUi/foodCheck";
import Suggestion from "./modalsUi/suggestion";
import Congrats from "./modalsUi/congrats";
import Prescription from "./modalsUi/prescribtion";
import Store from "./pages/store";
import WorkoutPage from "./pages/workOutPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/" element ={<Welcome/>}/>
          <Route path ="/chat-welcome" element ={<ChatWelcome/>}/>
          <Route path ="/call-ai" element={<AiCall/>}/>
          <Route path = "/medication" element ={<Medication/>}/>
          <Route path = "/feeling-modal" element={<CheckUp/>}/>
          <Route path="/eating-check-modal" element={<FoodCheck/>}/>
          <Route path ="/suggestion-modal" element={<Suggestion/>}/>
          <Route path ="/prescribtion-modal" element={<Prescription/>}/>
          <Route path ="/congrats-modal" element={<Congrats/>}/>
          <Route path ="/store" element ={<Store/>}/>
          <Route path ="/workout-page" element ={<WorkoutPage/>}/>
          
        </Routes>
      </Router>

    </>
  );
}
export default App;
