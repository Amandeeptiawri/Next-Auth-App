import { Provider } from "react-redux";
import { store } from "../store";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
