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
import { InfinitySpin } from 'react-loader-spinner';
import Settings from './routes/Settings';

function App() {

  const loading = useSelector((state) => state.loading.loading)


  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   console.log(loading)


  //   setTimeout(function () {
  //     setLoading(false)
  //   }, 5000)
  // }, [])



  return (

    <>
      {loading ? 
      <div className='w-100 d-flex text-center' style={{height:"100vh"}}>
        <InfinitySpin className="m-auto" color="grey" style={{margin:"auto"}} />
        </div> :
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
              <Route path="/shares" element={<Shares />} />
              <Route path="/settings" element={<Settings/>} />


            </Routes>
          </BrowserRouter></>}
    </>

  );
}

export default App;
