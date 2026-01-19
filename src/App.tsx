import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timer from './pages/Timer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
