import React from "react";
import {Text, Stack, Image, Badge} from "@chakra-ui/react";

import {ProductHome} from "../../product/types";

interface Props {
  image: ProductHome[2];
  title: string;
  oldPrice: number;
  price: number;
  installments: string;
  discount: string;
  shipping: string;
}

const ProductCardFull: React.FC<Props> = ({
  title,
  oldPrice,
  discount,
  price,
  image,
  installments,
  shipping,
}) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  return (
    <Stack
      _hover={{boxShadow: "0 8px 16px 0 rgb(0 0 0 / 10%)"}}
      bg="#fff"
      boxShadow={"0 1px 2px 0 rgb(0 0 0 / 12%)"}
      color="#4a4a4a"
      cursor="pointer"
      gridColumn="auto/span 2"
      h="100%"
      lineHeight={1}
      p="14px 14px 20px"
      rounded={6}
      spacing={0}
      transition="box-shadow .2s ease-in-out"
    >
      <Image
        borderBottom="1px solid #f5f5f5"
        borderRadius="4px 4px 0 0"
        maxH="unset"
        mb={3}
        src={image}
        w="224px"
      />
      <Stack align="flex-start" spacing={1}>
        <Badge
          bg="secondary.500"
          borderRadius="4px"
          fontFamily="inherit"
          fontSize={12}
          fontWeight={600}
          lineHeight={1.2}
          p="2px 4px"
          textAlign="left"
          variant="solid"
          w="min-content"
        >
          Oferta del día
        </Badge>
        <Text color="#666" fontSize="xs" textDecoration="line-through">
          {formatter.format(oldPrice)}
        </Text>
        <Stack align="center" direction="row" spacing={1}>
          <Text fontSize="2xl">{formatter.format(price)}</Text>
          <Text color="#00a650" fontSize="xs">
            {discount}% OFF
          </Text>
        </Stack>
        <Text color="#00a650" fontSize="sm">
          {installments}
        </Text>
        <Text color="#00a650" fontSize="sm" fontWeight="bold">
          {shipping}
        </Text>
        <Text fontSize="sm" lineHeight={1.2} noOfLines={2} textAlign="left">
          {title}
        </Text>
      </Stack>
    </Stack>
  );
};

export default ProductCardFull;
