import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../config/axios';
import {
  getAccessToken,
  removeToken,
  setAccessToken,
} from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get('/users/me');
          setUser(resMe.data.user);
        }
      } catch (err) {
        removeToken();
        navigate('/login');
      }
    };
    fetchMe();
  }, []);

  const signUp = async (input) => {
    const res = await axios.post('auth/signup', input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };

  const login = async (input) => {
    // console.log(input);
    const res = await axios.post('auth/login', input);
    const token = res.data.token;
    // console.log(token);
    setAccessToken(token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };

  const logout = async (input) => {
    setUser(null);
    removeToken();
  };

  return (
    <AuthContext.Provider value={{ signUp, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
export { AuthContext };
