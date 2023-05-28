import Layout from "@/comps/Layout";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Layout key={router.asPath}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}
