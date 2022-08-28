import React from 'react';
import { trpc } from '../utils/trpc';

const MessagesList = () => {
  const { data: messages, isLoading } = trpc.useQuery(['guestbook.getAll']);

  if (isLoading) return <div>Fetching messages...</div>;

  return (
    <div>
      {messages?.map((msg) => {
        return (
          <div key={msg.id}>
            <p>{msg.message}</p>
            <span>- {msg.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MessagesList;
