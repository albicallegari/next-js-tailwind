// Home component is the first Component rendered
import Hero from "components/Hero/Hero";
import LayoutContainer, {
  appName,
} from "components/LayoutContainer/LayoutContainer";
import Head from "next/head";

const Home = () => {
  return (
    <LayoutContainer home>
      <Head>
        <title>{appName}</title>
      </Head>
      <Hero />
    </LayoutContainer>
  );
};

export default Home;
