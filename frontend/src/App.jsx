import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcome_page";
import NotFound from "./pages/not_found";
import Chat from "./pages/chat_page";
import Medications from "./pages/medications_page";
import Onboarding from "./pages/onboarding";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Onboarding />} path="/onboarding" />
        <Route element={<Welcome />} path="/" />
        <Route element={<Chat />} path="/chat" />
        <Route element={<Medications />} path="/medications" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  );
}
export default App;
