// Chakra Imports
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import AdminNavbarLinks from "./AdminNavbarLinks";
import Logo from "/public/Cosmos-logos_transparent.png";
import Image from "next/image";

export default function AdminNavbar(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const [scrolled, setScrolled] = useState(false);
  const {
    variant,
    children,
    fixed,
    secondary,
    brandText,
    onOpen,
    ...rest
  } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue("gray.700", "gray.200");
  let secondaryText = useColorModeValue("gray.400", "gray.200");
  // let navbarPosition = "absolute";
  // let navbarFilter = "none";
  let navbarBackdrop = "blur(21px)";
  // let navbarShadow = "none";
  // let navbarBg = "none";
  // let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  // if (props.fixed === true)
  //   if (scrolled === true) {
  let navbarPosition = "fixed";
  let navbarShadow = useColorModeValue(
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
    "none"
  );
  let navbarBg = useColorModeValue(
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  let navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
  let navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
  );
    // }
  if (props.secondary) {
    navbarBackdrop = "none";
    navbarPosition = "absolute";
    mainText = "white";
    secondaryText = "white";
    secondaryMargin = "22px";
    paddingX = "30px";
  }
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <VStack w="full" px='24px' mx="auto">
      <Flex
        position={navbarPosition}
        boxShadow={navbarShadow}
        bg={navbarBg}
        borderColor={navbarBorder}
        filter={navbarFilter}
        backdropFilter={navbarBackdrop}
        borderWidth="1.5px"
        borderStyle="solid"
        transitionDelay="0s, 0s, 0s, 0s"
        transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
        transition-property="box-shadow, background-color, filter, border"
        transitionTimingFunction="linear, linear, linear, linear"
        alignItems={{ xl: "center" }}
        borderRadius="16px"
        display="flex"
        h="4.5rem"
        minH="75px"
        justifyContent={{ xl: "center" }}
        lineHeight="25.6px"
        mx="auto"
        mt={secondaryMargin}
        pb="8px"
        // left={document.documentElement.dir === "rtl" ? "30px" : ""}
        // right={document.documentElement.dir === "rtl" ? "" : "30px"}
        px={{
          sm: paddingX,
          md: "30px",
        }}
        ps={{
          xl: "12px",
        }}
        pt="8px"
        top="18px"
        w='85%'
        maxW={'1100px'}
      >
        <Flex
          w="100%"
          flexDirection={{
            sm: "column",
            md: "row",
          }}
          alignItems={{ xl: "center" }}
        >
          <Box mb={{ sm: "8px", md: "0px" }}>
            
            {/* Here we create navbar brand, based on route name */}
            {/* <Link
              color={mainText}
              href="/"
              bg="inherit"
              borderRadius="inherit"
              fontWeight="bold"
              _hover={{ color: { mainText } }}
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Text fontSize='2xl' color={textColor} fontWeight='bold'>
              {brandText}
            </Text>
            </Link> */}
            <Link
            href='/'
        >
            <HStack>
              <Image height={196} src={Logo} alt="Picture of the author" />
            </HStack>
        </Link>
          </Box>
          <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
            <AdminNavbarLinks
              onOpen={props.onOpen}
              logoText={props.logoText}
              secondary={props.secondary}
              fixed={props.fixed}
            />
          </Box>
        </Flex>
      </Flex>
    </VStack>
    
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
