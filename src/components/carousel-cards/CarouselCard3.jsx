import { styled } from "@mui/material";
import BazarCard from "components/BazarCard";
import BazarImage from "components/BazarImage";
import { FlexBox } from "components/flex-box";
import { H2, Paragraph, Small } from "components/Typography";
import Link from "next/link";
// styled components
const ContentWrapper = styled(BazarCard)(({ theme }) => ({
  height: "100%",
  borderRadius: "2px",
  boxShadow: theme.shadows[4],
}));
const StyledFlexBox = styled(FlexBox)(() => ({
  padding: "1rem",
  paddingTop: "3rem",
  alignItems: "center",
  flexDirection: "column",
}));
const StyledShopButton = styled(Small)(({ theme }) => ({
  fontWeight: 900,
  lineHeight: 1.6,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
})); // ==========================================================

// ==========================================================
const CarouselCard3 = ({ carouselData }) => {
  return (
    <ContentWrapper>
      <StyledFlexBox>
        <H2 mb="0.5rem" textAlign="center" lineHeight={1.2}>
          {carouselData.title}
        </H2>

        <Paragraph color="grey.600" textAlign="center" mb="1.5rem">
          Starting at ${carouselData.price} & save upto {carouselData.off}%
        </Paragraph>

        <Link href={`/product/${carouselData.id}`}>
          <a>
            <StyledShopButton>{carouselData.buttonText}</StyledShopButton>
          </a>
        </Link>
      </StyledFlexBox>

      <BazarImage width="100%" src={carouselData.imgUrl} alt="shoes" />
    </ContentWrapper>
  );
};

export default CarouselCard3;
