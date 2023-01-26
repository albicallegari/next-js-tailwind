// Home component is the first Component rendered
import LayoutContainer, { appName } from "components/LayoutContainer/LayoutContainer";
import commonStyles from '../../styles/common.module.scss';
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <LayoutContainer home>
      <Head>
        <title>{appName}</title>
      </Head>
      <section className={commonStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
        <p>Visit my <Link href="/Posts/pre-rendering">First Post</Link></p>
        <p>Visit my <Link href="/Posts/ssg-ssr">Second Post</Link></p>
        <p>Work in progress! Stay tuned.</p>
      </section>
    </LayoutContainer>
  );
};

export default Home;
