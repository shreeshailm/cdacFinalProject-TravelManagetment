import { createContext, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Create the context
const UserContext = createContext();

// Create a custom hook to access the context
export function useUser() {

  return useContext(UserContext);
}

// Create the context provider component
export function UserProvider({ children }) {
 
  const [user, setUser] = useState({
    userId:null,
    userRole:null,
    userName:null,
    loggedin:false
  });

  const login = (newUserId,role,username) => {
    setUser({
        userId:newUserId,
        userRole:role,
        userName:username,
        loggedin:true
    });
  };

  const logout = () => {
    setUser({
      userId:null,
      userRole:null,
      userName:null,
      loggedin:false
    });
  
  
  };

  return (
    <UserContext.Provider value={{ ...user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
