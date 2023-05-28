import { useEffect, useRef } from "react";
import { useInView, motion, AnimatePresence, animate } from "framer-motion";
import { BsMouseFill, BsLink } from "react-icons/bs";
import landingStyles from "../styles/Resume.module.css";
import styles from "../styles/projects.module.css";
import Link from "next/link";

const Projects = () => {
  const refLanding = useRef(null);
  const landingIsInView = useInView(refLanding, { amount: 0.8 });
  const data = [
    {
      id: 0,
      url: "https://github.com/Jafar-Rezazadeh/web-project_react.js",
      img: "/assets/images/react.gif",
      frameWork: "React.js",
      desc: "نرم افزار singlePageApp ساخته شده با فریم ورک react.js",
    },
    {
      id: 1,
      url: "https://github.com/Jafar-Rezazadeh/rebuiltLandingPage-reactjs",
      img: "/assets/images/rebuiltLandingPage_2.gif",
      frameWork: "React.js",
      desc: "لندینگ پیچ دوباره سازی شده از روی یک وب سایت با کد نویسی صفر تا صد",
    },
    {
      id: 2,
      url: "https://github.com/Jafar-Rezazadeh/BuildSoftApp_Vue.js",
      img: "/assets/images/vue.gif",
      frameWork: "Vue.js",
      desc: "singlePageApp ساخته شده با فریم ورک Vue.js",
    },
    {
      id: 3,
      url: "https://github.com/Jafar-Rezazadeh/kabinet_froshy-Flutter-windows",
      img: "/assets/images/flutter-windows.gif",
      frameWork: "Flutter",
      desc: "نرم افزار ساده ساخته شده با فریم ورک Flutter برای پلتفرم ویندوز",
    },
    {
      id: 4,
      url: "https://github.com/Jafar-Rezazadeh/kabinetfroshy-Flutter-Android",
      img: "/assets/images/flutter-android.gif",
      frameWork: "Flutter",
      desc: "نرم افزار ساده ساخته شده با فریم ورک Flutter برای پلتفرم اندروید",
    },
  ];

  const projects = data.map((item) => (
    <div className={styles.item} key={item.id}>
      <div className={styles.image}>
        <a className="imageLink" href={item.url} target="_blank">
          <img src={item.img} alt={item.desc} />
          <motion.div className={styles.animdiv + " " + "animdivL"}>
            <BsLink className={styles.icon} />
          </motion.div>
        </a>
      </div>
      <motion.a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          color: "rgb(124, 230, 165)",
          transition: { duration: 0.2 },
        }}
      >
        <div className={styles.desc}>
          <h2 className={styles.descTitle}>{item.frameWork}</h2>
          <span className={styles.descContent}>{item.desc}</span>
        </div>
      </motion.a>
    </div>
  ));

  useEffect(() => {
    // -----------animating the mouse over on the project image-----------
    const animDiv = document.querySelectorAll(".imageLink");
    animDiv.forEach((item) => {
      // mouseenter
      item.addEventListener("mouseenter", () => {
        animate(
          item.lastElementChild,
          {
            height: "90%",
            width: "90%",
            opacity: 0.95,
          },
          { ease: "easeInOut" }
        );
      });

      //mouseleave
      item.addEventListener("mouseleave", () => {
        animate(
          item.lastElementChild,
          {
            height: "0%",
            width: "0%",
            opacity: 0,
          },
          { ease: "easeInOut" }
        );
      });
    });
    //------------
  }, []);

  return (
    <div className="projects">
      <motion.div className={landingStyles.landing} ref={refLanding}>
        <h1 className={landingStyles.title}>
          <span className="glitch" data-text="نمونه کار ها">
            نمونه کار ها
          </span>
        </h1>
        <span className={landingStyles.linkBourd}>
          <Link href="/" className={landingStyles.links}>
            <span>خانه</span>
          </Link>
          <span style={{ padding: "0 20px" }}> / </span>
          <Link href="/projects" className={landingStyles.links}>
            <span>نمونه کار ها</span>
          </Link>
        </span>

        <AnimatePresence>
          {landingIsInView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={landingStyles.scrolliconDiv + " " + "scrollicon"}
                initial={{ y: -20 }}
                animate={{ y: 20 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <BsMouseFill className={landingStyles.scrollicon} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className={styles.projectsView}>
        <div className={styles.contents}>{projects}</div>
      </div>
    </div>
  );
};

export default Projects;
