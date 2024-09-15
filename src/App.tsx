import { Routes, Route } from "react-router-dom";
import TestRoute from "./components/TestRoute";
import Login from "./components/Login/Login";
import PersonalInfoForm from "./components/PersonalInfo/PersonalInfoForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<PersonalInfoForm />} />
      </Routes>
    </>
  );
};

export default App;
