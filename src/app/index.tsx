import React from "react";
import {Stack, Box} from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box bg="gray.200">
        <Navbar />
        <Routes />
        <Footer />
      </Box>
    </Stack>
  );
};

export default App;
