import {
  Flex,
  SimpleGrid,
  Button,
  GridItem,
  Heading,
  Text,
  Box,
  Center,
  VisuallyHidden,
  Input,
  Select,
  Alert,
  AlertIcon,
  useToast 
} from "@chakra-ui/react";

import { useRef, useEffect, useState, forwardRef } from "react";

const SignupForm = (props, ref) => {
  const toast = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [safeAddress, setSafeAddress] = useState("");
  const [safetyLevel, setSafetyLevel] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dev = process.env.NODE_ENV !== "production";

    let form = {
      firstName,
      lastName,
      email,
      safeAddress,
      safetyLevel,
      submittedAt: new Date().toISOString(),
    };
    let response = await fetch(
      `${
        dev ? process.env.NEXT_PUBLIC_DEV_URL : process.env.NEXT_PUBLIC_PROD_URL
      }/api/submit`,
      {
        method: "POST",
        body: JSON.stringify(form),
      }
    ).then(setSubmitted(true));
    console.log(submitted)
    console.log(response.json());
  };

  return (
    <Box px={8} py={24} mx="auto">
      <SimpleGrid
        alignItems="center"
        w={{
          base: "full",
          xl: 11 / 12,
        }}
        columns={{
          base: 1,
          lg: 11,
        }}
        gap={{
          base: 0,
          lg: 24,
        }}
        mx="auto"
      >
        <GridItem
          colSpan={{
            base: "auto",
            lg: 7,
          }}
          textAlign={{
            base: "center",
            lg: "left",
          }}
        >
          <Heading
            mb={4}
            fontSize={{
              base: "3xl",
              md: "4xl",
            }}
            fontWeight="bold"
            lineHeight={{
              base: "shorter",
              md: "none",
            }}
            color="gray.900"
            _dark={{
              color: "gray.200",
            }}
            letterSpacing={{
              base: "normal",
              md: "tight",
            }}
          >
            Ready to experience scams free transactions?
          </Heading>
          <Text
            mb={{
              base: 10,
              md: 4,
            }}
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            fontWeight="thin"
            color="gray.500"
            letterSpacing="wider"
          >
            Don’t wait until it’s too late. Protect your crypto assets today
            with our secure and reliable transaction system. Try it now and
            experience peace of mind.
          </Text>
        </GridItem>
        <GridItem
          colSpan={{
            base: "auto",
            md: 4,
          }}
        >
          <Box
            as="form"
            mb={6}
            rounded="lg"
            shadow="xl"
            onSubmit={handleSubmit}
            ref={ref}
          >
            <Center
              pb={0}
              color="gray.700"
              _dark={{
                color: "gray.600",
              }}
            >
              <Text pt={2}>Sign up now</Text>
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              color="gray.500"
              _dark={{
                color: "gray.700",
              }}
            >
              <Flex>
                <VisuallyHidden>First Name</VisuallyHidden>
                <Input
                  mt={0}
                  required
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Last Name</VisuallyHidden>
                <Input
                  mt={0}
                  required
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Email Address</VisuallyHidden>
                <Input
                  required
                  mt={0}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Safe Address</VisuallyHidden>
                <Input
                  required
                  mt={0}
                  type="text"
                  placeholder="Safe Address"
                  value={safeAddress}
                  onChange={(event) => setSafeAddress(event.target.value)}
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Safety Level</VisuallyHidden>
                <Select
                  required
                  placeholder="Safety Level"
                  value={safetyLevel}
                  onChange={(event) => {
                    setSafetyLevel(event.target.value);
                  }}
                >
                  <option value="level1">Level 1</option>
                  <option value="level2">Level 2</option>
                  <option value="level3">Level 3</option>
                </Select>
              </Flex>
              <Button 
                colorScheme="purple" 
                w="full" py={2} 
                type="submit"
                onClick={() =>
                    submitted && toast({
                      title: 'Form Submmited',
                      description: "Sign up successfully!",
                      status: 'success',
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                Start for free
              </Button>
            </SimpleGrid>
          </Box>
          <Text fontSize="xs" textAlign="center" color="gray.600">
            By signing up you agree to our{" "}
            <a color="purple.500">Terms of Service</a>
          </Text>
        </GridItem>
      </SimpleGrid>
      
    </Box>
  );
};

export default forwardRef(SignupForm);
