import { Link, router, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useAuth } from '~/context/AuthContext';
import { supabase } from '~/utils/supabase';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const { user } = useAuth();

  const search = () => {
    router.push('/search');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home Screen',
          headerRight: () => (
            <View className="m-3">
              {!user ? (
                <Link href="/(auth)/login">Login</Link>
              ) : (
                <Pressable onPress={() => supabase.auth.signOut()}>
                  <Text>Logout</Text>
                </Pressable>
              )}
            </View>
          ),
        }}
      />

      <View className=" m-3 flex-row items-center justify-between gap-3">
        <TextInput
          placeholder="Type something here"
          className="flex-1 rounded border border-gray-300 bg-white p-3"
          value={searchText}
          onChangeText={setSearchText}
        />

        <Pressable onPress={search} className=" rounded bg-blue-400 p-3 ">
          <Text className=" font-medium text-white">Search</Text>
        </Pressable>
      </View>
    </>
  );
}
