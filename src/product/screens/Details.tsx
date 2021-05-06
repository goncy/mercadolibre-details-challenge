import React from "react";

import {Product} from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return <div>{`<DetailsScreen /> para ${product.title}`}</div>;
};

export default DetailsScreen;
