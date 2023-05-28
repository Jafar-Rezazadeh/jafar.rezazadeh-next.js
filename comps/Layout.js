import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>jafar.rezazadeh {router.asPath}</title>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
