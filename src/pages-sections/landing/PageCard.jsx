import { Visibility } from "@mui/icons-material";
import { Box, Card, IconButton, styled } from "@mui/material";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography";
import Link from "next/link";
import React, { Fragment } from "react"; // styled components

const Wrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  borderRadius: "0.5rem",
  backgroundColor: theme.palette.grey[200],
  border: `1px solid ${theme.palette.grey[300]}`,
  "& .overlay": {
    transition: "0.3s ease-in-out",
  },
  "&:hover": {
    ".overlay": {
      opacity: 1,
    },
  },
}));
const StatusChipBox = styled(Box)(({ theme }) => ({
  width: 42,
  height: 45,
  top: "0px",
  zIndex: 11,
  right: "30px",
  fontSize: "12px",
  position: "absolute",
  background: theme.palette.primary.main,
  "& .triangle-left": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: `21px solid ${theme.palette.primary.main}`,
  },
  "& .triangle-right": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderBottom: "10px solid transparent",
    borderRight: `21px solid ${theme.palette.primary.main}`,
  },
}));
const StatusChip = styled(Span)(() => ({
  height: "100%",
  display: "flex",
  color: "#fff",
  fontSize: "13px",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledFlex = styled(FlexBox)(() => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0, 0.54)",
}));

const PageCard = (props) => {
  const { title, imgUrl, previewUrl, disabled, status } = props;
  return (
    <Fragment>
      <Wrapper mb={3} p="6% 6% 0px" overflow="hidden">
        <Card
          elevation={3}
          sx={{
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <LazyImage
            width={470}
            height={397}
            src={imgUrl}
            objectFit="cover"
            layout="responsive"
            objectPosition="top center"
          />
        </Card>

        {status && (
          <StatusChipBox>
            <StatusChip>{status}</StatusChip>
            <Box width="100%" display="flex">
              <Box className="triangle-left" />
              <Box className="triangle-right" />
            </Box>
          </StatusChipBox>
        )}

        {!disabled && (
          <Link href={previewUrl}>
            <a target="_blank" rel="noopener noreferrer">
              <StyledFlex className="overlay">
                <IconButton
                  sx={{
                    bgcolor: "white",
                    "&:hover": {
                      bgcolor: "white",
                    },
                  }}
                >
                  <Visibility fontSize="small" />
                </IconButton>
              </StyledFlex>
            </a>
          </Link>
        )}
      </Wrapper>

      <H3 textAlign="center" lineHeight="1" fontSize="14px">
        {title}
      </H3>
    </Fragment>
  );
};

export default PageCard;
