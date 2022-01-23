import React from "react";
import {
  Button,
  Heading,
  Icon,
  Image,
  Link,
  Select,
  Stack,
  StackDivider,
  Text,
  useToast,
} from "@chakra-ui/react";
import {FiHeart} from "react-icons/fi";

import IconTruck from "../../assets/icons/icon-truck.svg";
import IconReturn from "../../assets/icons/icon-return.svg";
import IconProtected from "../../assets/icons/icon-protected.svg";
import IconLoyalty from "../../assets/icons/icon-loyalty.svg";
import {Product} from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

const ProductDetail: React.FC<Props> = ({product = mock.product}) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  const toast = useToast();

  return (
    <>
      <Stack border="1px solid rgba(0,0,0,.1);" borderRadius="md" h="fit-content" p={4}>
        <Stack
          align="center"
          color="rgba(0,0,0,.55)"
          direction="row"
          divider={<StackDivider alignSelf="auto" borderColor="#888" h="10px" />}
          fontSize="sm"
          mt={3}
        >
          <Text>{product.condition === "new" ? "Nuevo" : "Usado"}</Text>
          <Text>{product.sold_quantity} vendidos</Text>
        </Stack>
        <Stack align="center" direction="row" justify="space-between">
          <Heading as="h2" fontSize="22px" letterSpacing={0.3} maxW="70%">
            {product.title}
          </Heading>
          <Icon
            _hover={{color: "#2379fa;"}}
            as={FiHeart}
            color="#3483fa;"
            cursor="pointer"
            h={6}
            transition=".2s ease-in-out"
            w={6}
          />
        </Stack>
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
        <Stack align="flex-start" spacing="0">
          <Stack direction="row">
            <Image alignSelf="center" src={IconTruck} />
            <Text color="#00a650">
              Llega gratis <b>el jueves</b>
            </Text>
          </Stack>
          <Stack pl="26px" spacing="0">
            <Text color="blackAlpha.500" fontSize="sm">
              Beneficio Mercado Puntos
            </Text>
            <Link fontSize="sm" fontWeight="400" href="#">
              Ver más formas de entrega
            </Link>
          </Stack>
          <Stack direction="row">
            <Image pr={1} src={IconReturn} />
            <Text color="#00a650">Devolución gratis</Text>
          </Stack>
          <Stack pl="26px" spacing="0">
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
            <Button
              colorScheme="blue"
              size="lg"
              variant="ghost"
              onClick={() =>
                toast({
                  title: "Agregaste a tu carrito 1 producto.",
                  variant: "subtle",
                  isClosable: true,
                  duration: 2000,
                })
              }
            >
              Agregar al carrito
            </Button>
          </Stack>
          <Stack direction="row" justify="space-between" pb={3} pt={4}>
            <Stack direction="column" justify="space-between" spacing={7}>
              <Image height="26px" src={IconProtected} width="26px" />
              <Image height="26px" src={IconLoyalty} width="26px" />
            </Stack>
            <Stack direction="column" spacing={4}>
              <Text color="blackAlpha.500" fontSize="sm">
                <Link href="#">Compra Protegida</Link>, recibí el producto que esperabas o te
                devolvemos tu dinero.
              </Text>
              <Text color="blackAlpha.500" fontSize="sm">
                <Link href="#">Mercado Puntos</Link>. Sumás 119 puntos.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductDetail;
