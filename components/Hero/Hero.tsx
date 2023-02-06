import React from "react";
import commonStyles from "../../styles/common.module.scss";
import { getTranslatedLabel } from "../../common/labels/utils";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      {/* overlay */}
      <div />
      <div>
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
      </div>
    </div>
  );
};

export default Hero;
