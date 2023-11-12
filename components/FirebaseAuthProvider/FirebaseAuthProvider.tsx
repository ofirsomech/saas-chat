'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { signInWithCustomToken } from 'firebase/auth';
import { auth } from '@/firebase';

const syncFirebaseAuth = async (session: Session) => {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken);
    } catch (e) {
      console.error('Error signing in with custom token:', e);
    }
  } else {
    auth.signOut();
  }
};

const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) return;

    syncFirebaseAuth(session);
  }, [session]);

  return <>{children}</>;
};

export default FirebaseAuthProvider;
