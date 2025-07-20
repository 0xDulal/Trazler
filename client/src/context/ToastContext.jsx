/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react'

export const ToastContext = createContext();
const ToastProvider = ({children}) => {
      const [toastMsg, setToastMsg] = useState(null);
      const [toastType, setToastType] = useState("message");
      const pushToast = (msg, type = "message") => {
            setToastMsg(msg);
            setToastType(type);
            setTimeout(() => {
                  setToastMsg(null);
                  setToastType("message");
            }, 3000);
      };
      const value = {
            toastMsg,
            setToastMsg,
            toastType,
            pushToast
      };
      
  return (
      <ToastContext.Provider value={value}>
            {children}
      </ToastContext.Provider>
  )
}

export default ToastProvider;
