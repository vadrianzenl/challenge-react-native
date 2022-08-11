import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Images from './pages/Images/Images';
import Sheets from './pages/Sheets/Sheets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="images" element={<Images />} />
        <Route path="sheets" element={<Sheets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
