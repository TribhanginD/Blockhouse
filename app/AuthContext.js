import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [mockUsers, setMockUsers] = useState({
    'Test@example.com': '123', // Predefined user
  });

  const isAuthenticated = !!user; 

  const signUp = (email, password) => {
    if (mockUsers[email]) {
      alert('User already exists!');
      return false;
    }
    setMockUsers((prevUsers) => ({
      ...prevUsers,
      [email]: password,
    }));
    setUser({ email });
    console.log('User signed up:', email);
    return true;
  };

  const login = (email, password) => {
    if (isAuthenticated) {
      alert('You are already logged in!');
      return false;
    }

    if (mockUsers[email] && mockUsers[email] === password) {
      setUser({ email });
      alert('Login successful!');
      console.log('User logged in:', email);
      return true;
    }
    alert('Invalid email or password!');
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
