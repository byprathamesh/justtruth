import { useState, useEffect } from 'react';
import { signIn, signUp, signOut, getCurrentUser } from './auth';

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for current user on mount
    getCurrentUser().then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
} 