import React from 'react';
import { Box , Grid ,Container , useTheme , Card} from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import { H5 } from "components/Typography";
const ExpectMeet = (props) => {
    const theme = useTheme();
    
    const data = props.data;
    return (
      <Box
      sx={{
        width: "100%",
  
        py: "10px",
      }}
    >
                <SectionTitle>WHO YOU CAN EXPECT TO MEET</SectionTitle>
  
      <Container
        sx={{
          mb: "70px",
          pt : 3
        }}
      >
  
        <Grid container spacing={3}
            alignItems="center"
        >
          {data.map((item ,ind) => {
            return (
              <Grid item lg={2.4} md={3} xs={12} key={ind} >
                <Card
                  hoverEffect
                  data-aos="fade-up"
                  data-aos-duration={ind * 500}
                  sx={{
                    p: "1rem",
                    height: "90px",
                    display: "flex",
                    borderRadius: "8px",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign:"center",
                    bgcolor : theme.palette.primary.main,
                    
                  }}
                >  
                    <H5
                    width='190px'
                    sx = {{
                        color: 'black',
                        mt : '10px',
                    }}
                    >
                    {item}
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

export default ExpectMeet