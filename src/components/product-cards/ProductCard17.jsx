/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Chip, styled, useTheme } from "@mui/material";
import BazarRating from "components/BazarRating";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import Link from "next/link";
import { Fragment, useCallback } from "react"; // styled components

const StyledCard = styled(Box)(({ theme }) => ({
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",
  position: "relative",
  transition: "all 250ms ease-in-out",
  outline: `2px solid ${theme.palette.grey[200]}`,
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .css-1i2n18j": {
      display: "flex",
    },
    "& .controlBox": {
      display: "block",
    },
  },
}));
const ImgBox = styled(Box)(({ theme }) => ({
  height: 250,
  marginBottom: 100,
  padding: "60px 40px 20px 40px",
  background: theme.palette.primary[50],
}));
const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));
const StyledChip = styled(Chip)(({ theme }) => ({
  zIndex: 11,
  left: "0px",
  top: "20px",
  color: "#fff",
  paddingLeft: 3,
  paddingRight: 3,
  borderRadius: 0,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
  background: theme.palette.primary.main,
}));
const StatusChipBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 42,
  zIndex: 11,
  top: "0px",
  right: "30px",
  fontSize: "12px",
  position: "absolute",
  background: theme.palette.primary.main,
  "& .triangle-left": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: `20px solid ${theme.palette.primary.main}`,
  },
  "& .triangle-right": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderBottom: "10px solid transparent",
    borderRight: `20px solid ${theme.palette.primary.main}`,
  },
}));
const StatusChip = styled(Span)(() => ({
  color: "#fff",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const ColorBox = styled(FlexBox)(({ theme }) => ({
  gap: 8,
  padding: "10px 5px",
  "& span": {
    width: 12,
    height: 12,
    borderRadius: 8,
    "&:hover": {
      cursor: "pointer",
      outline: `2px solid ${theme.palette.grey[200]}`,
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  padding: "4px",
  borderRadius: 0,
  transition: "all 0.3s",
  color: theme.palette.primary.main,
  "&:hover": {
    color: "#fff",
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const ProductCard17 = (props) => {
  const {
    sx,
    off,
    status,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,
    productColors,
  } = props;
  const { palette } = useTheme();
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
    <StyledCard sx={sx}>
      <Link href={`/product/${id}`}>
        <a>
          <ImgBox id="imgBox">
            {status && (
              <StatusChipBox>
                <StatusChip>{status}</StatusChip>
                <Box width="100%" display="flex">
                  <Box className="triangle-left" />
                  <Box className="triangle-right" />
                </Box>
              </StatusChipBox>
            )}

            {off !== 0 && <StyledChip size="small" label={`${off}% off`} />}

            <LazyImage
              width={100}
              height={100}
              src={imgUrl}
              id="productImg"
              layout="responsive"
              objectFit="contain"
            />
          </ImgBox>
        </a>
      </Link>

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/product/${id}`}>
              <a>
                <H3
                  mb={1}
                  title={title}
                  fontSize="24px" // textAlign="left"
                  fontWeight="700"
                  className="title"
                  color="text.secondary"
                >
                  {title}
                </H3>
              </a>
            </Link>

            {!hideRating && (
              <Box display="flex" alignItems="center">
                <BazarRating
                  fontSize={18}
                  value={rating || 0}
                  color="warn"
                  readOnly
                />{" "}
                <Span
                  sx={{
                    color: palette.grey[600],
                  }}
                >{`(${rating}.0)`}</Span>
              </Box>
            )}

            <ColorBox>
              {productColors.map((color, ind) => (
                <Span
                  key={ind}
                  sx={{
                    background: color,
                  }}
                />
              ))}
            </ColorBox>

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
          </Box>

          <FlexBox
            width="30px"
            alignItems="center"
            className="add-cart"
            flexDirection="column-reverse"
            justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"}
          >
            <StyledButton
              variant="outlined"
              onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
            >
              <Add fontSize="small" />
            </StyledButton>

            {!!cartItem?.qty && (
              <Fragment>
                <Box color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </Box>

                <StyledButton
                  variant="outlined"
                  onClick={handleCartAmountChange(cartItem?.qty - 1)}
                >
                  <Remove fontSize="small" />
                </StyledButton>
              </Fragment>
            )}
          </FlexBox>
        </FlexBox>
      </ContentWrapper>
    </StyledCard>
  );
};

export default ProductCard17;
