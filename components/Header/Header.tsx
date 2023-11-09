import React from 'react';
import Logo from '../Logo/Logo';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import UserButton from '@/components/UserButton/UserButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import Link from 'next/link';
import { MessagesSquareIcon } from 'lucide-react';

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 items-center justify-end space-x-4">
          {/* LanguageSelect */}
          {session ? (
            <>
              <Link href={'/chat'} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
            </>
          ) : (
            <>
              <Link href="/pricing">Pricing</Link>
            </>
          )}
          <DarkModeToggle />

          {/*user btn*/}
          <UserButton />
        </div>
      </nav>

      {/*  upgrade banner */}
    </header>
  );
}
