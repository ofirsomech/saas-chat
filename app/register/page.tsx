import React from 'react';
import PropTypes from 'prop-types';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import SvgBackground from '@/components/svg-background/svg-background';
import PricingCards from '@/components/PricingCards/PricingCards';

const Register = async (props: PropTypes) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="isolate h-full overflow-hidden bg-gray-900 pb-40 ">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Lets handle your Membership {session?.user?.name?.split(' ')?.[0]}
          </p>
        </div>
        <SvgBackground id="radial-gradient" />
      </div>
      <PricingCards redirect={false} />
    </div>
  );
};

interface PropTypes {}

export default Register;
