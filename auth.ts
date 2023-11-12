import { adminAuth, adminDb } from '@/firebase-admin';
import { NextAuthOptions } from 'next-auth';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import * as GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;

        const firebaseToken = await adminAuth.createCustomToken(token.sub);
        session.firebaseToken = firebaseToken;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  adapter: FirestoreAdapter(adminDb),
};
