import { Box } from "@mui/material";
import HoverBox from "src/components/HoverBox";
import LazyImage from "src/components/LazyImage";
import { H4 } from "src/components/Typography";
import React from "react"; // ==========================================================

// ==========================================================
const ProductCard5 = ({ imgUrl, title }) => {
  return (
    <Box>
      <HoverBox borderRadius="5px" mb={1}>
        <LazyImage
          alt={title}
          width={260}
          src={imgUrl}
          height={175}
          objectFit="cover"
          layout="responsive"
        />
      </HoverBox>
      <H4 fontSize={14}>{title}</H4>
    </Box>
  );
};

export default ProductCard5;
