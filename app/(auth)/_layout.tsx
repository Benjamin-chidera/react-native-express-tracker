/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { Redirect, Slot } from 'expo-router';
import { useAuth } from '~/context/AuthContext';

const Layout = () => {
  const { user } = useAuth();

  if (user) {
    return <Redirect href={'/'} />;
  }

  return <Slot />;
};

export default Layout;
