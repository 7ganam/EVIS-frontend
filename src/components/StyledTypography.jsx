import { Box, styled } from "@mui/material";
import { H1 } from "components/Typography";

const TitleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.dark,
  "& h1": {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: "10px",
  },
  "& div": {
    width: 200,
    height: "2px",
    background: theme.palette.primary.main,
    margin: "auto",
  },
}));

const SubTitleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.dark,
  "& h1": {
    fontSize: 30,
    fontWeight: 500,
    marginBottom: "10px",
  },
  "& div": {
    width: 200,
    height: "2px",
    background: theme.palette.primary.main,
    margin: "auto",
  },
}));

export function SectionTitle({ text }) {
  return (
    <TitleBox my={4}>
      <H1>{text}</H1>
      <Box />
    </TitleBox>
  );
}

export function SectionSubTitle({ text }) {
  return (
    <SubTitleBox my={4}>
      <H1>{text}</H1>
      <Box />
    </SubTitleBox>
  );
}
