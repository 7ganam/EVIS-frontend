import { Box, styled } from "@mui/material";
import { H1, H2, H3 } from "components/EvComponents/Typography";

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

export function SectionTitle({ children }) {
  return (
    <TitleBox my={3}>
      <H1>{children}</H1>
    </TitleBox>
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
