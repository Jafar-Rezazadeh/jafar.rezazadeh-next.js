import { BsLinkedin, BsTelegram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();

  useEffect(() => {
    // updating the navbar background on route changes
    if (router.route === "/" || router.route === "/contactUs") {
      setTimeout(() => {
        document.getElementById("footerID").classList.add("footerShowcase");
      }, 700);
    } else {
      document.getElementById("footerID").classList.remove("footerShowcase");
    }
  }, [router]);

  return (
    <motion.footer
      id="footerID"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.2,
        type: "spring",
      }}
    >
      <div className="iconLinks">
        <a href="">
          <BsLinkedin className="icons" />
        </a>
        <a href="">
          <GrMail className="icons" />
        </a>
        <a href="">
          <BsTelegram className="icons" />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
