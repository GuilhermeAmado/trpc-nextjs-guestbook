import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Button,
  FlexProps,
  Avatar,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = (props: FlexProps) => {
  const { data: session, status } = useSession();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem 2rem"
      bg="blue.900"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="md" letterSpacing={'-.1rem'}>
          GuestBook
        </Heading>
      </Flex>

      <Box>
        {!session && (
          <Button
            size="sm"
            bg="transparent"
            border="1px"
            onClick={() => signIn('github')}
          >
            Login with Github
          </Button>
        )}

        {session && (
          <Flex alignItems="center" gap="16px">
            <Avatar
              name={session.user?.name ?? ''}
              src={session.user?.image ?? undefined}
              size="sm"
            />
            <Button
              size="sm"
              bg="transparent"
              border="1px"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
