import React from "react";
import {Box, Grid} from "@chakra-ui/react";

const RatingSeller: React.FC = () => {
  return (
    <>
      <Grid alignItems="center" gap={2} px={3} templateColumns="repeat(5, 1fr)">
        <Box bg="#fff0f0" h="2" w="100%" />
        <Box bg="#fff5e8" h="2" w="100%" />
        <Box bg="#fffcda" h="2" w="100%" />
        <Box bg="#f1fdd7" h="2" w="100%" />
        <Box bg="#39b54a" h="3" w="100%" />
      </Grid>
    </>
  );
};

export default RatingSeller;
