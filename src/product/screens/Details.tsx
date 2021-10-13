import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Img,
  Link,
  Select,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import {RiArrowRightSLine} from "react-icons/ri";
import {HiOutlineTruck} from "react-icons/hi";
import {IoReturnDownBack} from "react-icons/io5";

import {Product} from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const [select, setSelect] = React.useState(`${product.pictures[0].url}`);
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

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
        <Box h="500px" pl={8} pt={4} w="500px">
          {select && <Img bgSize="contain" maxH="500px" objectFit="contain" src={select} />}
        </Box>
        <Stack border="1px solid rgba(0,0,0,.1);" borderRadius="md" p={4} w="350px">
          <Stack
            align="center"
            color="rgba(0,0,0,.55)"
            direction="row"
            divider={<StackDivider alignSelf="auto" borderColor="#888" h="12px" />}
            fontSize="sm"
            mt={3}
          >
            <Text>{product.condition === "new" ? "Nuevo" : "Usado"}</Text>
            <Text>{product.sold_quantity} vendidos</Text>
          </Stack>
          <Heading as="h2" fontSize="xl" letterSpacing={0.3} maxW="70%">
            {product.title}
          </Heading>
          <Stack spacing="-2">
            <Text fontSize="4xl" fontWeight="300">
              {formatter.format(product.price)}
            </Text>
            <Text fontSize="lg" fontWeight="400" pb={2}>
              en 12x {formatter.format(product.price / 12)}
            </Text>
            <Link fontSize="sm" fontWeight="400" href="#">
              Ver los medios de pago
            </Link>
          </Stack>
          <Stack>
            <Stack direction="row">
              <Icon as={HiOutlineTruck} color="#00a650" h={6} w={6} />
              <Text color="#00a650">
                Llega gratis <b>el jueves</b>
              </Text>
            </Stack>
            <Stack pl={8} spacing="0">
              <Text color="blackAlpha.500" fontSize="sm">
                Beneficio Mercado Puntos
              </Text>
              <Link fontSize="sm" fontWeight="400" href="#">
                Ver más formas de entrega
              </Link>
            </Stack>
            <Stack direction="row">
              <Icon as={IoReturnDownBack} color="#00a650" h={6} w={6} />
              <Text color="#00a650">Devolución gratis</Text>
            </Stack>
            <Stack pl={8} spacing="0">
              <Text color="blackAlpha.600" fontSize="sm">
                Tenés 30 días desde que lo recibís.
              </Text>
              <Link fontSize="sm" fontWeight="400" href="#">
                Conocer más
              </Link>
            </Stack>
          </Stack>
          <Stack pt={6}>
            <Text fontWeight="600">Stock disponible</Text>
            <Stack direction="row" spacing="1">
              <Text>Cantidad: </Text>
              <Select
                fontSize="sm"
                fontWeight="600"
                placeholder="1 unidad"
                size="sm"
                variant="unstyled"
                w="fit-content"
              >
                <option value="option1">1 unidad</option>
                <option value="option2">2 unidades</option>
                <option value="option3">3 unidades</option>
                <option value="option4">4 unidades</option>
                <option value="option5">5 unidades</option>
              </Select>
              <Text color="blackAlpha.600">({product.available_quantity} disponibles)</Text>
            </Stack>
            <Stack pt={6}>
              <Button colorScheme="messenger" size="lg" variant="solid">
                Comprar ahora
              </Button>
              <Button colorScheme="blue" size="lg" variant="ghost">
                Agregar al carrito
              </Button>
            </Stack>
          </Stack>
        </Stack>
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
