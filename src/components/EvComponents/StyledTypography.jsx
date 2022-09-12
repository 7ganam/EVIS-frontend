import { Box, styled } from "@mui/material";
import { H1, H2, H3 } from "src/components/EvComponents/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";

const TitleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
}));

const SubTitleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.dark,
  "& h2": {
    fontSize: 30,
    fontWeight: 500,
    marginBottom: "10px",
  },
}));

const BlockTitleBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export function SectionTitle2({ children, sx = {} }) {
  return (
    <TitleBox my={3}>
      <H1 sx={{ ...sx }}>{children}</H1>
    </TitleBox>
  );
}

export function SectionTitle({ children }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          minWidth: "250px",
          boxShadow: "-1px 1px 8px 0px rgb(43 52 69 / 10%)",
          margin: "10px auto 10px",
          padding: "1px 20px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <SectionTitle2>{children}</SectionTitle2>
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
              width: "40%",
              height: "1px",
            }}
          />
          <Divider
            sx={{
              border: `1px solid ${theme.palette.primary.main}`,
              margin: "0",
              width: "20%",
              height: "3px",
              backgroundColor: theme.palette.primary.main,
            }}
          />
          <Divider
            sx={{
              border: "1px solid #bbc4c7",
              backgroundColor: "#bbc4c7",
              margin: "0",
              width: "40%",
              height: "2px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export function BlockTitle({ children }) {
  return (
    <BlockTitleBox>
      <H2>{children}</H2>
    </BlockTitleBox>
  );
}

export function SectionSubTitle({ text }) {
  return (
    <SubTitleBox my={4}>
      <H3>{text}</H3>
    </SubTitleBox>
  );
}
