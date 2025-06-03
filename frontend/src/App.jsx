import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcomePage";
import NotFound from "./pages/not_found";
import Chat from "./pages/chat_page";
import ChatWelcome from "./pages/chatWelcomePage";
import Medications from "./pages/medications_page";
import Onboarding from "./pages/onboarding";
import ProtectedRoutes from "./component/protectedRoutes";
import AiCall from "./pages/aiCall";
<<<<<<< Updated upstream

import Medication from "./pages/medication";
import CheckUp from "./modalsUi/checkUp";
import FoodCheck from "./modalsUi/foodCheck";
import Suggestion from "./modalsUi/suggestion";
import Congrats from "./modalsUi/congrats";
import Prescription from "./modalsUi/prescribtion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<Onboarding />} path="/onboarding" />
        <Route element={<Welcome />} path="/" />
        {/* <Route
          element={
            <ProtectedRoutes>
              <Medications />
            </ProtectedRoutes>
          }
          path="/medications"
        /> */}
        <Route element={<Chat />} path="/chats/:chatId" />
        <Route element={<AiCall />} path="/chats/:chatId/call" />
        <Route element={<ChatWelcome />} path="/chat-welcome" />
        <Route path="/call-ai" element={<AiCall />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/feeling-modal" element={<CheckUp />} />
        <Route path="/eating-check-modal" element={<FoodCheck />} />
        <Route path="/suggestion-modal" element={<Suggestion />} />
        <Route path="/prescribtion-modal" element={<Prescription />} />
        <Route path="/congrats-modal" element={<Congrats />} />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
=======
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/chat-welcome" element={<ChatWelcome />} />
          <Route path="/call-ai" element={<AiCall />} />
        </Routes>
      </Router>
    </>
>>>>>>> Stashed changes
  );
}
export default App;
