import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/SignupPages";
import Login from "./pages/LoginPages";
// import SinglePage from "./pages/SingleBookPage";

import EditPage from "./pages/EditPages";
import "./App.css";
import AddPage from "./pages/AddBook";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {user && <Route path="/" exact element={<Dashboard />} />}

        <Route path="/add" exact element={<AddPage />} />
        <Route path="/edit/:id" exact element={<EditPage />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
