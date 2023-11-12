'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { useSession } from 'next-auth/react';

const CheckoutButton = (props: PropTypes) => {
  const { data: session } = useSession();

  async function createCheckoutSession() {
    if (!session) return;


    // push document into firebase db

    // ... stripe extension on firebase will create a checkout session
    // redirect user to check out page
  }

  return (
    <div className="flex flec-col space-y-2">
      {/*If subscribe show the user*/}

      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white
                 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80
                 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
      >
        Sign Up
      </button>
    </div>
  );
};

interface PropTypes {}

export default CheckoutButton;
