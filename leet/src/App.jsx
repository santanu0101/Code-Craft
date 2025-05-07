import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import QuestionPage from "./components/pages/QuestionPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OnlineCompiler from "./components/pages/CompilerPage";
import LeetCodeInterface from "./components/pages/LeetCodeInterface";
import CompilerLandingPage from "./components/Home";
import EmailLoginPage from "./components/EmailLoginPage";
import OtpVerificationPage from "./components/OtpVerificationPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function Layout() {
  const location = useLocation();
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/verify-otp" ||
    location.pathname === "/compiler";

  return (
    <>
      {isHome ? null : <Header />}
      <main className="main-content">
        <Outlet />
      </main>
      {/* {isHome ? null :<Footer />} */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            {/* <Route
                path="/home"
                element={<Navigate to="/" replace />}
              /> */}
            <Route element={<Layout />}>
              <Route path="/" element={<CompilerLandingPage />} />
              <Route path="/login" element={<EmailLoginPage />} />
              <Route path="/verify-otp" element={<OtpVerificationPage />} />
              <Route path="/compiler" element={<OnlineCompiler />} />


              <Route element={<ProtectedRoute />}>
                <Route path="/questions" element={<QuestionPage />} />
                <Route path="/questions/:id" element={<LeetCodeInterface />} />
              </Route>


              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Route>
          </Routes>

          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
