import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Map } from './Components/Map/Map';
import { Form } from './Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/map" element={<Map/>} />
      <Route path="/form" element={<Form/>} />
    </Routes>
  );
}

export default App;
