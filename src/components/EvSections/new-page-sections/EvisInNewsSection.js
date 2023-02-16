import React from "react";
import { Container, Grid, Box } from "@mui/material";
import api from "src/utils/api/grocery3-shop";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import NewsCard2 from "src/components/EvComponents/NewsCard2";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import { H3 } from "src/components/EvComponents/Typography";
import { H2 } from "@/components/Typography";

const EvisInNewsSection = ({ data }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box mt={"30px"}>
        <SectionTitle>EVIS in the news</SectionTitle>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: "30px" }}>
          <H2></H2>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "-13px 18px 17px",
          }}
        >
          <Divider
            sx={{
              border: "1px solid #bbc4c7",
              margin: "0",
              width: "47%",
              height: "1px",
            }}
          />
          <Divider
            sx={{
              border: "1px solid #55b4d4",
              margin: "0",
              width: "6%",
              height: "2px",
              backgroundColor: theme.palette.secondary.main,
            }}
          />
          <Divider
            sx={{
              border: "1px solid #bbc4c7",
              margin: "0",
              width: "47%",
              height: "2px",
            }}
          />
        </Box>
      </Box>

      <Container
        sx={{
          mb: 6,
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            mb: 6,
          }}
        >
          {data.map(({ img, title, link }) => {
            return (
              <Grid item xs={12} sm={6} md={6} key={title}>
                <NewsCard2 img={img} title={title} link={link} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export async function getStaticProps() {
  const allProducts = await api.getGrocery3Products();
  const offerProducts = await api.getGrocery3offerProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  return {
    props: {
      allProducts,
      offerProducts,
      topSailedProducts,
    },
  };
}

export default EvisInNewsSection;
