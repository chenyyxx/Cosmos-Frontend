import {
  Link,
  Text,
  Button,
  Flex,
  Stack,
  Box,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import { useState } from "react";

const PlanB = () => {
  const topBg = "gray.100";
  const bottomBg = "white";

  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="purple.500"
            _dark={{
              color: "purple.300",
            }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <span
            mt={2}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </span>
        </Box>
      </Flex>
    );
  };

  return (
    <Box w="full" px={[10, , 4]} mx="auto" textAlign="center">
      <Text mb={2} fontSize="5xl" fontWeight="bold" lineHeight="tight">
        Plan & Pricing
      </Text>
      <Text mb={6} fontSize={["lg", , "xl"]} color="gray.600">
        Try for Free Now! No credit card required
      </Text>
      <Flex
        rounded="md"
        mx={10}
        bg={bottomBg}
        shadow="xl"
        mb="100px"
        textAlign="left"
        direction={{
          base: "column",
          lg: "row",
        }}
      >
        <Stack spacing={8} p="45px" flex="0.7">
          <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
            Premium Subscription
          </Text>
          <Text
            fontSize={["sm", , "md"]}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Unlock unlimited premium crypto security services with a monthly payment of $30, and enjoy worries free crypto transaction experiences all the time.
          </Text>
          <Flex align="center">
            <Text
              fontFamily="body"
              whiteSpace="nowrap"
              fontWeight="semibold"
              textTransform="uppercase"
              color="purple.400"
            >
              What is included
            </Text>
            <Flex
              ml="15px"
              w="full"
              borderTopWidth="1px"
              h="3px"
              borderTopColor={topBg}
            />
          </Flex>
          <SimpleGrid columns={[1, , 2, 1, 2]} spacingY={4}>
            <Feature>Unlimited Access to all services</Feature>
            <Feature>Continuous Safety Updates</Feature>
            <Feature>Automatic Blocking of Suspicious Transactions</Feature>
            <Feature>Email and Push Notification Alerts </Feature>
            <Feature>Instant Refunds</Feature>
            <Feature>Expert Consultation</Feature>
          </SimpleGrid>
        </Stack>
        <Stack
          p="45px"
          flex="0.3"
          justify="center"
          align="center"
          bg="#F9FAFB"
          _dark={{
            bg: "gray.900",
          }}
          borderRightRadius="md"
        >
          <Text fontSize="xl" fontWeight="semibold">
            Get Started with
          </Text>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color="gray.900"
            lineHeight="tight"
          >
            $30
            <Text as="span" fontSize="2xl" fontWeight="medium" color="gray.600">
              {" "}
              / month
            </Text>
          </Text>
          <Button w="300px" colorScheme="purple" py={6}>
            Get Access Now
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default PlanB;
