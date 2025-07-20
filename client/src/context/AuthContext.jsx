/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useEffect, useState, useCallback } from "react";
import { toast } from "sonner";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
      axios.defaults.withCredentials = true;

      const Backend_URL = import.meta.env.VITE_BACKEND_URL;
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [userData, setUserData] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      const getAuthState = useCallback(async () => {
            try {
                  setIsLoading(true);
                  const response = await axios.get(`${Backend_URL}/api/auth/is-auth`);
                  const { data } = response;
                  if (data.success) {
                        setIsLoggedIn(true);
                        getUserData();
                  } else {
                        setIsLoggedIn(false);
                        setUserData(null);
                  }
            } catch (error) {
                  setIsLoggedIn(false);
                  setUserData(null);
                  
                  if (error.response?.status === 401) {
                        console.log("401 Unauthorized - user not logged in");
                  } else {
                        console.error("Unexpected auth check error:", error);
                  }
            } finally {
                  setIsLoading(false);
            }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      // Check auth state on mount
      useEffect(() => {
            getAuthState();
      }, [getAuthState]);

      const getUserData = useCallback(async () => {
            try {
                  const { data } = await axios.get(`${Backend_URL}/api/user/data`);
                  if (data.success && data.user) {
                        setUserData(data.user);
                        setIsLoggedIn(true);
                  } else {
                        toast.error("Failed to fetch user data");
                        console.log("API returned success: false");
                  }
            } catch (error) {
                  console.error("Error fetching user data:", error);
                  if (error.response) {
                        console.error("Server response:", error.response.data);
                        if (error.response.status === 401) {
                              // User is not authenticated
                              setIsLoggedIn(false);
                              setUserData(null);
                        } else {
                              toast.error(`Error: ${error.response.status}`);
                        }
                  } else {
                        toast.error("Failed to fetch user data");
                  }
            }
      }, [Backend_URL]);

      const value = {
            Backend_URL,
            isLoggedIn,
            setIsLoggedIn,
            userData,
            setUserData,
            getUserData,
            getAuthState,
            isLoading,
      };

      return (
            <AuthContext.Provider value={value}>
                  {children}
            </AuthContext.Provider>
      );
};
export default AuthProvider;