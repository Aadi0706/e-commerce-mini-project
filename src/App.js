
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <h1>e-commerce-project</h1> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
