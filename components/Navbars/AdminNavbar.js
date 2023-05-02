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
  const { variant, children, fixed, secondary, brandText, onOpen, ...rest } =
    props;

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
    <Flex
      position={navbarPosition}
      top="16px"
      left="50%"
      transform="translate(-50%, 0px)"
      background={navbarBg}
      border={navbarBorder}
      boxShadow={navbarShadow}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderRadius="15px"
      px="16px"
      py="22px"
      mx="auto"
      width="1044px"
      maxW="90%"
      alignItems="center"
      // overflowY="hidden"
      h="4.5rem"
    >
      <Flex
        w="100%"
        justifyContent={"space-between" }
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Link href="/">
            <HStack>
              <Image height={196} src={Logo} alt="Picture of the author" />
            </HStack>
          </Link>
        </Box>
      </Flex>
      <Box ms="auto" >
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
          />
        </Box>
    </Flex>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
