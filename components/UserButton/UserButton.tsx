'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserAvatar from '@/components/UserAvatar/UserAvatar';
import { Session } from 'next-auth';
import { Button } from '@/components/ui/button';
import { signIn, signOut } from 'next-auth/react';

function UserButton({ session }: { session: Session | null }) {
  //subscription


  //Session
  if (!session)
    return (
      <>
        <Button
          className="dark:text-white"
          variant={'outline'}
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      </>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name={session?.user?.name!} image={session?.user?.image!} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
