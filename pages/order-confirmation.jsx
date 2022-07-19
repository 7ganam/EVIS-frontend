import { Container, styled } from "@mui/material";
import BazarButton from "components/BazarButton";
import BazarCard from "components/BazarCard";
import ShopLayout1 from "components/layouts/ShopLayout1";
import LazyImage from "components/LazyImage";
import Navbar from "components/navbar/Navbar";
import { H1, Paragraph } from "components/Typography";
import Link from "next/link";
// styled components
const Wrapper = styled(BazarCard)(() => ({
  margin: "auto",
  padding: "3rem",
  maxWidth: "630px",
  textAlign: "center",
}));
const StyledButton = styled(BazarButton)(() => ({
  marginTop: "2rem",
  padding: "11px 24px",
}));

const OrderConfirmation = () => {
  return (
    <ShopLayout1 navbar={<Navbar />}>
      <Container
        sx={{
          mt: "2rem",
          mb: "10rem",
        }}
      >
        <Wrapper>
          <LazyImage
            src="/assets/images/illustrations/party-popper.svg"
            width={116}
            height={116}
          />
          <H1 lineHeight={1.1} mt="1.5rem">
            Your order is completed!
          </H1>

          <Paragraph color="grey.800" mt="0.3rem">
            You will be receiving confirmation email with order details.
          </Paragraph>

          <Link href="/home-1" passHref>
            <StyledButton
              color="primary"
              disableElevation
              variant="contained"
              className="button-link"
            >
              Browse products
            </StyledButton>
          </Link>
        </Wrapper>
      </Container>
    </ShopLayout1>
  );
};

export default OrderConfirmation;
