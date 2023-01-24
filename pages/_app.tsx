// Component wrapper used for global styles
import '../styles/index.scss';

const ComponentWrapper = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
};

export default ComponentWrapper;