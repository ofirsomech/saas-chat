'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface ReactChildren {
  children: React.ReactNode;
}

const FirebaseAuthProvider = (children: ReactChildren) => {
  const { data: session } = useSession();
  useEffect(() => {}, []);
  return <>{children}</>;
};

export default FirebaseAuthProvider;
