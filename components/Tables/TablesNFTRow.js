import React, { useState } from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Badge,
  Switch,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Nft1 from "public/NFTs/nft1.svg";

function TablesNFTRow(props) {
  const { icon, name, status } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const [protectionStatus, setProtectionStatus] = useState(status);
  const [switched, setSwitched] = useState(status == "On" ? true : false);
  const onSwitch = (value) => {
    setProtectionStatus(value);
  }
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {icon}
          <Flex pl='50px' direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            View Transaction
          </Text>
        </Button>
      </Td>
      <Td>
        <Badge
          bg={protectionStatus === "On" ? "green.400" : bgStatus}
          color={protectionStatus === "On" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {protectionStatus}
        </Badge>
      </Td>
      <Td>
        <Switch colorScheme='teal' size='lg'
          isChecked={switched}
          onChange={(event) => {
            if (switched === true) {
              onSwitch("Off");
              setSwitched(false);
            } else {
              onSwitch("On");
              setSwitched(true);
            }
          }}
        />
      </Td>
    </Tr>
  );
}

export default TablesNFTRow;
