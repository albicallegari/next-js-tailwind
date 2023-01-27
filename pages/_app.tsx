// Component wrapper used for global styles
import '../styles/global.scss';

const ComponentWrapper = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
};

export default ComponentWrapper;