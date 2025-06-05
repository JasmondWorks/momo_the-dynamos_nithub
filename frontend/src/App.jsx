import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcomePage";
import NotFound from "./pages/not_found";
import Chat from "./pages/chat_page";
import ChatWelcome from "./pages/chatWelcomePage";
import Onboarding from "./pages/onboarding";
import ProtectedRoutes from "./component/protectedRoutes";
import AiCall from "./pages/aiCall";

import Medication from "./pages/medication";
import WorkoutPage from "./pages/workOutPage";
import Store from "./pages/store";
import PatientDetails from "./pages/patientDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Onboarding />} path="/onboarding" />
        <Route element={<Welcome />} path="/" />
        <Route element={<Chat />} path="/chats/:chatId" />
        <Route element={<AiCall />} path="/chats/:chatId/call" />
        <Route element={<ChatWelcome />} path="/chat-welcome" />
        <Route
          element={
            <ProtectedRoutes>
              <PatientDetails />
            </ProtectedRoutes>
          }
          path="patients/:patientId"
        />
        <Route path="/call-ai" element={<AiCall />} />
        <Route
          path="/medication"
          element={
            <ProtectedRoutes>
              <Medication />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/store-page"
          element={
            <ProtectedRoutes>
              <Store />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/workout-page"
          element={
            <ProtectedRoutes>
              <WorkoutPage />
            </ProtectedRoutes>
          }
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  );
}
export default App;
