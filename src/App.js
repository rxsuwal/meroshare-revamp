import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Error404 from './routes/Error404';
import Portfolio from './routes/Portfolio';
import Register from './routes/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path='*' element={<Error404/>} />

        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/portfolio" element={<Portfolio/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
