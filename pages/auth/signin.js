import React from "react";
// Chakra imports
import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
    Image,
    Portal,
} from "@chakra-ui/react";

import AuthNavbar from 'components/Navbars/AuthNavbar.js';
// Assets

function SignIn() {
    const wrapper = React.createRef();
    // Chakra color mode
    const titleColor = useColorModeValue("purple.300", "purple.200");
    const textColor = useColorModeValue("gray.400", "white");
    const navRef = React.useRef();
    return (
        <Box ref={navRef} w="100%">
            <Portal containerRef={navRef}>
                <AuthNavbar
                    logoText="PURITY UI DASHBOARD"
                />
            </Portal>
            <Box w="100%">
                <Box ref={wrapper} w="100%">
                    <Flex position="relative" mb="40px">
                        <Flex
                            h={{ sm: "initial", md: "75vh", lg: "85vh" }}
                            w="100%"
                            maxW="1044px"
                            mx="auto"
                            justifyContent="space-between"
                            mb="30px"
                            pt={{ sm: "100px", md: "0px" }}
                        >
                            <Flex
                                alignItems="center"
                                justifyContent="start"
                                style={{ userSelect: "none" }}
                                w={{ base: "100%", md: "50%", lg: "42%" }}
                            >
                                <Flex
                                    direction="column"
                                    w="100%"
                                    background="transparent"
                                    p="48px"
                                    mt={{ md: "150px", lg: "80px" }}
                                >
                                    <Heading
                                        color={titleColor}
                                        fontSize="32px"
                                        mb="10px"
                                    >
                                        Welcome Back
                                    </Heading>
                                    <Text
                                        mb="36px"
                                        ms="4px"
                                        color={textColor}
                                        fontWeight="bold"
                                        fontSize="14px"
                                    >
                                        Enter your email and password to sign in
                                    </Text>
                                    <FormControl>
                                        <FormLabel
                                            ms="4px"
                                            fontSize="sm"
                                            fontWeight="normal"
                                        >
                                            Email
                                        </FormLabel>
                                        <Input
                                            borderRadius="15px"
                                            mb="24px"
                                            fontSize="sm"
                                            type="text"
                                            placeholder="Your email adress"
                                            size="lg"
                                        />
                                        <FormLabel
                                            ms="4px"
                                            fontSize="sm"
                                            fontWeight="normal"
                                        >
                                            Password
                                        </FormLabel>
                                        <Input
                                            borderRadius="15px"
                                            mb="36px"
                                            fontSize="sm"
                                            type="password"
                                            placeholder="Your password"
                                            size="lg"
                                        />
                                        <FormControl
                                            display="flex"
                                            alignItems="center"
                                        >
                                            <Switch
                                                id="remember-login"
                                                colorScheme="purple"
                                                me="10px"
                                            />
                                            <FormLabel
                                                htmlFor="remember-login"
                                                mb="0"
                                                ms="1"
                                                fontWeight="normal"
                                            >
                                                Remember me
                                            </FormLabel>
                                        </FormControl>
                                        <Button
                                            as={Link}
                                            href="/dashboard"
                                            fontSize="10px"
                                            type="submit"
                                            bg="purple.300"
                                            w="100%"
                                            h="45"
                                            mb="20px"
                                            color="white"
                                            mt="20px"
                                            _hover={{
                                                bg: "purple.200",
                                            }}
                                            _active={{
                                                bg: "purple.400",
                                            }}
                                        >
                                            SIGN IN
                                        </Button>
                                    </FormControl>
                                    <Flex
                                        flexDirection="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        maxW="100%"
                                        mt="0px"
                                    >
                                        <Text
                                            color={textColor}
                                            fontWeight="medium"
                                        >
                                            {"Don't have an account?"}
                                            <Link
                                                color={titleColor}
                                                href="/auth/signup"
                                                ms="5px"
                                                fontWeight="bold"
                                            >
                                                Sign Up
                                            </Link>
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Box
                                display={{ base: "none", md: "block" }}
                                overflowX="hidden"
                                h="100%"
                                w="40vw"
                                position="absolute"
                                right="0px"
                            >
                                <Box
                                    bgGradient={[
                                        "linear(to-tr, teal.300, yellow.400)",
                                        "linear(to-t, blue.200, teal.500)",
                                        "linear(to-b, orange.100, purple.300)",
                                    ]}
                                    w="100%"
                                    h="100%"
                                    bgSize="cover"
                                    bgPosition="50%"
                                    position="absolute"
                                    borderBottomLeftRadius="20px"
                                ></Box>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}

export default SignIn;
