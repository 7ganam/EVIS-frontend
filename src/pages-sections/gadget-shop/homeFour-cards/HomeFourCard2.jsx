import { styled } from "@mui/material";
import BazarCard from "components/BazarCard";
import LazyImage from "components/LazyImage";
import { H5 } from "components/Typography";
import Link from "next/link";
import React from "react";
const StyledCard = styled(BazarCard)(({ theme }) => ({
  borderRadius: "0px",
  height: "100%",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
  },
}));

const HomeFourCard2 = ({ imgUrl, title, headingStyle }) => {
  return (
    <Link href="/sale-page-1">
      <a>
        <StyledCard>
          <LazyImage
            src={imgUrl}
            width={100}
            height={100}
            layout="responsive"
          />
          <H5
            sx={
              headingStyle
                ? headingStyle
                : {
                    pb: "1rem",
                    pl: "1.5rem",
                  }
            }
          >
            {title}
          </H5>
        </StyledCard>
      </a>
    </Link>
  );
};

export default HomeFourCard2;
