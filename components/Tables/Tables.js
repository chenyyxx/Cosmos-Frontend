// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Crypto from "./SubTables/Crypto";
import NFT from "./SubTables/NFT";
import { tablesTableData, dashboardTableData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Crypto
        title={"Crypto Table"}
        captions={["Author", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
      />
      <NFT
        title={"NFT Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Tables;
