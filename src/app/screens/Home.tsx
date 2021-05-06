import React from "react";
import {Link} from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <div>
      {`<HomeScreen />`}
      <br />
      <Link to="/productId">Ver página de detalle de producto</Link>
    </div>
  );
};

export default HomeScreen;
