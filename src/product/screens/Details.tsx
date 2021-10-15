import React from "react";
import {Container, Link, Stack, StackDivider, Text} from "@chakra-ui/react";
import {RiArrowRightSLine} from "react-icons/ri";

import {Product} from "../types";
import mock from "../mock";
import ProductDetail from "../components/ProductDetail";
import Gallery from "../components/Gallery";
import Description from "../components/Description";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Container alignSelf="center" maxW="container.xl" mt={12}>
      <Stack direction="row" justify="space-between">
        <Stack
          align="center"
          direction="row"
          divider={<StackDivider alignSelf="auto" borderColor="rgba(0,0,0,.2);" h="12px" />}
          p={1}
          spacing={4}
        >
          <Text fontSize="sm">Volver al listado</Text>
          <Stack
            align="center"
            direction="row"
            divider={<RiArrowRightSLine color="#666" />}
            fontSize="sm"
            fontWeight={400}
            spacing={4}
          >
            <Link>Juegos y Juguetes</Link>
            <Link>Peluches</Link>
            <Link>Stitch</Link>
          </Stack>
        </Stack>
        <Stack
          align="center"
          direction="row"
          divider={<StackDivider alignSelf="auto" borderColor="#888" h="12px" />}
          p={1}
          spacing={4}
        >
          <Link fontSize="sm" href="#">
            Compartir
          </Link>
          <Link fontSize="sm" href="#">
            Vender uno igual
          </Link>
        </Stack>
      </Stack>
      <Stack
        bg="#fefefe"
        borderRadius="md"
        boxShadow="sm"
        direction="row"
        justify="space-between"
        my={2}
        p={4}
        spacing={2}
      >
        <Stack
          divider={<StackDivider alignSelf="center" borderColor="rgba(0,0,0,.2);" width={"90%"} />}
          flex={1}
          spacing={8}
        >
          <Gallery product={product} />
          <Description product={product} />
        </Stack>
        <ProductDetail product={product} />
      </Stack>
      <Stack
        align="center"
        direction="row"
        divider={<StackDivider alignSelf="auto" borderColor="rgba(0,0,0,.2);" h="12px" />}
        justify="flex-end"
        mb={4}
        p={1}
        spacing={2}
      >
        <Stack direction="row">
          <Text fontSize="sm">Publicación</Text>
          <Text fontSize="sm" fontWeight="700">
            #{product.seller_id}
          </Text>
        </Stack>
        <Link fontSize="sm" href="#">
          Denunciar
        </Link>
      </Stack>
    </Container>
  );
};

export default DetailsScreen;
