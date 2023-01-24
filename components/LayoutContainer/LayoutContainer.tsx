// Example of component that could be used as a generic container
import { LayoutContainerProps } from "./LayoutContainer.models";
import commonStyles from "../../styles/common.module.scss";
import styles from "./LayoutContainer.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const name = "Alberto Callegari";
export const appName = "Next.js - Tailwind";

const LayoutContainer = ({ children, home }: LayoutContainerProps) => {
  return (
    <div className={styles.Layout_container}>
      <Head>
        {/* Set Head with all meta for every page/component*/}
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Build a Single page application using Next.js and Tailwind, deploying it on Vercel"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            appName
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={appName} />
      </Head>
      {/** Add HEAD section */}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/me.png"
              className={commonStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={commonStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/me.png"
                className={commonStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={commonStyles.headingLg}>
              <Link href="/" className={commonStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      {/** Add MAIN section */}
      <main>{children}</main>
      {/** Add Optional BackToHome CTA */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">&larr; Back to home</Link>
        </div>
      )}
    </div>
  );
};

export default LayoutContainer;
