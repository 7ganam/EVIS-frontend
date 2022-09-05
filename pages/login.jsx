import { FlexRowCenter } from "src/components/flex-box";
import Login from "src/pages-sections/sessions/Login";
import React from "react";

const LoginPage = () => {
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <Login />
    </FlexRowCenter>
  );
};

export default LoginPage;
