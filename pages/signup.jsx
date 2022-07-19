import { FlexRowCenter } from "components/flex-box";
import Signup from "pages-sections/sessions/Signup";
import React from "react";

const SignUpPage = () => {
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <Signup />
    </FlexRowCenter>
  );
};

export default SignUpPage;
