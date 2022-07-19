import { Box } from "@mui/material";
import BazarCard from "components/BazarCard";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import { FlexBox } from "components/flex-box";
import HoverBox from "components/HoverBox";
import GiftBox from "components/icons/GiftBox";
import LazyImage from "components/LazyImage";
import { H4 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import { useEffect, useState } from "react";

const Section13 = ({ bigDiscountList }) => {
  const [visibleSlides, setVisibleSlides] = useState(6);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);
  return (
    <CategorySectionCreator
      icon={<GiftBox />}
      title="Big Discounts"
      seeMoreLink="#"
    >
      <Box my="-0.25rem">
        <Carousel totalSlides={9} visibleSlides={visibleSlides}>
          {bigDiscountList.map((item) => (
            <Box py={0.5} key={item.id}>
              <BazarCard
                sx={{
                  p: "1rem",
                }}
              >
                <Link href={`/product/${item.id}`}>
                  <a>
                    <HoverBox borderRadius="8px" mb={1}>
                      <LazyImage
                        width={100}
                        height={100}
                        src={item.imgUrl}
                        layout="responsive"
                        alt={item.title}
                      />
                    </HoverBox>
                    <H4 fontWeight="600" fontSize="14px" mb={0.5}>
                      {item.title}
                    </H4>

                    <FlexBox gap={1}>
                      <H4 fontWeight="600" fontSize="14px" color="primary.main">
                        ${Math.ceil(item.price).toLocaleString()}
                      </H4>

                      <H4 fontWeight="600" fontSize="14px" color="grey.600">
                        <del>${Math.ceil(item.price).toLocaleString()}</del>
                      </H4>
                    </FlexBox>
                  </a>
                </Link>
              </BazarCard>
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default Section13;
