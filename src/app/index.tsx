import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box bg="gray.200">
        <Navbar />
        <Container alignSelf="center" maxWidth="container.xl">
          <Routes />
        </Container>
        <Footer />
      </Box>
    </Stack>
  );
};

export default App;
