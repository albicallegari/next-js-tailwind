import { getTranslatedLabel } from "common/labels/utils";
import Link from "next/link";

const custom404 = () => {
  return (
    <>
      <h1>{getTranslatedLabel('error.404')}</h1>
      <Link href="/">{getTranslatedLabel('global.backToHome')}</Link>
    </>
  );
};

export default custom404;