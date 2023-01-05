import LayoutPage from "../component/LayoutPage";
import "../styles/globals.less";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  );
}

export default MyApp;
