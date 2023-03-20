import {
    Flex,
    IconButton,
    Button,
    Link,
    useDisclosure,
    CloseButton,
    VStack,
    HStack,
    Spacer,
} from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import Image from 'next/image'
import Logo from '../public/Cosmos-logos_transparent.png'

import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export default function Nav() {
    const bg = "white";
    const ref = useRef(null);
    const [y, setY] = useState(0);
    const height = ref.current ? ref.current.getBoundingClientRect() : 0;
    const { scrollY } = useScroll();
    useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);
    const cl = "gray.800";
    const mobileNav = useDisclosure();

    const MobileNavContent = (
        <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
            />
            <Button w="full" variant="ghost">
                Features
            </Button>
            <Button w="full" variant="ghost">
                Pricing
            </Button>
            <Button w="full" variant="ghost">
                Contact
            </Button>
        </VStack>
    );
    return (
        <Flex
            ref={ref}
            position={"fixed"}
            shadow={y > height ? "sm" : undefined}
            transition="box-shadow 0.2s"
            bg={bg}
            borderTop="6px solid"
            borderTopColor="purple.400"
            w="full"
            overflowY="hidden"
            justifyContent="center"
            zIndex={1}
        >
            <Flex
                w="full"
                h="4.5rem"
                mx="auto"
                maxW="1200px"
                px="6"
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex align="flex-start" pr="48px">
                    <Link href="/">
                        <HStack>
                            <Image
                                height={196}
                                src={Logo}
                                alt="Picture of the author"
                            />
                        </HStack>
                    </Link>
                </Flex>
                <Flex>
                    <HStack
                        spacing="5"
                        display={{
                            base: "none",
                            md: "flex",
                        }}
                    >
                        <Button
                            bg={bg}
                            color="gray.500"
                            display="inline-flex"
                            alignItems="center"
                            fontSize="md"
                            _hover={{
                                color: cl,
                            }}
                            _focus={{
                                boxShadow: "none",
                            }}
                            rightIcon={<IoIosArrowDown />}
                        >
                            Features
                        </Button>
                        <Button
                            bg={bg}
                            color="gray.500"
                            display="inline-flex"
                            alignItems="center"
                            fontSize="md"
                            _hover={{
                                color: cl,
                            }}
                            _focus={{
                                boxShadow: "none",
                            }}
                        >
                            Pricing
                        </Button>
                        <Button
                            bg={bg}
                            color="gray.500"
                            display="inline-flex"
                            alignItems="center"
                            fontSize="md"
                            _hover={{
                                color: cl,
                            }}
                            _focus={{
                                boxShadow: "none",
                            }}
                        >
                            Contact
                        </Button>
                    </HStack>
                </Flex>
                <Spacer />
                <Flex justify="flex-end" align="center" color="gray.400">
                    <HStack
                        spacing="5"
                        display={{
                            base: "none",
                            md: "flex",
                        }}
                    >
                        <Button colorScheme="purple" variant="ghost" size="sm">
                            Log In
                        </Button>
                        <Button colorScheme="purple" variant="solid" size="sm">
                            Start for Free
                        </Button>
                    </HStack>
                    <IconButton
                        display={{
                            base: "flex",
                            md: "none",
                        }}
                        aria-label="Open menu"
                        fontSize="20px"
                        color="gray.800"
                        _dark={{
                            color: "inherit",
                        }}
                        variant="ghost"
                        icon={<AiOutlineMenu />}
                        onClick={mobileNav.onOpen}
                    />
                </Flex>
            </Flex>
            {MobileNavContent}
        </Flex>
    );
}
