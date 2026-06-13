import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import QuizPage from "./pages/QuizPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Routes>
      <Route path="/" element={
        isLogin ? (
          <Navigate to="/quiz" />
        ) : (
          <LoginPage setIsLogin={setIsLogin} />
        )
      }
      />

      <Route path="/quiz" element={
        isLogin ? (
          <QuizPage />
        ) : (
          <Navigate to="/" />
        )
      }
      />
    </Routes>
  );
};

export default App;