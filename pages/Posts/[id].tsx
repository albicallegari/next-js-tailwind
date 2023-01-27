import LayoutContainer from "components/LayoutContainer/LayoutContainer";
import commonStyles from "../../styles/common.module.scss";
import { getAllPostIds, getPostData } from "lib/getFSData";
import Date from "components/Date/Date";
import Head from "next/head";

const Post = ({ postData }) => {
  return (
    <LayoutContainer>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={commonStyles.headingXl}>{postData.title}</h1>
        <div className={commonStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </LayoutContainer>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}