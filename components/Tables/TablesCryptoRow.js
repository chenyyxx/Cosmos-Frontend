import {
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Switch,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useState } from "react";


function TablesCryptoRow(props) {
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
      <Td minWidth={{ sm: "200px" }} pl="0px" >
        <Flex align="center" py=".8rem" maxWidth='400px' height='80px' flexWrap="nowrap">
          {icon}
          <Flex pl={{sm: '20px', lg:'50px'}} direction="column">
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
        <Badge
          bg={protectionStatus === "On" ? "purple.400" : bgStatus}
          color={protectionStatus === "On" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {protectionStatus}
        </Badge>
      </Td>
      <Td>
        <Switch colorScheme='purple' size='lg'
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


export default TablesCryptoRow;
