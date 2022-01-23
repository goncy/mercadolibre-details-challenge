import React from "react";
import {Container, Grid, Image, Link, Stack, Text} from "@chakra-ui/react";

import {ProductCardSmall, ProductCardLarge} from "../components/ProductCard";
import LastOffers from "../components/LastOffers";
import DiscountCard from "../components/DiscountCard";

const HomeScreen: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Image
        alt="Banner Image"
        h="340px"
        objectFit="cover"
        src="src/assets/images/banner/home-sliderdesktop-1.webp"
      />
      <Container alignSelf="center" maxW="container.xl">
        <Stack direction="row" justify="space-between" mb={12} spacing={0}>
          <Image
            _hover={{boxShadow: "lg"}}
            borderRadius={5}
            boxShadow="md"
            cursor="pointer"
            h="100%"
            objectFit="cover"
            src="src/assets/images/D_NQ_NP772680-MLA47918261265_102021-B.webp"
            transition="box-shadow .2s ease-in-out"
            w={"calc(50% - .5rem)"}
          />
          <Image
            _hover={{boxShadow: "lg"}}
            borderRadius={5}
            boxShadow="md"
            cursor="pointer"
            h="100%"
            objectFit="cover"
            src="src/assets/images/D_NQ_NP818885-MLA47918261210_102021-B.webp"
            transition="box-shadow .2s ease-in-out"
            w={"calc(50% - .5rem)"}
          />
        </Stack>
        <Stack align="center" pb={10}>
          <Text color="blackAlpha.800" letterSpacing={1.2} mb={2}>
            APROVECHÁ LAS OFERTAS DEL CYBER MONDAY
          </Text>
          <Stack direction="column" spacing={4}>
            <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
              <ProductCardSmall
                category="Informática"
                discount="30"
                image="src/assets/images/products/D_Q_NP_649806-MLA47931899819_102021-G.webp"
              />
              <ProductCardSmall
                category="Celulares"
                discount="25"
                image="src/assets/images/products/D_Q_NP_664678-MLA47932048458_102021-G.webp"
              />
              <ProductCardLarge
                category={"Hogar & deco"}
                discount="45"
                image="src/assets/images/products/D_NQ_NP_759262-MLA48064590884_102021-C.webp"
              />
              <ProductCardLarge
                category="Electro"
                discount="30"
                image="src/assets/images/products/D_NQ_NP_927976-MLA47933252037_102021-C.webp"
              />
            </Grid>
            <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
              <ProductCardSmall
                category="Tv y audio"
                discount="30"
                image="src/assets/images/products/D_Q_NP_998916-MLA47932058477_102021-G.webp"
              />
              <ProductCardSmall
                category="Herramientas"
                discount="40"
                image="src/assets/images/products/D_Q_NP_963606-MLA47932058496_102021-G.webp"
              />
              <ProductCardLarge
                category="Deportes"
                discount="40"
                image="src/assets/images/products/D_NQ_NP_613724-MLA47933062640_102021-C.webp"
              />
              <ProductCardSmall
                category="Autopartes"
                discount="35"
                image="src/assets/images/products/D_Q_NP_929993-MLA47932058522_102021-G.webp"
              />
              <ProductCardSmall
                category="Fitness"
                discount="50"
                image="src/assets/images/products/D_Q_NP_724888-MLA47932058534_102021-G.webp"
              />
            </Grid>
          </Stack>
        </Stack>
        <Stack align="center">
          <Text color="blackAlpha.800" letterSpacing={1.2} mb={2}>
            MÁS CATEGORÍAS CON DESCUENTO
          </Text>
          <Stack>
            <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
              <ProductCardLarge
                category="Climatización"
                discount="30"
                image="src/assets/images/products/D_NQ_NP_971824-MLA48101530354_112021-C.jpeg"
              />
              <ProductCardLarge
                category="Ropa y accesorios"
                discount="50"
                image="src/assets/images/products/D_NQ_NP_980822-MLA48101278519_112021-C.jpeg"
              />
              <ProductCardSmall
                category="Gaming"
                discount="30"
                image="src/assets/images/products/D_Q_NP_823507-MLA48101206773_112021-G.jpeg"
              />
              <ProductCardSmall
                category="Supermercado"
                discount="40"
                image="src/assets/images/products/D_Q_NP_850503-MLA48101206793_112021-G.jpeg"
              />
            </Grid>
          </Stack>
        </Stack>
      </Container>
      <Stack
        align="center"
        bgImage="url('/src/assets/images/banner/D_NQ_NP_665407-MLA47977664923_102021-F.jpeg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="180px"
        p="30px 0"
      >
        <Grid
          gap={4}
          gridTemplateColumns="repeat(12,minmax(26px,104px));"
          justifyContent="center"
          margin="auto"
          maxW="1167px"
        >
          <DiscountCard preTitle="Aprovechá hasta" title="18x sin interés" />
          <DiscountCard preTitle="Te llega en 48 hs" title="Full" />
          <DiscountCard preTitle="Desde $3500" title="Envíos gratis" />
        </Grid>
      </Stack>
      <Container alignSelf="center" maxW="container.xl">
        <Stack>
          <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
            <ProductCardLarge
              category="Jardín y aire libre"
              discount="25"
              image="src/assets/images/products/D_NQ_NP_700696-MLA47934714671_102021-C.jpeg"
            />
            <ProductCardSmall
              category="Cuidado personal"
              discount="50"
              image="src/assets/images/products/D_Q_NP_663633-MLA47932272044_102021-G.jpeg"
            />
            <ProductCardSmall
              category="Construcción"
              discount="35"
              image="src/assets/images/products/D_Q_NP_975479-MLA47932048653_102021-G.jpeg"
            />
            <ProductCardSmall
              category="Juegos y jugetes"
              discount="40"
              image="src/assets/images/products/D_Q_NP_744293-MLA48101278766_112021-G.jpeg"
            />
            <ProductCardSmall
              category="Motopartes"
              discount="35"
              image="src/assets/images/products/D_Q_NP_873148-MLA47932058897_102021-G.jpeg"
            />
          </Grid>
        </Stack>
        <LastOffers />
        <Stack mb={4} mt={8}>
          <Image
            borderRadius={4}
            src="src/assets/images/banner/D_NQ_NP_649609-MLA47307981762_082021-OO.webp"
          />
        </Stack>
        <Stack>
          <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
            <ProductCardLarge
              category="Dormitorio"
              discount="45"
              image="src/assets/images/products/D_NQ_NP_759262-MLA48064590884_102021-C.webp"
            />
            <ProductCardSmall
              category="Pequeños electro"
              discount="30"
              image="src/assets/images/products/D_Q_NP_899183-MLA48101278840_112021-G.jpeg"
            />
            <ProductCardSmall
              category="Bebés"
              discount="40"
              image="src/assets/images/products/D_Q_NP_999635-MLA48101278871_112021-G.jpeg"
            />
            <ProductCardSmall
              category="Libros"
              discount="25"
              image="src/assets/images/products/D_Q_NP_984639-MLA48101445250_112021-G.jpeg"
            />
            <ProductCardSmall
              category="Sustentables"
              discount="45"
              image="src/assets/images/products/D_Q_NP_674471-MLA47932240681_102021-G.jpeg"
            />
          </Grid>
        </Stack>
        <Stack mb={12} mt={4}>
          <Image
            borderRadius={4}
            src="src/assets/images/banner/D_NQ_NP_912152-MLA48035925849_102021-OO.jpeg"
          />
        </Stack>
        <Stack align="center" spacing={4}>
          <Text color="blackAlpha.800" letterSpacing={1.2} mb={2}>
            BENEFICIOS EXCLUSIVOS
          </Text>
          <Stack direction="row" my={4} spacing={4}>
            <Image
              borderRadius={6}
              src="src/assets/images/banner/D_NQ_NP_899967-MLA48091266177_112021-OO.jpeg"
              w={"calc(50% - .5rem)"}
            />
            <Image
              borderRadius={6}
              src="src/assets/images/banner/D_NQ_NP_985984-MLA47953979174_102021-OO.jpeg"
              w={"calc(50% - .5rem)"}
            />
          </Stack>
          <Image
            borderRadius={4}
            src="src/assets/images/banner/D_NQ_NP_601303-MLA48012631444_102021-OO.jpeg"
          />
        </Stack>
        <Text color="blackAlpha.800" fontSize="xs" mt={4}>
          Imágenes de referencia.Válido en Argentina del 01/11 al 08/11/2021 para compras de
          productos seleccionados publicados en http://www.mercadolibre.com.ar/ofertas/cyber-monday.
          Ofertas a cargo de cada usuario vendedor, sujetas a disponibilidad de los productos
          ofertados y a las condiciones establecidas por el vendedor en el anuncio publicado en el
          Sitio Web. Cuotas sin interés en bancos seleccionados. Más informacion en Promociones
          Bancarias. Envios gratis en productos nuevos seleccionados de precio superior a $3500.
          Contratos de adhesión - Ley N° 24.240 de Defensa del Consumidor
        </Text>
      </Container>
      <Container alignSelf="center" maxW="container.xl" pb={4}>
        <Link href="/productId">Ver página de detalle de producto</Link>
      </Container>
    </Stack>
  );
};

export default HomeScreen;
