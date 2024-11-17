/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { supabase } from '~/utils/supabase';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsReady(true);
    });

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  console.log('19', session);

  return (
    <AuthContext.Provider value={{ session, user: session?.user }}>{children}</AuthContext.Provider>
  );
};
