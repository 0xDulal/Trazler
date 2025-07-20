import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
      const { userData, isLoggedIn, isLoading, getUserData } = useContext(AuthContext);
      const navigate = useNavigate();

      useEffect(() => {
            if (!isLoading && !isLoggedIn) {
                  navigate("/login");
                  return;
            }
            if (isLoggedIn && !userData) {
                  getUserData();
            }
            
      }, [isLoggedIn, userData, isLoading, getUserData, navigate]);

      if (isLoading) {
            return (
                  <div className="flex items-center justify-center h-screen">
                        <div className="text-2xl">Loading...</div>
                  </div>
            );
      }

      if (!isLoggedIn) {
            return null; // Will redirect to login
      }

      return (
            <div className="text-center text-5xl h-screen w-screen flex flex-col items-center justify-center">
                  <h1>Hello, {userData?.name || "User"}!</h1>
                  {userData && (
                        <div className="text-lg mt-4">
                              <p>Email: {userData.email}</p>
                              <p>Verified: {userData.isVerified ? "Yes" : "No"}</p>
                        </div>
                  )}
            </div>
      );
};

export default UserInfo;
