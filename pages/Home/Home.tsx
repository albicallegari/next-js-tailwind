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
          What is SSR and SSG? Check out this{" "}
          <Link href="/Posts/pre-rendering">post</Link>
        </p>
        <p>
          When to use SSR or SSG? Check out this{" "}
          <Link href="/Posts/ssg-ssr">post</Link>
        </p>
        <span>
          {`Check out also my `}
          <a href="https://albicallegari.github.io/react-portfolio">
            React portfolio
          </a>
        </span>
        <p>{getTranslatedLabel("global.wip")}</p>
      </section>
    </LayoutContainer>
  );
};

export default Home;
