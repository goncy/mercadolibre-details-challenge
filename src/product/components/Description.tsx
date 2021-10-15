import React from "react";
import {Stack, Heading, Table, Tbody, Td, Th, Tr, Box} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";
interface Props {
  product: Product;
}

const Description: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Stack p={8}>
      <Heading fontSize="2xl" fontWeight="400" pb={6}>
        Características principales
      </Heading>
      <Table
        border="2px solid"
        borderColor="blackAlpha.200"
        d="inline-block"
        rounded="md"
        variant="simple"
        w="fit-content"
      >
        {product.attributes.map((attribute) => (
          <Tbody key={attribute.id}>
            <Tr>
              <Th
                key={attribute.value_name}
                bg="blackAlpha.100"
                borderColor="blackAlpha.200"
                color="blackAlpha.800"
                fontSize="16"
                letterSpacing={0}
                textTransform="capitalize"
              >
                {attribute.name}
              </Th>
              <Td
                key={attribute.value_name + "hijo2"}
                bg="blackAlpha.50"
                borderColor="blackAlpha.200"
                textTransform="capitalize"
                w="full"
              >
                {attribute.value_name}
              </Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </Stack>
  );
};

export default Description;
