import React from 'react';
import { Box , Grid ,Container , useTheme , Card} from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import Image from "components/BazarImage";
import { H5 } from "components/Typography";

const ByExhibit = (props) => {
  const theme = useTheme();
    
  const data = props.data;
  return (
    <Box
    sx={{
      width: "100%",

      py: "10px",
    }}
  >
              <SectionTitle>BY EXHIBITING, YOU CAN</SectionTitle>

    <Container
      sx={{
        mb: "70px",
      }}
    >

      <Grid container spacing={3}
          alignItems="center"
      >
        {data.map((item ,ind) => {
          return (
            <Grid item lg={2.4} md={3} xs={12} key={ind}>
              <Card
                hoverEffect
                data-aos="fade-up"
                data-aos-duration={ind * 500}
                sx={{
                  p: "1rem",
                  height: "250px",
                  display: "flex",
                  borderRadius: "8px",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign:"center",
                }}
              >
                <Image height={100} mb={0.5} src={item.img} alt="logo" />

                  <H5
                  width='190px'
                  sx = {{
                      color: 'black',
                      mt : '10px',
                  }}
                  >
                  {item.content}
                  </H5>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
  )
}

export default ByExhibit