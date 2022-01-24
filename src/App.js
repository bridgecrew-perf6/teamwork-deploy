import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
    {/* <Login/>
     */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
