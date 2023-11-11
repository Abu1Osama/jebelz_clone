import React from "react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { store, wrapper } from "../Redux/store";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
    <Provider store={store}>
      <Component {...pageProps} key={router.route} />
    </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp)
