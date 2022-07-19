import { alpha, Box, styled } from "@mui/material";
import LazyImage from "components/LazyImage";
import NavLink2 from "components/nav-link/NavLink2";
import { H3, Paragraph } from "components/Typography";
import Link from "next/link";
import React from "react"; // styled component

const Wrapper = styled(Box)(({ theme }) => ({
  gap: 10,
  display: "flex",
  borderRadius: 2,
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  backgroundColor: alpha(theme.palette.background.paper, 1),
  "&:hover": {
    boxShadow: theme.shadows[2],
  },
  "& .content": {
    paddingLeft: "2rem",
  },
  "& img": {
    transform: "scale(1.2)",
  },
  [theme.breakpoints.down("sm")]: {
    "& .content": {
      padding: "1.5rem",
    },
  },
})); // =====================================================

// =====================================================
const HomeFourCard3 = ({ body, title, color, imgUrl, bgColor }) => {
  return (
    <Link href="/sale-page-1">
      <a>
        <Wrapper
          sx={{
            backgroundColor: bgColor,
            color,
            pr: 0,
          }}
        >
          <Box width="60%" className="content">
            <H3 lineHeight={1.3}>{title}</H3>
            <Paragraph color={color ? color : "grey.600"} mt={1} mb={2}>
              {body}
            </Paragraph>
            <NavLink2 title="SHOP NOW" />
          </Box>

          <Box width="40%">
            <LazyImage
              width={100}
              src={imgUrl}
              height={100}
              alt="apple-watch-1"
              layout="responsive"
            />
          </Box>
        </Wrapper>
      </a>
    </Link>
  );
};

export default HomeFourCard3;
