import { SessionProvider } from "next-auth/react";
import React from "react";

interface AppProps {
  Component: React.ComponentType;
  pageProps: {
    session: any;
    [key: string]: any;
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}
