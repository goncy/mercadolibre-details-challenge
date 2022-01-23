import React from "react";
import {Stack, Text, Link} from "@chakra-ui/react";

interface Props {
  preTitle: string;
  title: string;
}

const DiscountCard: React.FC<Props> = ({preTitle, title}) => (
  <Stack
    _hover={{backgroundColor: "#fff", boxShadow: "0 8px 16px 0 rgb(0 0 0 / 10%)"}}
    align="center"
    bg="hsla(0,0%,100%,0.9)"
    borderRadius={6}
    cursor="pointer"
    gridColumn={"auto/span 4"}
    h="120px"
    py={6}
    spacing={2}
    transition="box-shadow .2s ease-in-out"
  >
    <Text
      color="#4a4a4a"
      fontWeight="400"
      letterSpacing={1.4}
      lineHeight=".88"
      textTransform="uppercase"
    >
      {preTitle}
    </Text>
    <Text color="#4a4a4a" fontSize="4xl" lineHeight=".88" textTransform="uppercase">
      {title}
    </Text>
    <Link fontSize="sm" href="#">
      Ver productos
    </Link>
  </Stack>
);

export default DiscountCard;
