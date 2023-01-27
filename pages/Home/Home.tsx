// Home component is the first Component rendered
import LayoutContainer, {
  appName,
} from "components/LayoutContainer/LayoutContainer";
import commonStyles from "../../styles/common.module.scss";
import { getTranslatedLabel } from "../../common/labels/utils";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <LayoutContainer home>
      <Head>
        <title>{appName}</title>
      </Head>
      <section className={commonStyles.headingMd}>
        <p className={commonStyles.description}>
          {getTranslatedLabel("global.aboutMe")}
        </p>
        <p>
          Visit my test <Link href="/Posts/pre-rendering">First Post</Link>
        </p>
        <p>
          Visit my test <Link href="/Posts/ssg-ssr">Second Post</Link>
        </p>
        <span>
          {`Check out also my ${(
            <a href="https://albicallegari.github.io/react-portfolio">
              React portfolio
            </a>
          )}`}
        </span>
        <p>Work in progress! Stay tuned.</p>
      </section>
    </LayoutContainer>
  );
};

export default Home;
