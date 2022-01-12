import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import Navbar from "./components/UI/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Stack>
          <Box>
            <Routes />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default App;
