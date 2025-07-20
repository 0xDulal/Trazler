import React, { useContext, useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import { Toaster, toast } from "sonner";
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Login from './components/authPage/Login';
import SignUp from './components/authPage/SignUp';
import Recovery from './components/authPage/Recovery';
import UserInfo from './components/userPage/UserInfo';
import VerifyEmail from './components/authPage/VerifyEmail';
import { ToastContext } from './context/ToastContext';
import Error from './pages/Error';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('/owner');
  const {toastMsg, toastType} = useContext(ToastContext);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (toastMsg) {
      if (toastType === 'success') {
        toast.success(toastMsg);
      } else if (toastType === 'error') {
        toast.error(toastMsg);
      }else if (toastType === 'warning') {
        toast.warning(toastMsg);
      } else if (toastType === 'info') {
        toast.info(toastMsg);
      }else {
        toast.message(toastMsg);
      }
    }
    return () => {
      toast.dismiss();
    };
  }, [toastMsg, toastType]);

  return (
    <>
    {
      !isOwnerPath &&
    <NavBar/>
    }
    <Toaster richColors />
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/recover' element={<Recovery />} />
        <Route path='/user/profile' element={<UserInfo />} />
        <Route path='/verify' element={<VerifyEmail />} />
        <Route path='/404' element={<Error />} />
        

      </Routes>

    </div>
    
    </>
  )
}

export default App
