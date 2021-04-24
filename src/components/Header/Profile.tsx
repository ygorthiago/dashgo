import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ygor Thiago</Text>
          <Text color="gray.300" fontSize="small">ygorthiagof@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Ygor Thiago" src="https://github.com/ygorthiago.png" />
    </Flex>
  );
}