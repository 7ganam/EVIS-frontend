/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Remove, RemoveRedEye } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Chip, styled } from "@mui/material";
import BazarCard from "components/BazarCard";
import BazarRating from "components/BazarRating";
import { FlexBetween, FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import Link from "next/link";
import { Fragment, useCallback } from "react";
const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .controller": {
      display: "flex",
      bottom: 20,
    },
  },
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  padding: "44px 40px",
  background: "#efefef",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const HoverWrapper = styled(FlexBetween)(({ theme }) => ({
  left: 0,
  right: 0,
  width: 120,
  height: 25,
  bottom: -40,
  margin: "auto",
  overflow: "hidden",
  background: "#fff",
  borderRadius: "5px",
  position: "absolute",
  boxShadow: theme.shadows[2],
  transition: "bottom 0.3s ease-in-out",
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "0px 10px",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#f3f5f9",
    },
  },
  "& a": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#f3f5f9",
    },
  },
  "& svg": {
    fontSize: 18,
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
const ContentWrapper = styled(FlexBox)(() => ({
  minHeight: 110,
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
})); // ===============================================================

// ===============================================================
const ProductCard13 = (props) => {
  const { off, id, title, price, imgUrl, rating, hideRating, hoverEffect } =
    props;
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
    <StyledBazarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {off !== 0 && (
          <StyledChip color="primary" size="small" label={`${off}% off`} />
        )}

        <Link href={`/product/${id}`}>
          <a>
            <LazyImage
              alt={title}
              width={190}
              src={imgUrl}
              height={190}
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </Link>

        <HoverWrapper className="controller">
          <Link href={`/product/${id}`}>
            <a>
              <Span>
                <RemoveRedEye />
              </Span>
            </a>
          </Link>

          <Span
            sx={{
              borderLeft: "1px solid",
              borderRight: "1px solid",
              borderColor: "grey.300",
            }}
          >
            <FavoriteBorder />
          </Span>

          <Span onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}>
            <ShoppingCartIcon />
          </Span>
        </HoverWrapper>
      </ImageWrapper>

      <ContentWrapper>
        <Box flex="1 1 0" minWidth="0px" mr={1}>
          <Link href={`/product/${id}`}>
            <a>
              <H3
                mb={1}
                title={title}
                fontSize="14px"
                textAlign="left"
                fontWeight="600"
                className="title"
                color="text.secondary"
              >
                {title}
              </H3>
            </a>
          </Link>

          {!hideRating && (
            <FlexBox gap={1} alignItems="center">
              <BazarRating value={rating || 0} color="warn" readOnly />
              <Span color="grey.600">{`(${rating})`}</Span>
            </FlexBox>
          )}

          <FlexBox gap={1} alignItems="center" mt={0.5}>
            <Box fontWeight={600} color="primary.main">
              ${(price - (price * off) / 100).toFixed(2)}
            </Box>

            {off !== 0 && (
              <Box color="grey.600" fontWeight={600}>
                <del>{price?.toFixed(2)}</del>
              </Box>
            )}
          </FlexBox>
        </Box>

        <FlexBox
          width="30px"
          alignItems="center"
          className="add-cart"
          flexDirection="column-reverse"
          justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"}
        >
          <Button
            color="primary"
            variant="outlined"
            sx={{
              padding: "3px",
            }}
            onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
          >
            <Add fontSize="small" />
          </Button>

          {!!cartItem?.qty && (
            <Fragment>
              <Box color="text.primary" fontWeight="600">
                {cartItem?.qty}
              </Box>

              <Button
                color="primary"
                variant="outlined"
                sx={{
                  padding: "3px",
                }}
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </Button>
            </Fragment>
          )}
        </FlexBox>
      </ContentWrapper>
    </StyledBazarCard>
  );
};

export default ProductCard13;
