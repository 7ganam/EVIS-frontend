import { useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard16 from "components/product-cards/ProductCard16";
import useWindowSize from "hooks/useWindowSize";
import React, { useEffect, useState } from "react";

const GiftShopTopSales = ({ productsData }) => {
  const width = useWindowSize();
  const { palette, shadows } = useTheme();
  const [visibleSlides, setVisibleSlides] = useState(4);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <CategorySectionCreator title="Top Saled Items" seeMoreLink="#">
      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={productsData.length}
        sx={{
          "& .carousel__slider": {
            paddingBottom: "15px",
          },
          "& #backArrowButton, #backForwardButton": {
            width: 35,
            height: 35,
            borderRadius: 0,
            boxShadow: shadows[2],
            color: palette.primary.main,
            background: palette.primary[50],
            "&:hover": {
              background: palette.primary[100],
            },
          },
        }}
      >
        {productsData.map((item, ind) => (
          <ProductCard16
            key={ind}
            id={item.id}
            title={item.title}
            price={item.price}
            off={item.discount}
            rating={item.rating}
            imgUrl={item.imgUrl}
            sx={{
              "& #imgBox": {
                background: palette.primary[200],
              },
            }}
          />
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default GiftShopTopSales;
