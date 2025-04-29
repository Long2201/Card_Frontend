import logo from './logo.svg';
import './App.css';
import Button from './ButtonComponent';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NewPage from './Dashboard'; // make sure this file exists

// Home page component
function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/newpage'); // Navigate to new page
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Here's the button */}
        <Button label="Go to New Page" onClick={handleClick} />
      </header>
    </div>
  );
}

// Main App component that includes the Router
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </Router>
  );
}
