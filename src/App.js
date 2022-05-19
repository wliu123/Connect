
import { Routes, Route, useSearchParams, useNavigate, Link } from "react-router-dom";

import Navbar from './components/navbar/Navbar'
import Authorization from './components/authorization/Authorization';

function App() {
  

  return (
    <div className="App">
    <Navbar />
    <Authorization />
    </div>
  );
}

export default App;
