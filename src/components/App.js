
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/App.css";

const Home = () => <h1>Welcome to my website!</h1>;
const About = () => <h1>This is a sample React Router program.</h1>;

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
