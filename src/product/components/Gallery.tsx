import React from "react";
import {Stack, Image, Flex} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";
interface Props {
  product: Product;
}

const Gallery: React.FC<Props> = ({product = mock.product}) => {
  const [select, setSelect] = React.useState(`${product.pictures[0].url}`);

  return (
    <Stack direction="row">
      <Stack direction="column">
        {product.pictures.map((product) => (
          <Image
            key={product.id}
            _hover={{border: "2px solid #3483fa"}}
            border="1px solid rgba(0,0,0,.25)"
            borderRadius="md"
            cursor="pointer"
            h="60px"
            objectFit="contain"
            src={product.url}
            w="60px"
            onMouseOver={() => setSelect(() => product.url)}
          />
        ))}
      </Stack>
      <Flex align="center" justify="center" minH="500px" w="100%">
        {select && <Image bgSize="cover" maxH="500px" objectFit="contain" src={select} />}
      </Flex>
    </Stack>
  );
};

export default Gallery;
