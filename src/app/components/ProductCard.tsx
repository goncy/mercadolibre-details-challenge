import React from "react";
import {Text, Link, Stack, Image} from "@chakra-ui/react";

import {ProductHome} from "../../product/types";

interface Props {
  discount: ProductHome[1];
  category: ProductHome[0];
  image: ProductHome[2];
}

export const ProductCardSmall: React.FC<Props> = ({discount, category, image}) => (
  <>
    <Stack
      _hover={{boxShadow: "0 8px 16px 0 rgb(0 0 0 / 10%)"}}
      bg="#fff"
      boxShadow={"0 1px 2px 0 rgb(0 0 0 / 12%)"}
      color="#4a4a4a"
      cursor="pointer"
      gridColumn="auto/span 2"
      lineHeight={1}
      minH="236px"
      pb={4}
      px={4}
      rounded={7}
      spacing={0}
      transition="box-shadow .2s ease-in-out"
    >
      <Image margin="20px 0 12px" src={image} />
      <Text fontSize="sm" fontWeight="400" letterSpacing={1} textTransform="uppercase">
        Hasta
      </Text>
      <Text fontSize={24} fontWeight="800">
        {discount}% OFF
      </Text>
      <Text fontSize="14px" fontWeight="400" pb={2} textTransform="uppercase">
        {category}
      </Text>
      <Link fontSize={14} href="/productId">
        Ver ofertas
      </Link>
    </Stack>
  </>
);

export const ProductCardLarge: React.FC<Props> = ({discount, category, image}) => (
  <Stack
    _hover={{boxShadow: "0 8px 16px 0 rgb(0 0 0 / 10%)"}}
    align="flex-start"
    bg="#fff"
    bgImage={image}
    bgPosition="left"
    bgRepeat="no-repeat"
    bgSize="cover"
    boxShadow={"0 1px 2px 0 rgb(0 0 0 / 12%)"}
    color="#4a4a4a"
    cursor="pointer"
    gridColumn="auto/span 4"
    justify="flex-end"
    lineHeight={1}
    minH="236px"
    px={6}
    py={6}
    rounded={4}
    spacing={0}
    transition="box-shadow .2s ease-in-out"
  >
    <Stack align="flex-start" bg="rgb(255,255,255,.9)" borderRadius={4} p={4} spacing={2}>
      <Text fontSize="sm" fontWeight="400" letterSpacing={1} textTransform="uppercase">
        Hasta
      </Text>
      <Text fontSize="29px" fontWeight="700" lineHeight="25px">
        {discount}% OFF
      </Text>
      <Text fontSize="14px" fontWeight="400" pb={2} textTransform="uppercase">
        {category}
      </Text>
      <Link fontSize={14} href="/productId">
        Ver ofertas
      </Link>
    </Stack>
  </Stack>
);

export default {ProductCardSmall, ProductCardLarge};
