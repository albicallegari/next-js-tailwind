// An example of page for testing internal routing
import LayoutContainer from "components/LayoutContainer/LayoutContainer";
import commonStyles from "../../styles/common.module.scss";
import { getSortedPostsData } from "lib/getFSData";
import { useState } from "react";
import Head from "next/head";

// Using async function to get static data from file system
export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const FirstPost = ({ allPostsData }) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };
  return (
    <LayoutContainer>
      <Head>
        <title>First Post</title>
      </Head>
      <section
        className={`${commonStyles.headingMd} ${commonStyles.padding1px}`}
      >
        <h2 className={commonStyles.headingLg}>Blog</h2>
        <ul className={commonStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={commonStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
        <button onClick={handleClick}>Like ({likes})</button>
      </section>
    </LayoutContainer>
  );
};

export default FirstPost;
