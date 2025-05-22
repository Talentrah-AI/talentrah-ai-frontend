'use client'
import axios from 'axios';
import Cookies from 'js-cookie';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// Register a new user
export const register = async (username: string, email: string, password: string) => {
  try {
    const payload = { username, email, password };
    console.log('Register payload:', payload);
    const response = await axios.post(`${STRAPI_API_URL}/api/auth/local/register`, payload);
    console.log('Register response:', response.data);
    return response.data; // { jwt, user }
  } catch (error: any) {
    console.error('Strapi registration error:', error.response?.data);
    throw new Error(error.response?.data?.error?.message || 'Registration failed');
  }
};

// Login a user
export const login = async (email: string, password: string) => {
  try {
    const payload = { identifier: email, password };
    console.log('Login payload:', payload);
    const response = await axios.post(`${STRAPI_API_URL}/api/auth/local`, payload);
    console.log('Login response:', response.data);
    return response.data; // { jwt, user }
  } catch (error: any) {
    console.error('Strapi login error:', error.response?.data);
    throw new Error(error.response?.data?.error?.message || 'Login failed');
  }
};

// Fetch authenticated user
export const getAuthenticatedUser = async (token: string) => {
  try {
    console.log('Fetching user with token:', token);
    const response = await axios.get(`${STRAPI_API_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('User fetch response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Strapi user fetch error:', error.response?.data);
    throw new Error(error.response?.data?.error?.message || 'Failed to fetch user');
  }
};

// Store JWT token
export const setAuthToken = (token: string) => {
  console.log('Setting token:', token);
  Cookies.set('token', token, { expires: 7, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });
};

// Get JWT token
export const getAuthToken = () => {
  const token = Cookies.get('token');
  console.log('Retrieved token:', token);
  return token;
};

// Remove JWT token
export const removeAuthToken = () => {
  console.log('Removing token');
  Cookies.remove('token');
};