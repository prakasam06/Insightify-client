import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../api/auth';
import Loading from './../components/Loading';

const JWTAuthContext = React.createContext();

export const useAuth = () => {
  return useContext(JWTAuthContext);
};

const JWTAuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setError(error);
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const res = await auth.signin(email, password);
      setCurrentUser(res.user);
      setLoading(false);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await auth.signout();
      setCurrentUser(undefined);
      setIsAuthenticated(false);
      setLoading(false);
      navigate('/');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const signUp = async (values) => {
    try {
      setLoading(true);
      const res = await auth.signup(values);
      setCurrentUser(res.user);
      setLoading(false);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const updateUserData = async (data) => {
    try {
      setLoading(true);
      const res = await auth.updateUserData(data);
      setCurrentUser(res.user);
      setLoading(false);
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };
  const updatePassword = async (currentPassword, password, passwordConfirm) => {
    try {
      setLoading(true);
      const res = await auth.updatePassword(
        currentPassword,
        password,
        passwordConfirm
      );
      setCurrentUser(res.user);
      setLoading(false);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const forgetPassword = async (email) => {
    try {
      setLoading(true);
      await auth.forgetPassword(email);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const resetPassword = async (token, password, confirmPassword) => {
    try {
      setLoading(true);
      const res = await auth.resetPassword(token, password, confirmPassword);
      setCurrentUser(res.user);
      setLoading(false);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    auth
      .getMe()
      .then((user) => {
        setCurrentUser(user.user);
        setLoading(false);
        setIsAuthenticated(true);
        navigate('/dashboard');
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const value = {
    signIn,
    signOut,
    signUp,
    forgetPassword,
    resetPassword,
    updatePassword,
    updateUserData,
    handleError,
    currentUser,
    error,
    loading,
    isAuthenticated,
  };

  return loading ? (
    <Loading />
  ) : (
    <JWTAuthContext.Provider value={value}>{children}</JWTAuthContext.Provider>
  );
};

export default JWTAuthenticationProvider;
