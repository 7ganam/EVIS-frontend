/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Remove, RemoveRedEye } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Chip, Divider, styled } from "@mui/material";
import BazarRating from "components/BazarRating";
import { FlexBetween, FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import Link from "next/link";
import React, { Fragment, useCallback } from "react";
const StyledBazarCard = styled(Box)(() => ({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
  "&:hover": {
    "& .hoverImgBox": {
      filter: "blur(5px)",
    },
    "& .hoverButtonBox": {
      opacity: 1,
    },
  },
}));
const HoverButtonBox = styled(Box)(() => ({
  opacity: 0,
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: ".5s ease",
  transform: "translate(-50%, -50%)",
  "& .buttonBox": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    "& .addCartButton": {
      bottom: 20,
      margin: "auto",
      padding: "4px 14px",
      position: "absolute",
      "& svg": {
        fontSize: 16,
      },
    },
  },
}));
const ImageBox = styled(Box)(() => ({
  opacity: 1,
  padding: "44px 40px",
  background: "#F5F5F5",
  transition: "all .3s ease",
}));
const ItemController = styled(FlexBetween)(({ theme }) => ({
  background: "#fff",
  overflow: "hidden",
  borderRadius: "5px",
  boxShadow: theme.shadows[2],
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "6px 12px",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#f3f5f9",
    },
  },
  "& svg": {
    fontSize: 22,
    color: theme.palette.grey[600],
  },
}));
const StyledChip = styled(Chip)(() => ({
  zIndex: 11,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
}));
const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
})); // ====================================================================

// ====================================================================
const ProductCard13 = (props) => {
  const { off, id, title, price, imgUrl, rating, hideRating } = props;
  const { state, dispatch } = useAppContext();
  const cartItem = state.cart.find((item) => item.id === id);
  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          price,
          imgUrl,
          id,
          name: title,
          qty: amount,
        },
      });
    },
    []
  );
  return (
    <StyledBazarCard>
      <ImageWrapper>
        {off !== 0 && (
          <StyledChip color="primary" size="small" label={`${off}% off`} />
        )}
        <ImageBox className="hoverImgBox">
          <Link href={`/product/${id}`}>
            <a>
              <LazyImage
                alt={title}
                width={190}
                height={190}
                src={imgUrl}
                layout="responsive"
                objectFit="contain"
              />
            </a>
          </Link>
        </ImageBox>

        <HoverButtonBox className="hoverButtonBox">
          <Box className="buttonBox">
            <ItemController>
              <Link href={`/product/${id}`}>
                <a>
                  <Span>
                    <RemoveRedEye />
                  </Span>
                </a>
              </Link>

              <Divider orientation="vertical" flexItem />

              <Span>
                <FavoriteIcon />
              </Span>

              <Divider orientation="vertical" flexItem />

              <Span onClick={handleCartAmountChange(1)}>
                <ShoppingCartIcon />
              </Span>
            </ItemController>

            <Button
              color="primary"
              variant="outlined"
              className="addCartButton"
              onClick={handleCartAmountChange(
                cartItem?.qty ? cartItem.qty - 1 : 1
              )}
            >
              {cartItem?.qty ? (
                <Fragment>
                  <Remove /> Remove from Cart
                </Fragment>
              ) : (
                <Fragment>
                  <Add /> Add to Cart
                </Fragment>
              )}
            </Button>
          </Box>
        </HoverButtonBox>
      </ImageWrapper>

      <ContentWrapper>
        <Link href={`/product/${id}`}>
          <a>
            <H3
              mb={1}
              title={title}
              fontSize="14px" // textAlign="left"
              fontWeight="600"
              className="title"
              color="text.secondary"
            >
              {title}
            </H3>
          </a>
        </Link>

        {!hideRating && (
          <Box display="flex" alignItems="center">
            <BazarRating value={rating || 0} color="warn" readOnly />{" "}
            <Span
              sx={{
                color: "grey.600",
              }}
            >{`(${rating}.0)`}</Span>
          </Box>
        )}

        <FlexBox gap={1} alignItems="center" mt={0.5}>
          <Box fontWeight="600" color="primary.main">
            ${(price - (price * off) / 100).toFixed(2)}
          </Box>

          {off !== 0 && (
            <Box color="grey.600" fontWeight="600">
              <del>{price?.toFixed(2)}</del>
            </Box>
          )}
        </FlexBox>
      </ContentWrapper>
    </StyledBazarCard>
  );
};

export default ProductCard13;
