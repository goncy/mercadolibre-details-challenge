import React from "react";
import {Image, Link, Stack, Text} from "@chakra-ui/react";

import IconMedal from "../../assets/icons/icon-medal.svg";
import IconPin from "../../assets/icons/icon-pin.svg";
import {Product} from "../types";
import mock from "../mock";

import RatingSeller from "./RatingSeller";

interface Props {
  product: Product;
}

const AboutSeller: React.FC<Props> = ({product = mock.product}) => {
  return (
    <>
      <Stack
        border="1px solid rgba(0,0,0,.1);"
        borderRadius="md"
        h="fit-content"
        p={4}
        pb={8}
        pt={8}
        spacing={4}
      >
        <Text fontSize="xl">Información sobre el vendedor</Text>
        <Stack spacing={3}>
          <Stack spacing={0}>
            <Stack direction="row">
              <Image pl={1} pr={1} src={IconPin} />
              <Text>Ubicación</Text>
            </Stack>
            <Text color="blackAlpha.500" fontSize="sm" pl={7}>
              {product.seller_address.city.name}, {product.seller_address.state.name}
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Stack direction="row">
              <Image src={IconMedal} />
              <Text color="#00a650">MercadoLíder Platinum</Text>
            </Stack>
            <Text color="blackAlpha.600" fontSize="sm" pl={7}>
              ¡Es uno de los mejores del sitio!
            </Text>
          </Stack>
        </Stack>
        <RatingSeller />
        <Link fontSize="sm" fontWeight="400" href="#">
          Ver más datos de este vendedor
        </Link>
      </Stack>
    </>
  );
};

export default AboutSeller;
