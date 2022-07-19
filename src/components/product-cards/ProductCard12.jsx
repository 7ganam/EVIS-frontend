import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import BazarImage from "components/BazarImage";
import BazarRating from "components/BazarRating";
import { FlexBetween, FlexBox } from "components/flex-box";
import HoverBox from "components/HoverBox";
import { H4 } from "components/Typography";
import Link from "next/link";
import React from "react"; // ===========================================================

// ===========================================================
const ProductCard12 = ({
  id,
  title,
  price,
  imgUrl,
  rating,
  off = 20,
  hideReview,
  hideFavoriteIcon,
}) => {
  return (
    <Box>
      <Link href={`/product/${id}`}>
        <a>
          <HoverBox>
            <BazarImage
              src={imgUrl}
              width="100%"
              height="auto"
              alt={title}
              mx="auto"
            />
          </HoverBox>
        </a>
      </Link>

      <FlexBetween>
        <Box mt="1rem">
          <H4 fontWeight="600" fontSize="14px" mb={0.5} title={title} ellipsis>
            {title}
          </H4>
          {!hideReview && <BazarRating value={rating} color="warn" readOnly />}

          <FlexBox alignItems="center">
            <Box pr={1} fontWeight="600" color="primary.main">
              ${(price - (price * off) / 100).toFixed(2)}
            </Box>
            {!!off && (
              <Box color="grey.600" fontWeight="600">
                <del>{price?.toFixed(2)}</del>
              </Box>
            )}
          </FlexBox>
        </Box>

        {!hideFavoriteIcon && (
          <FavoriteBorder
            fontSize="small"
            color="secondary"
            sx={{
              opacity: 0.5,
              m: "1rem",
            }}
          />
        )}
      </FlexBetween>
    </Box>
  );
};

export default ProductCard12;
