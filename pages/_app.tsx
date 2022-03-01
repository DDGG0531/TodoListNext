import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "../components/Layout";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
