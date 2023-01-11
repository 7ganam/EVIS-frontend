import React from "react";

const OpenGraphTags = () => {
  return (
    <React.Fragment>
      <meta
        property="og:url"
        content="https://bazar-react.vercel.app/landing"
      />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Electric Vehicles Innovation Summit" />
      <meta
        property="og:description"
        content="The MENA’s First Electric Vehicles Exhibition and Conference"
      />
      <meta property="og:image" content="/assets/images/landing/preview.png" />
    </React.Fragment>
  );
};

export default OpenGraphTags;
