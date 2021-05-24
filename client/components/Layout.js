import Head from 'next/head';
import Navbar from './shared/Navbar';

export const Layout = ({ children }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700"
        rel="stylesheet"
      />
    </Head>

    <Navbar />

    <main>{children}</main>
  </div>
);
