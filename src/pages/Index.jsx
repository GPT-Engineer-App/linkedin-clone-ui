import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Avatar, Text, Button, IconButton, Container, VStack, HStack, Divider, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaUserFriends, FaRegBell, FaHome, FaBriefcase, FaCommentDots } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const navbarBg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box>
      {/* Navbar */}
      <Flex bg={navbarBg} paddingY="2" justifyContent="space-between" alignItems="center">
        <Heading marginLeft="8" size="md">
          Franchise King
        </Heading>
        <InputGroup width="md" marginRight="8">
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input placeholder="Search" />
        </InputGroup>
        <HStack spacing="6" marginRight="8">
          <IconButton icon={<FaHome />} aria-label="Home" />
          <IconButton icon={<FaUserFriends />} aria-label="My Network" />
          <IconButton icon={<MdWork />} aria-label="Jobs" />
          <IconButton icon={<FaBriefcase />} aria-label="Messaging" />
          <IconButton icon={<FaCommentDots />} aria-label="Notifications" />
          <Avatar size="sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MDkzNzg4MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </HStack>
      </Flex>
      {/* Content */}
      <Container maxW="container.xl" paddingY="6">
        <Flex>
          {/* Sidebar */}
          <VStack alignItems="flex-start" spacing="4" marginRight="6">
            <Box padding="4" bg={bg} borderRadius="lg" width="sm">
              <Avatar size="xl" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MDkzNzg4MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" marginBottom="4" />
              <Heading size="md">John Doe</Heading>
              <Text fontSize="sm" color="gray.500">
                Software Engineer at Tech Corp
              </Text>
              <Divider marginY="4" />
              <Text fontSize="sm">
                Connections <strong>54</strong>
              </Text>
              <Button leftIcon={<FaUserFriends />} colorScheme="blue" size="sm" marginTop="3">
                Connect
              </Button>
            </Box>
            <Box padding="4" bg={bg} borderRadius="lg" width="sm">
              <Text fontWeight="bold" marginBottom="3">
                Recent
              </Text>
              {/* List of recent items */}
              {/* Placeholder content */}
              <Text fontSize="sm">Tech News</Text>
              <Text fontSize="sm">Coding Communities</Text>
              <Text fontSize="sm">Software Engineering</Text>
            </Box>
          </VStack>
          {/* Main Content */}
          <Box flex="1" bg={bg} borderRadius="lg" padding="4">
            <Heading size="lg" marginBottom="4">
              Your Feed
            </Heading>
            {/* Feed items */}
            {/* Placeholder content */}
            <Stack spacing="4">
              <Box bg="gray.100" padding="4" borderRadius="lg">
                <HStack spacing="4">
                  <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5Mzc4ODE0fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                  <VStack alignItems="flex-start">
                    <Heading size="sm">Jane Smith</Heading>
                    <Text fontSize="xs" color="gray.500">
                      Posted 2h ago
                    </Text>
                  </VStack>
                </HStack>
                <Text marginTop="3">Excited to share that I've started a new position as a Frontend Developer at Amazing Company!</Text>
              </Box>
              {/* Repeat for more feed items */}
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
