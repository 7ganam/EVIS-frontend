import { Box, styled, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard14 from "components/product-cards/ProductCard14";
import { Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useState } from "react"; // styled components

const SubTitle = styled(Paragraph)(({ theme }) => ({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.palette.grey[600],
})); // ================================================================

// ================================================================
const HealthBeautySection3 = ({ productsData }) => {
  const width = useWindowSize();
  const { palette } = useTheme();
  const [visibleSlides, setVisibleSlides] = useState(3);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);
  return (
    <CategorySectionCreator title="Top New Products" seeMoreLink="#" mb={0}>
      <SubTitle>Best deal with medical and beauty items</SubTitle>
      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={productsData.length}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            color: palette.primary.main,
            background: palette.primary[50],
            "&:hover": {
              background: palette.primary[100],
            },
          },
        }}
      >
        {productsData.map((item, ind) => (
          <Box pt={0.5} pb={2} key={ind}>
            <ProductCard14
              id={item.id}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.imgUrl}
            />
          </Box>
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default HealthBeautySection3;
