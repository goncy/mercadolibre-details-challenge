import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
      <Stack>
        <Box>{`< Navbar />`}</Box>
        <Box>
          <Routes />
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
