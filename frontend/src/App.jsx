import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/not_found";
import Chat from "./pages/chat_page";
import Medications from "./pages/medications_page";
import Onboarding from "./pages/onboarding";
import ProtectedRoutes from "./component/ProtectedRoutes";
import Welcome from "./pages/welcome_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Onboarding />} path="/onboarding" />
        <Route element={<Welcome />} path="/" />
        <Route element={<Chat />} path="/chat" />

        <Route
          element={
            <ProtectedRoutes>
              <Medications />
            </ProtectedRoutes>
          }
          path="/medications"
        />

        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  );
}
export default App;
