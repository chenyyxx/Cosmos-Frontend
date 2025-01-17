// Chakra imports
import AuthNavbar from "@/components/Navbars/AuthNavbar";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Icon,
    Input,
    Link,
    Portal,
    Switch,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

function SignUp() {
    const wrapper = React.createRef();
    const navRef = React.useRef();
    const titleColor = useColorModeValue("purple.300", "purple.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("purple.200", "rgba(255, 255, 255, 0.5)");
    return (
        <Box ref={navRef} w="100%">
            <Portal containerRef={navRef}>
                <AuthNavbar logoText="PURITY UI DASHBOARD" />
            </Portal>
            <Box w="100%">
                <Box ref={wrapper} w="100%">
                    <Flex
                        direction="column"
                        alignSelf="center"
                        justifySelf="center"
                        overflow="hidden"
                    >
                        <Box
                            position="absolute"
                            minH={{ base: "70vh", md: "50vh" }}
                            w={{ md: "calc(100vw - 50px)" }}
                            borderRadius={{ md: "15px" }}
                            left="0"
                            right="0"
                            bgRepeat="no-repeat"
                            overflow="hidden"
                            zIndex="-1"
                            top="0"
                            bgGradient={[
                                "linear(to-tr, teal.400, yellow.600)",
                                "linear(to-t, blue.300, teal.600)",
                                "linear(to-b, orange.200, purple.400)",
                            ]}
                            bgSize="cover"
                            mx={{ md: "auto" }}
                            mt={{ md: "14px" }}
                        ></Box>
                        <Flex
                            direction="column"
                            textAlign="center"
                            justifyContent="center"
                            align="center"
                            mt="6.5rem"
                            mb="30px"
                            
                        >
                            <Text
                                fontSize="4xl"
                                color="white"
                                fontWeight="bold"
                            >
                                Ready to experience scams
                            </Text>
                            <Text
                                fontSize="4xl"
                                color="white"
                                fontWeight="bold"
                            >
                                free transactions?
                            </Text>
                            <Text
                                fontSize="md"
                                color="white"
                                fontWeight="normal"
                                mt="10px"
                                mb="26px"
                                w={{
                                    base: "90%",
                                    sm: "60%",
                                    lg: "40%",
                                    xl: "30%",
                                }}
                            >
                                Don’t wait until it’s too late. Protect your crypto assets today
                                with our secure and reliable transaction system. Try it now and
                                experience peace of mind.
                            </Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            mb="60px"
                            mt="20px"
                        >
                            <Flex
                                direction="column"
                                w="445px"
                                background="transparent"
                                borderRadius="15px"
                                p="40px"
                                mx={{ base: "100px" }}
                                bg={bgColor}
                                boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                            >
                                <Text
                                    fontSize="xl"
                                    color={textColor}
                                    fontWeight="bold"
                                    textAlign="center"
                                    mb="22px"
                                >
                                    Register With
                                </Text>
                                <HStack
                                    spacing="15px"
                                    justify="center"
                                    mb="22px"
                                >
                                    <Flex
                                        justify="center"
                                        align="center"
                                        w="75px"
                                        h="75px"
                                        borderRadius="15px"
                                        border="1px solid lightgray"
                                        cursor="pointer"
                                        transition="all .25s ease"
                                        _hover={{
                                            filter: "brightness(120%)",
                                            bg: bgIcons,
                                        }}
                                    >
                                        <Link href="#">
                                            <Icon
                                                as={FaFacebook}
                                                w="30px"
                                                h="30px"
                                                _hover={{
                                                    filter: "brightness(120%)",
                                                }}
                                            />
                                        </Link>
                                    </Flex>
                                    <Flex
                                        justify="center"
                                        align="center"
                                        w="75px"
                                        h="75px"
                                        borderRadius="15px"
                                        border="1px solid lightgray"
                                        cursor="pointer"
                                        transition="all .25s ease"
                                        _hover={{
                                            filter: "brightness(120%)",
                                            bg: bgIcons,
                                        }}
                                    >
                                        <Link href="#">
                                            <Icon
                                                as={FaApple}
                                                w="30px"
                                                h="30px"
                                                _hover={{
                                                    filter: "brightness(120%)",
                                                }}
                                            />
                                        </Link>
                                    </Flex>
                                    <Flex
                                        justify="center"
                                        align="center"
                                        w="75px"
                                        h="75px"
                                        borderRadius="15px"
                                        border="1px solid lightgray"
                                        cursor="pointer"
                                        transition="all .25s ease"
                                        _hover={{
                                            filter: "brightness(120%)",
                                            bg: bgIcons,
                                        }}
                                    >
                                        <Link href="#">
                                            <Icon
                                                as={FaGoogle}
                                                w="30px"
                                                h="30px"
                                                _hover={{
                                                    filter: "brightness(120%)",
                                                }}
                                            />
                                        </Link>
                                    </Flex>
                                </HStack>
                                <Text
                                    fontSize="lg"
                                    color="gray.400"
                                    fontWeight="bold"
                                    textAlign="center"
                                    mb="22px"
                                >
                                    or
                                </Text>
                                <FormControl>
                                    <FormLabel
                                        ms="4px"
                                        fontSize="sm"
                                        fontWeight="normal"
                                    >
                                        Name
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="text"
                                        placeholder="Your full name"
                                        mb="24px"
                                        size="lg"
                                    />
                                    <FormLabel
                                        ms="4px"
                                        fontSize="sm"
                                        fontWeight="normal"
                                    >
                                        Email
                                    </FormLabel>
                                    <Input
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="email"
                                        placeholder="Your email address"
                                        mb="24px"
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
                                        fontSize="sm"
                                        ms="4px"
                                        borderRadius="15px"
                                        type="password"
                                        placeholder="Your password"
                                        mb="24px"
                                        size="lg"
                                    />
                                    <FormControl
                                        display="flex"
                                        alignItems="center"
                                        mb="24px"
                                    >
                                        <Switch
                                            id="remember-login"
                                            colorScheme="purple"
                                            me="10px"
                                        />
                                        <FormLabel
                                            htmlFor="remember-login"
                                            mb="0"
                                            fontWeight="normal"
                                        >
                                            Remember me
                                        </FormLabel>
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        bg="purple.300"
                                        fontSize="10px"
                                        color="white"
                                        fontWeight="bold"
                                        w="100%"
                                        h="45"
                                        mb="24px"
                                        _hover={{
                                            bg: "purple.200",
                                        }}
                                        _active={{
                                            bg: "purple.400",
                                        }}
                                    >
                                        SIGN UP
                                    </Button>
                                </FormControl>
                                <Flex
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    maxW="100%"
                                    mt="0px"
                                >
                                    <Text color={textColor} fontWeight="medium">
                                        Already have an account?
                                        <Link
                                            color={titleColor}
                                            href="/auth/signin"
                                            ms="5px"
                                            fontWeight="bold"
                                        >
                                            Sign In
                                        </Link>
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}

export default SignUp;
