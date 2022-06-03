import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Button from '@mui/material/Button';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/AnswerPage'
import { AnswerPage } from './components/AnswerPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/answerpage" element={<AnswerPage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
