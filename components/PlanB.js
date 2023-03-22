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

const PlanB = (props) => {
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
            Pay as you go
          </Text>
          <Text
            fontSize={["sm", , "md"]}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Enjoy using the service with a deposit as low as as $100. Fee
            will be charged on transaction based. Everytime a front running
            process occurs to block transaction, you will be charged a total of
            1.2x of front running fee. (min$5 and max $300).
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
            <Feature>Cancel Anytime</Feature>
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
          <Flex
            align="center"
            fontSize="5xl"
            fontWeight={["bold", , "extrabold"]}
            lineHeight="tight"
          >
            $100
            <Text
              as={"span"}
              ml={2}
              fontSize="2xl"
              fontWeight="medium"
              color="gray.600"
            >
              {" "}
              Deposit
            </Text>
          </Flex>
          <Text fontSize="xl" fontWeight="semibold">
            plus
          </Text>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color="gray.900"
            lineHeight="tight"
          >
            20{"%"}
            <Text as="span" fontSize="2xl" fontWeight="medium" color="gray.600">
              {" "}
              per
            </Text>
          </Text>
          <Text as="span" fontSize="2xl" fontWeight="medium" color="gray.600">
              {" "}
              transaction blocked
            </Text>
          <Stack spacing={1} align="center">
            <Text textDecor="underline" color="gray.600">
              1.2 x original front running fee
            </Text>
            <Text textDecor="underline" color="gray.600">
              (min $5, max $300)
            </Text>
          </Stack>
          <Button w="300px" colorScheme="purple" py={6} onClick={props.handleClick}>
            Get Access Now
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default PlanB;
