// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Crypto from "./SubTables/Crypto";
import NFT from "./SubTables/NFT";
import { tablesCryptoData, tablesNFTData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Crypto
        title={"Crypto Table"}
        captions={["Cryptocurrencies", "Transactions" , "Status", "Control" ]}
        data={tablesCryptoData}
      />
      <NFT
        title={"NFT Table"}
        captions={["NFTs", "Transaction" , "Status", "Control"]}
        data={tablesNFTData}
      />
    </Flex>
  );
}

export default Tables;
