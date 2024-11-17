import { useEffect, useState } from 'react';
import '../global.css';

import { Redirect, Stack } from 'expo-router';
import { supabase } from '~/utils/supabase';
import { AuthContextProvider } from '~/context/AuthContext';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen
          name="(auth)/login"
          options={{
            // presentation: 'modal',
            headerTitle: 'Authentication',
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </AuthContextProvider>
  );
}
