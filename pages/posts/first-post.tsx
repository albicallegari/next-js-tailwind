// An example of page for testing internal routing
import LayoutContainer from "components/LayoutContainer/LayoutContainer";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const FirstPost = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };
  return (
    <LayoutContainer>
      <Head>
        <title>First Post</title>
      </Head>
      {/* 
      If you need to import scripts asap
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> 
      */}
      <h1>First Post</h1>
      <button onClick={handleClick}>Like ({likes})</button>
    </LayoutContainer>
  );
};

export default FirstPost;
