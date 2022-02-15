import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supaclient";

export const Loginc = createContext(null);

export default function Logincontext(props) {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();

    setuser(session?.user ?? null);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setuser(session?.user ?? null);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  }


  return <Loginc.Provider value={value}>{props.children}</Loginc.Provider>;
}
