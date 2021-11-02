import React from "react";
import {Box, Grid, Image, Stack, StackDivider, Text} from "@chakra-ui/react";

import IconMessagePositive from "../../assets/icons/icon-message-positive.svg";
import IconTimePositive from "../../assets/icons/icon-time-positive.svg";

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
      <Stack align="baseline" direction="row" divider={<StackDivider alignSelf="center" h="90%" />}>
        <Stack align="center">
          <Text bottom="8px" color="black" fontSize="2xl" lineHeight={0.7} position="relative">
            {2206}
          </Text>
          <Text color="blackAlpha.700" fontSize="xs" lineHeight={1} textAlign="center">
            Ventas en los últimos 60 días
          </Text>
        </Stack>
        <Stack align="center" justify="center">
          <Image h="26px" src={IconMessagePositive} />
          <Text color="blackAlpha.700" fontSize="xs" lineHeight={1} textAlign="center">
            Brinda buena atención
          </Text>
        </Stack>
        <Stack align="center">
          <Image h="28px" src={IconTimePositive} />
          <Text color="blackAlpha.700" fontSize="xs" lineHeight={1} textAlign="center">
            Despacha sus productos a tiempo
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default RatingSeller;
