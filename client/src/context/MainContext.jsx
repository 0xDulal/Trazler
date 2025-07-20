import React from 'react'
import AuthProvider from './AuthContext'
import ToastProvider from './ToastContext'

const MainContext = ({children}) => {
  return (
    <AuthProvider>
      <ToastProvider>
            {children}
      </ToastProvider>
    </AuthProvider>
  )
}

export default MainContext
