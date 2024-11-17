/* eslint-disable prettier/prettier */
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '~/utils/supabase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error signing up', error.message);
    } else {
      setEmail('');
      setPassword('');
    }
  };

  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error signing up', error.message);
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View className="gap-3 p-3">
      <TextInput
        placeholder="Email"
        className="w-full rounded-md border border-gray-300 bg-white p-4"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        className="w-full rounded-md border border-gray-300 bg-white p-4"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View className=" flex-row items-center justify-center gap-3">
        <Pressable className=" flex-1 rounded bg-blue-400 p-3" onPress={signIn}>
          <Text className=" text-center font-medium text-white">Sign in</Text>
        </Pressable>

        <Pressable className=" flex-1 rounded bg-blue-400 p-3" onPress={signUp}>
          <Text className=" text-center font-medium text-white">Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
