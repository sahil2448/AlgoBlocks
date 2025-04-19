// // frontend/src/auth/AuthContext.jsx
// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // A demo login function that would normally call your backend
//   const login = async (username, password) => {
//     // Replace with an API call to your /login endpoint:
//     const response = await fetch('http://localhost:8000/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });
//     if (response.ok) {
//       const data = await response.json();
//       setUser({ username: data.username });
//       return true;
//     }
//     return false;
//   };

//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Pseudo login function: check against hard-coded credentials.
  const login = (username, password) => {
    if (username === "demo" && password === "password") {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
