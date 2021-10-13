import React from "react";
import {Container, Stack, Box, Img, Text, Input, Icon, StackDivider} from "@chakra-ui/react";
import {IoIosSearch} from "react-icons/io";
import {IoLocationOutline} from "react-icons/io5";
import {BsCart2} from "react-icons/bs";

import logo from "../assets/logo.png";
import beneficts from "../assets/beneficts.webp";

const Navbar: React.FC = () => (
  <>
    <Box bg="primary.500" boxShadow={"0 1px 0 0 rgb(0 0 0 / 10%)"} pt={2}>
      <Container alignSelf="center" maxWidth="container.xl">
        <Stack spacing={2}>
          <Stack direction="row" spacing={12}>
            <Img objectFit="contain" src={logo} />
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
          {/* second row */}
          <Stack align="baseline" direction="row" justify="space-between" pb={3}>
            <Stack align="center" direction="row" spacing={0}>
              <Stack direction="row">
                <Icon as={IoLocationOutline} h={6} w={6} />
              </Stack>
              <Stack align="start" spacing={-1.5}>
                <Text color="blackAlpha.600" fontSize="xs">
                  Enviar a Tahiel
                </Text>
                <Text color="#333333" fontSize="sm">
                  Buenos aires 1823
                </Text>
              </Stack>
            </Stack>
            <Stack align="baseline" direction="row" spacing={4}>
              <Text color="blackAlpha.600" fontSize="sm">
                Categorías
              </Text>
              <Text color="blackAlpha.600" fontSize="sm">
                Ofertas
              </Text>
              <Text color="blackAlpha.600" fontSize="sm">
                Historial
              </Text>
              <Text color="blackAlpha.600" fontSize="sm">
                Supermercado
              </Text>
              <Text color="blackAlpha.600" fontSize="sm">
                Moda
              </Text>
              <Text color="blackAlpha.600" fontSize="sm">
                Vender
              </Text>
              <Text color="blackAlpha.600" fontSize="sm">
                Ayuda
              </Text>
            </Stack>
            <Stack color="blackAlpha.800" direction="row" fontSize="sm" spacing={5}>
              <Text>Creá tu cuenta</Text>
              <Text>Ingresá</Text>
              <Text>Mis compras</Text>
              <Icon as={BsCart2} h={5} w={5} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  </>
);

export default Navbar;
