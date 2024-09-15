import { Routes, Route } from "react-router-dom";
import TestRoute from "./components/TestRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestRoute />} />
      </Routes>
    </>
  );
};

export default App;
