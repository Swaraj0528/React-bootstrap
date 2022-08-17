import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
