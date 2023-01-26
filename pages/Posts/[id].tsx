import LayoutContainer from "components/LayoutContainer/LayoutContainer";
import { getAllPostIds, getPostData } from "lib/getFSData";

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ postData }) => {
  return (
    <LayoutContainer>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </LayoutContainer>
  );
};

export default Post;
