import React from "react";
import {
  Container,
  Stack,
  Box,
  Img,
  Text,
  Input,
  Icon,
  StackDivider,
  Image,
  Link,
} from "@chakra-ui/react";
import {IoIosSearch} from "react-icons/io";
import {IoLocationOutline} from "react-icons/io5";
import {BsCart2} from "react-icons/bs";

import beneficts from "../../assets/images/beneficts.webp";
import logo from "../../assets/images/logo.png";

const Navbar: React.FC = () => {
  return (
    <>
      <Box bg="primary.500" boxShadow={"0 1px 0 0 rgb(0 0 0 / 10%)"} pt={2}>
        <Container alignSelf="center" maxWidth="container.xl">
          <Stack spacing={2}>
            <Stack direction="row" spacing={12}>
              <Link href="/">
                <Image alt="Logo Mercado Libre" mt={1} objectFit="contain" src={logo} />
              </Link>
              <Stack
                align="center"
                bg="#fefefe"
                borderRadius="sm"
                boxShadow="base"
                direction="row"
                divider={<StackDivider />}
                maxW="600"
                px={3}
                py={2}
                w="100%"
              >
                <Input placeholder="Buscar productos, marcas y más…" px={2} variant="unstyled" />
                <Icon
                  alignSelf={"center"}
                  as={IoIosSearch}
                  color="#666666"
                  h="5"
                  justifySelf={"center"}
                  w="5"
                />
              </Stack>
              <Img maxH="39px" maxW="340px" objectFit={"contain"} src={beneficts} />
            </Stack>
            <Stack align="baseline" direction="row" justify="space-between" pb={3}>
              <Stack align="center" direction="row" spacing={0}>
                <Icon as={IoLocationOutline} h={6} w={6} />
                <Stack align="start" spacing={-1.5}>
                  <Text color="blackAlpha.600" fontSize="xs">
                    Enviar a Tahiel
                  </Text>
                  <Text color="#333333" fontSize="sm">
                    Capital Federal
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" flex={1} justify="space-between">
                <Stack align="baseline" direction="row" ms={14} spacing={4}>
                  <Text
                    _hover={{color: "blackAlpha.700"}}
                    color="blackAlpha.600"
                    cursor="pointer"
                    fontSize="sm"
                    transition="color .3s ease-out"
                  >
                    Categorías
                  </Text>
                  <Text
                    _hover={{color: "blackAlpha.700"}}
                    color="blackAlpha.600"
                    cursor="pointer"
                    fontSize="sm"
                    transition="color .3s ease-out"
                  >
                    Ofertas
                  </Text>
                  <Text
                    _hover={{color: "blackAlpha.700"}}
                    color="blackAlpha.600"
                    cursor="pointer"
                    fontSize="sm"
                    transition="color .3s ease-out"
                  >
                    Historial
                  </Text>
                  <Text
                    _hover={{color: "blackAlpha.700"}}
                    color="blackAlpha.600"
                    cursor="pointer"
                    fontSize="sm"
                    transition="color .3s ease-out"
                  >
                    Supermercado
                  </Text>
                  <Text
                    _hover={{color: "blackAlpha.700"}}
                    color="blackAlpha.600"
                    cursor="pointer"
                    fontSize="sm"
                    transition="color .3s ease-out"
                  >
                    Moda
                  </Text>
                  <Text
                    _hover={{color: "blackAlpha.700"}}
                    color="blackAlpha.600"
                    cursor="pointer"
                    fontSize="sm"
                    transition="color .3s ease-out"
                  >
                    Vender
                  </Text>
                  <Text
                    _hover={{color: "blackAlpha.700"}}
                    color="blackAlpha.600"
                    cursor="pointer"
                    fontSize="sm"
                    transition="color .3s ease-out"
                  >
                    Ayuda
                  </Text>
                </Stack>
                <Stack color="blackAlpha.700" direction="row" fontSize="sm" spacing={5}>
                  <Text
                    _hover={{color: "blackAlpha.900"}}
                    color="blackAlpha.700"
                    cursor="pointer"
                    transition="color .3s ease-out"
                  >
                    Creá tu cuenta
                  </Text>
                  <Text
                    _hover={{color: "blackAlpha.900"}}
                    color="blackAlpha.700"
                    cursor="pointer"
                    transition="color .3s ease-out"
                  >
                    Ingresá
                  </Text>
                  <Text
                    _hover={{color: "blackAlpha.900"}}
                    color="blackAlpha.700"
                    cursor="pointer"
                    transition="color .3s ease-out"
                  >
                    Mis compras
                  </Text>
                  <Icon
                    _hover={{color: "blackAlpha.900"}}
                    as={BsCart2}
                    cursor="pointer"
                    h={5}
                    transition="color .3s ease-out"
                    w={5}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
