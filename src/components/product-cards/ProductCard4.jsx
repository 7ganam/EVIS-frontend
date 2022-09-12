import { Box } from "@mui/material";
import BazarRating from "src/components/BazarRating";
import { FlexRowCenter } from "src/components/flex-box";
import HoverBox from "src/components/HoverBox";
import LazyImage from "src/components/LazyImage";
import { H4, Small } from "src/components/Typography";
import React from "react";

const ProductCard4 = ({ imgUrl, rating, title, price, reviewCount = 0 }) => {
  return (
    <Box>
      <HoverBox mb={2} mx="auto" borderRadius="8px">
        <LazyImage
          src={imgUrl}
          width={0}
          height={0}
          layout="responsive"
          alt={title}
          mx="auto"
        />
      </HoverBox>

      <FlexRowCenter mb={0.5}>
        <BazarRating value={rating} color="warn" readOnly />
        <Small fontWeight={600} pl={0.5}>
          ({reviewCount})
        </Small>
      </FlexRowCenter>

      <H4 fontSize={14} textAlign="center" mb={0.5} title={title} ellipsis>
        {title}
      </H4>
      <H4 fontSize={14} textAlign="center" color="primary.main">
        ${Math.ceil(price).toLocaleString()}
      </H4>
    </Box>
  );
};

export default ProductCard4;
