import React from "react";
import {Box, Container, Stack, Text} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <>
      <Box bg="gray.50" pt={2}>
        <Container alignSelf="center" maxWidth="container.xl">
          <Stack direction="column" pb={3} pt={2} spacing={1}>
            <Stack color="blackAlpha.800" direction="row" fontSize="sm" spacing={5}>
              <Text>Trabajá con nosotros</Text>
              <Text>Términos y condiciones</Text>
              <Text>Como cuidamos tu privacidad</Text>
              <Text>Información al usuario financiero</Text>
              <Text>Ayuda</Text>
              <Text>Defensa del Consumidor</Text>
            </Stack>
            <Stack color="blackAlpha.500" direction="column" fontSize="xs" spacing={0}>
              <Text>Copyright © 1999-2021 MercadoLibre S.R.L.</Text>
              <Text>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
