import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainForm from "./views/MainForm/MainForm";
import UserData from "./views/UserData/UserData";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainForm />} />
          <Route path="/data" element={<UserData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
