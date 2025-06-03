import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcomePage";
import NotFound from "./pages/not_found";
import Chat from "./pages/chat_page";
import ChatWelcome from "./pages/chatWelcomePage";
import Medications from "./pages/medications_page";
import Onboarding from "./pages/onboarding";
import AiCall from "./pages/aiCall";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Onboarding />} path="/onboarding" />
        <Route element={<Welcome />} path="/" />
        <Route element={<Chat />} path="/chats/:chatId" />
        <Route element={<AiCall />} path="/chats/:chatId/call" />
        <Route element={<ChatWelcome />} path="/chat-welcome" />
        <Route element={<Medications />} path="/medications" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  );
}
export default App;
