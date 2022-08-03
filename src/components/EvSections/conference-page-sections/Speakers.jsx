import React from 'react';
import RoundedImage from "components/EvComponents/RoundedImage";
import { Grid , Box ,Button } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";




const Speakers = (props) => {
  const data = props.data;
  const btnTxt = props.btn;
  return (
    <Box sx = {{px : 6}}>
      <SectionTitle>2022 Speakers</SectionTitle>
    <Grid container spacing = {4} sx = {{pt : 6}}>
        {data.map(({ imageSrc, name, title }) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={name}>
                    <RoundedImage Src={imageSrc} Name={name} Title={title} />
                </Grid>)
        })}
        <Grid item xs={12} sm={12} md={12}>
            <Box sx={{ 
              textAlign: "center" ,
              pb : 6

              }}>
                <Button variant='contained'> {btnTxt} </Button>
            </Box>
        </Grid>
    </Grid>
    </Box>
)

}

export default Speakers