import { Button } from "@mui/material";
import BazarImage from "src/components/BazarImage";
import { FlexBox } from "src/components/flex-box";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ComingSoon = () => {
  const router = useRouter();

  const handleGoBack = async () => {
    router.back();
  };

  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      px={2}
    >
      <BazarImage
        src="/assets/images/coming-soon-1.png"
        sx={{
          display: "block",
          maxWidth: "320px",
          width: "100%",
          mb: "1.5rem",
        }}
      />
      <FlexBox flexWrap="wrap">
        <Button
          variant="outlined"
          color="primary"
          sx={{
            m: "0.5rem",
          }}
          onClick={handleGoBack}
        >
          Go Back
        </Button>
        <Link href="/" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              m: "0.5rem",
            }}
          >
            Go to Home
          </Button>
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

export default ComingSoon;
