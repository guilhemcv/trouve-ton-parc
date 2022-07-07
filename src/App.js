import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Map } from './Components/Map/Map';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/map" element={<Map/>} />
    </Routes>
  );
}

export default App;
