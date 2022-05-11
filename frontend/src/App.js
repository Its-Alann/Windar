import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Button variant="contained" size="medium">Select Drone</Button>
    </div>
  );
}


export default App;
