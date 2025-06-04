import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcomePage";
import NotFound from "./pages/not_found";
import Chat from "./pages/chat_page";
import ChatWelcome from "./pages/chatWelcomePage";
import Medications from "./pages/medications_page";
import Onboarding from "./pages/onboarding";
import ProtectedRoutes from "./component/protectedRoutes";
import AiCall from "./pages/aiCall";

import Medication from "./pages/medication";
import CheckUp from "./modalsUi/checkUp";
import FoodCheck from "./modalsUi/foodCheck";
import Suggestion from "./modalsUi/suggestion";
import Congrats from "./modalsUi/congrats";
import Prescription from "./modalsUi/prescribtion";
import WorkoutPage from "./pages/workOutPage"
import Store from "./pages/store";
import NewMedication from "./pages/newMed";
import CreateNewMed from "./modalsUi/createNewMed";
import PatientPage from "./pages/patientPage";
import NewPatient from "./pages/newpatient";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Onboarding />} path="/onboarding" />
        <Route element={<Welcome />} path="/" />
        <Route
          element={
            <ProtectedRoutes>
              <Medications />
            </ProtectedRoutes>
          }
          path="/medications"
        />
        <Route element={<Chat />} path="/chats/:chatId" />
        <Route element={<AiCall />} path="/chats/:chatId/call" />
        <Route element={<ChatWelcome />} path="/chat-welcome" />
        <Route element={<Medications />} path="/medications" />
        <Route element={<NotFound />} path="*" />

        <Route path="/" element={<Welcome />} />
        <Route path="/chat-welcome" element={<ChatWelcome />} />
        <Route path="/call-ai" element={<AiCall />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/feeling-modal" element={<CheckUp />} />
        <Route path="/eating-check-modal" element={<FoodCheck />} />
        <Route path="/suggestion-modal" element={<Suggestion />} />
        <Route path="/prescribtion-modal" element={<Prescription />} />
        <Route path="/congrats-modal" element={<Congrats />} />n
        <Route path="/store-page" element ={<Store/>} />
        <Route path="/workout-page" element ={<WorkoutPage/>}/>
        <Route path="/new-med" element ={<NewMedication/>}/>
        {/* <Route path ="/create-new-med-modal" element ={<CreateNewMed/>}/> */}
        <Route path="/patient-page" element ={<PatientPage/>}/>
        <Route path ="/new-patient" element ={<NewPatient/>}/>
      </Routes>
    </Router>
  );
}
export default App;
