import LayoutPage from "../component/LayoutPage";
import "../styles/globals.less";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </SessionProvider>
  );
}
export default MyApp;
