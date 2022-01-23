import React from "react";
import {Grid, Link, Stack, Text} from "@chakra-ui/react";

import ProductCardFull from "./ProductCardFull";

const products = [
  {
    id: 1,
    discount: "21",
    image: "../src/assets/images/products/D_Q_NP_858111-MLA47729531255_102021-P.jpeg",
    installments: "Hasta 18 cuotas sin interés",
    oldPrice: 114999,
    price: 89999,
    shipping: "Envío gratis",
    title: "Aire Acondicionado Sanyo Split Frío/calor 5418 Frigorías Blanco 220",
  },
  {
    id: 2,
    discount: "9",
    image: "../src/assets/images/products/D_Q_NP_715512-MLA46711394228_072021-P.jpeg",
    installments: "Hasta 18 cuotas sin interés",
    oldPrice: 20999,
    price: 18999,
    shipping: "Envío gratis",
    title: "Nokia 24 M 64 Gb Carbón 3 Gb Ram",
  },
  {
    id: 3,
    discount: "9",
    image: "../src/assets/images/products/D_Q_NP_857713-MLA47682001678_092021-P.jpeg",
    installments: "Hasta 18 cuotas sin interés",
    oldPrice: 84458,
    price: 69799,
    shipping: "Envío gratis",
    title: "Aire Acondicioando Tcl Taca 5100w Fcsa/el 4500 Frío/calor",
  },
  {
    id: 4,
    discount: "18",
    image: "../src/assets/images/products/D_Q_NP_975344-MLA47584874405_092021-P.jpeg",
    installments: "",
    oldPrice: 92999,
    price: 75999,
    shipping: "Envío gratis",
    title:
      "Notebook Lenovo Ideapad S340-14api  Platinum Gray 14 , Amd Ryzen 3 3200u  8gb De Ram 1tb Hdd, Amd Radeon Rx Vega 3 1366x768px Windows 10 Home",
  },
  {
    id: 5,
    discount: "9",
    image: "../src/assets/images/products/D_Q_NP_858735-MLA43632117900_092020-P.jpeg",
    installments: "Hasta 18 cuotas sin interés",
    oldPrice: 154458,
    price: 139999,
    shipping: "Envío gratis",
    title:
      "Aire Acondicionado LG Dual Cool Inverter  Split  Frío/calor 5545 Frigorías  Blanco 220v S4-w24ke3a1",
  },
];

const LastOffers = () => (
  <Stack align="center" pt={12}>
    <Stack alignSelf="flex-start" direction="row">
      <Text color="gray.600" letterSpacing={1.2} mb={2}>
        ¡OFERTAS POR POCAS HORAS!
      </Text>
      <Link href="/productId">Ver más</Link>
    </Stack>
    <Grid align="center" gap={4} templateColumns="repeat(10, minmax(26px, 104px))">
      {products.map((product) => (
        <ProductCardFull
          key={product.id}
          discount={product.discount}
          image={product.image}
          installments={product.installments}
          oldPrice={product.oldPrice}
          price={product.price}
          shipping={product.shipping}
          title={product.title}
        />
      ))}
    </Grid>
  </Stack>
);

export default LastOffers;
