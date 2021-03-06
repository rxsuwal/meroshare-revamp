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
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Settings from './routes/Settings';
import Loader from './components/Loader/Loader';
import OpeningDetail from './routes/OpeningDetail';
import Apply from './components/Apply';
import About from './routes/About';

function App() {

  const loading = useSelector((state) => state.loading.loading)

  return (

    <>
      {loading ?
        <Loader />
        :
        <>
          < Toaster position="top-right"
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
              <Route path='asba/opening:Id' element={<OpeningDetail />} >

                <Route path='apply' element={<Apply />} />

              </Route>

              <Route path="/shares" element={<Shares />} />
              <Route path="/settings" element={<Settings />} />

              <Route path='/about' element={<About/>}/>



            </Routes>
          </BrowserRouter></>}
    </>

  );
}

export default App;
