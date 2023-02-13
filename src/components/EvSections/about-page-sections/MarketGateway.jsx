import React from "react";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { Box, Grid, Paper } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { SectionTitle2 } from "src/components/EvComponents/StyledTypography";
import { H1, H2, H3 } from "src/components/EvComponents/Typography";
import East from "@mui/icons-material/East";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MarketGatewayForm from "./MarketGatewayForm";
import { useTheme } from "@emotion/react";

const whoToMeet = [
  { name: "Dealers", icon: AccountBalanceWalletIcon },
  { name: "fuel retailers", icon: LocalGasStationIcon },
  { name: "real estate developers", icon: ApartmentIcon },
  { name: "government officials", icon: AccountBalanceIcon },
];

const MarketGateway = (props) => {
  const theme = useTheme();
  const item = props.item;
  const videos = props.videos;
  return (
    <Box id={"open-tech"} sx={{ scrollMarginTop: "250px" }}>
      <Box sx={{ mt: "40px", mb: "20px" }}>
        <SectionTitle>Market gateway</SectionTitle>
      </Box>
      <Box sx={{ mb: "40px", textAlign: "center" }}>
        <H1 sx={{ fontWeight: "bold", color: "black", margin: "0px" }}>
          {"EVIS 2023 Abu Dhabi Market Gateway"}
        </H1>
        <H2>{"Connecting businesses with opportunities."}</H2>
        <H2 sx={{ fontWeight: "bold", color: "red" }}>
          {"Exclusively for confirmed exhibitors"}
        </H2>
      </Box>
      <Box sx={{ width: "100%", display: "flex" }}>
        <H3>
          EVIS2023 Abu Dhabi Market Gateway is an opportunity for exhibitors to
          connect with potential buyers and create business opportunities
          throughout the three days of the event. By understanding your
          requirements we will help you connect with Investors, Potential
          Partners (including dealers, CPOs, fuel retailers, real estate
          developers) and Government Officials from across the Middle East
          region. The Middle East region is leading the EV transition and
          countries across the region are investing in enabling this transition
          to happen from building EV manufacturing faculties such as Lucid
          Motors and Ceer in Saudi Arabia, installing wide public charging
          infrastructure such as DEWA’s public charging network in Dubai and
          more. All of these initiatives are resulting in a faster adoption rate
          of EVs by individuals and companies and are creating many business
          opportunities for companies and investors. EVIS2023 will have more
          than 200 companies exhibiting from over 50 countries from across the
          globe.
        </H3>
      </Box>

      <Box
        mt={5}
        sx={{
          width: "100%",
          bgcolor: "#E3E9EF",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <H1
          sx={{
            fontWeight: "thin",
            color: "black",
            marginBottom: "30px",
            textAlign: "center",
            fontSize: "60px",
          }}
        >
          Meet
        </H1>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {whoToMeet.map((item, index) => (
            <Grid key={index} item xs={6} sm={3} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    mb: "10px",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <item.icon
                    sx={{
                      fontSize: "30px",
                      color: theme.palette.primary.main,
                      mb: "20px",
                    }}
                  />
                  <H2
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </H2>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
        <MarketGatewayForm />
      </Box>
    </Box>
  );
};

export default MarketGateway;
