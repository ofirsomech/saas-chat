import React from 'react';
import { cn } from '@/lib/utils';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { className } from 'postcss-selector-parser';
import Image from 'next/image';

function UserAvatar(props: PropsState) {
  return (
    <Avatar className={cn('bg-white text-black', props.className)}>
      {props.image && (
        <Image
          src={props.image || ''}
          alt={props.name || ''}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      {/*<AvatarImage src="https://github.com/shadcn.png"/>*/}
      <AvatarFallback className="dark:bg-white dark:text-black text-lg">
        {props?.name
          ?.split(' ')
          .map((n) => n[0])
          .join('')}
      </AvatarFallback>
    </Avatar>
  );
}

interface PropsState {
  name: string;
  image: string;
  className?: string;
}

export default UserAvatar;
