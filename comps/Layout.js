import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>jafar.rezazadeh</title>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
