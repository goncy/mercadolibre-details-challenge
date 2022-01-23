import React from "react";
import {Text, Stack, Heading, Table, Tbody, Td, Th, Tr, StackDivider, Box} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";

import ConsumerQuestions from "./ConsumerQuestions";
interface Props {
  product: Product;
}

const Description: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Stack divider={<StackDivider borderColor="gray.200" />} p={8} spacing={10}>
      <Stack>
        <Heading fontSize="2xl" fontWeight="400" pb={6}>
          Características principales
        </Heading>
        <Table
          border="2px solid"
          borderColor="blackAlpha.200"
          d="inline-block"
          rounded="md"
          variant="simple"
          w="100%"
        >
          {product.attributes
            .filter(
              (attribute) =>
                attribute.id == "BRAND" ||
                attribute.id == "MODEL" ||
                attribute.id == "FRANCHISE" ||
                attribute.id == "ANIMAL" ||
                attribute.id == "CHARACTER",
            )
            .map((attribute) => (
              <Tbody key={attribute.name}>
                <Tr>
                  <Th
                    bg="blackAlpha.100"
                    borderColor="blackAlpha.200"
                    color="blackAlpha.800"
                    fontSize={16}
                    letterSpacing={0}
                    textTransform="capitalize"
                  >
                    {attribute.name}
                  </Th>
                  <Td
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
      <Stack>
        <Text fontSize="xl" fontWeight="400">
          Otras características
        </Text>
        <Stack direction="row" spacing={48}>
          <Stack>
            <Stack direction="row">
              {product.attributes
                .filter((attribute) => attribute.id == "MATERIAL")
                .map((attribute) => (
                  <Box key={attribute.id}>
                    <Text fontSize="sm" fontWeight="bold">
                      {attribute.name}:
                    </Text>
                    <Text fontSize="sm">{attribute.value_name}</Text>
                  </Box>
                ))}
            </Stack>
            <Stack direction="row">
              {product.attributes
                .filter((attribute) => attribute.id == "IS_HYPOALLERGENIC_MATERIAL")
                .map((attribute) => (
                  <Box key={attribute.name}>
                    <Text fontSize="sm" fontWeight="bold">
                      {attribute.name}:
                    </Text>
                    <Text fontSize="sm">{attribute.value_name}</Text>
                  </Box>
                ))}
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row">
              {product.attributes
                .filter((attribute) => attribute.id == "WIDTH")
                .map((attribute) => (
                  <Box key={attribute.id}>
                    <Text fontSize="sm" fontWeight="bold">
                      {attribute.name}:
                    </Text>
                    <Text fontSize="sm">{attribute.value_name}</Text>
                  </Box>
                ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="2xl" fontWeight="400" pb={6}>
          Descripción
        </Text>
        <Text color="gray.600" fontSize="xl">
          Peluche Stitch 1 Metro Importado <br /> 100cm Reales <br />
          <br /> Excelente calidad y diseño Premium <br /> Ojos Bordados y relleno de vellón
          siliconado súper soft <br /> Muy suave y más hermosos que nunca <br />
          <br /> Descripción: 100cm de alto 70cm de ancho
        </Text>
      </Stack>
      <ConsumerQuestions />
    </Stack>
  );
};

export default Description;
