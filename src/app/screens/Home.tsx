import React from "react";
import {Link, Text} from "@chakra-ui/react";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Text>{`<HomeScreen />`}</Text>
      <br />
      <Link href="/productId">Ver página de detalle de producto</Link>
    </div>
  );
};

export default HomeScreen;
