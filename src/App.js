import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Error404 from './routes/Error404';
import Portfolio from './routes/Portfolio';
import Register from './routes/Register';
import Details from './routes/Details';
import Asba from './routes/Asba';
import Shares from './routes/Shares';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-right"
        reverseOrder={false} />
      <BrowserRouter>
        <Routes>

          <Route path='*' element={<Error404 />} />

          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/details" element={<Details />} />
          <Route path="/asba" element={<Asba />} />
          <Route path="/shares" element={<Shares />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
