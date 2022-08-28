import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { trpc } from '../utils/trpc';

type MessageProps = {
  name: string;
  message: string;
};

const Message = ({ name, message }: MessageProps) => {
  return (
    <Flex
      width="400px"
      padding="8px 16px"
      border="1px solid"
      borderColor="gray.700"
      borderRadius="lg"
      gap="16px"
      boxShadow="md"
    >
      <Avatar name={name} />
      <Flex direction="column">
        <Text fontWeight="700">{name}</Text>
        <Text>{message}</Text>
      </Flex>
    </Flex>
  );
};

const MessagesList = () => {
  const { data: messages, isLoading } = trpc.useQuery(['guestbook.getAll']);

  if (isLoading) return <div>Fetching messages...</div>;

  return (
    <Flex direction="column" gap="16px">
      {messages?.map((msg) => {
        return <Message key={msg.id} name={msg.name} message={msg.message} />;
      })}
    </Flex>
  );
};

export default MessagesList;
