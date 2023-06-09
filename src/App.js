import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Coins from './components/Coins';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/notfound"/>} />
      </Routes>
    </div>
  );
}

export default App;
