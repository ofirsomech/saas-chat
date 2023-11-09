"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquarePlusIcon, MessagesSquareIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CreateChatButton = () => {
  const router = useRouter();

  const createNewChat = async() => {
    router.push('/chat/abc');
  };

  return (
    <Button onClick={createNewChat} variant={'ghost'}>
      <MessageSquarePlusIcon />
    </Button>
  );
};

export default CreateChatButton;
