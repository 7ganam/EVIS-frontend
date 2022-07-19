import { Box, styled } from "@mui/material";
import BazarButton from "components/BazarButton";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import ProductCard8 from "components/product-cards/ProductCard8";
import { H2, H3, Span } from "components/Typography";
import { Fragment } from "react"; // styled component

const WrapperBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    "& .card-holder": {
      flexDirection: "column",
    },
  },
})); // ============================================================

// ============================================================
const FrequentlyBought = ({ productsData }) => {
  return (
    <WrapperBox mb={7.5}>
      <H3 mb={3}>Frequently Bought Together</H3>

      <FlexBox className="card-holder" flexWrap="wrap" m={-1}>
        {productsData.map((item, ind) => (
          <Fragment key={item.id}>
            <ProductCard8
              sx={{
                width: "100%",
                flex: "1 1 0",
                minWidth: "160px",
                margin: {
                  xs: 0,
                  sm: 1,
                },
                maxWidth: {
                  xs: "100%",
                  sm: "220px",
                },
              }}
              {...item}
            />
            {ind < productsData.length - 1 && (
              <FlexRowCenter>
                <H2 color="grey.600" mx={1}>
                  +
                </H2>
              </FlexRowCenter>
            )}
          </Fragment>
        ))}

        <FlexRowCenter>
          <H2 color="grey.600" mx={3}>
            =
          </H2>
        </FlexRowCenter>

        <FlexRowCenter
          m={1}
          minWidth={300}
          minHeight={200}
          border="1px solid"
          borderRadius="8px"
          className="gray-box"
          borderColor="grey.400"
          flexDirection="column"
        >
          <H3 color="primary.main">$2500</H3>
          <Span mb={2} fontWeight="600" color="grey.600">
            Save $500
          </Span>

          <FlexBox gap={1.5}>
            <BazarButton variant="contained" color="primary">
              Add to Cart
            </BazarButton>

            <BazarButton variant="outlined" color="primary">
              Add to List
            </BazarButton>
          </FlexBox>
        </FlexRowCenter>
      </FlexBox>
    </WrapperBox>
  );
};

export default FrequentlyBought;
