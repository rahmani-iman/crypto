import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Coins from './components/Coins';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/notfound"/>} />
      </Routes>
    </div>
  );
}

export default App;
