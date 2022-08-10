import React from "react";
import FactBox from "components/EvComponents/FactBox";
import { Box, useTheme, Grid , Container} from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";


// const data2 = ["The strategy targets an energy mix that combines renewable, nuclear and clean energy sources to meet the UAE’s economic requirements and environmental goals as follows:",
// "44 % clean energy",
// "38 % gas",
// "12 % clean coal",
// "6 % nuclear.",
// ]

const Facts = (props) => {
    const p = props.p;
    const data = props.data;
  const theme = useTheme();
  return (
    <Box >
      <Container sx={{ mb: 6 }}>
      <Box sx={{ px: 6 }}>
      <SectionTitle>{p} </SectionTitle>  
      </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          px: 12,
          height: "auto",
        }}
      >
        <Container>
        <Grid container spacing={3}>
          {data.map((item, index) => {
            return (
              <Grid item xs={12} md={2} key={index}>
                <FactBox data={item} />
              </Grid>
            );
          })}
        </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Facts;
