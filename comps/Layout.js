import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense } from "react";
import Loading from "@/pages/loading";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>jafar.rezazadeh</title>
      </Head>
      <Suspense fallback={<Loading />}>
        <NavBar />
        {children}
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
