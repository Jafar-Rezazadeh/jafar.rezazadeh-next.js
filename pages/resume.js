import Link from "next/link";
import { BsMouseFill } from "react-icons/bs";
import styles from "../styles/Resume.module.css";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Resume = () => {
  // --------------skills(progressbar)---------------
  const [_htmlCssJs, _htmlCssJsset] = useState(0);
  const [_react_js, _react_jsset] = useState(0);
  const [_next_js, _next_jsset] = useState(0);
  const [_flutter, _flutterset] = useState(0);
  // ------------------------------------------------

  // ---------------langueges---------------

  const turki = 5;
  const farsi = 4;
  const english = 3;

  function langItems() {
    const langs = [
      { id: 0, title: "ترکی", rate: 5, ratename: "زبان مادری" },
      { id: 1, title: "فارسی", rate: 4, ratename: "حرفه ای" },
      { id: 2, title: "انگلیسی", rate: 3, ratename: "توانمند برای کار" },
    ];

    const data = [];
    langs.forEach((e) => {
      data.push(
        <div className={styles.lanItem} key={e.id}>
          <span className={styles.lanTitle2}>{e.title}:</span>
          <div className={styles.rate}>{langRate(e.rate, e.ratename)}</div>
        </div>
      );
    });

    return data;
  }
  function langRate(lang, ratename) {
    const rate = [];
    for (let index = 0; index < 5; index++) {
      rate.push(
        <div className={styles.rateOutter} key={index}>
          {index < lang && (
            <>
              {index == lang - 1 && (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{
                      position: "absolute",
                      top: -85,
                      height: 100,
                      width: 100,
                      right: -30,
                    }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H8L11.6464 20.6464C11.8417 20.8417 12.1583 20.8417 12.3536 20.6464L16 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3Z"
                        stroke="#7ce6a5ff"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <p
                    style={{
                      position: "absolute",
                      top: "-60px",
                      textAlign: "center",
                      width: "40px",
                      fontSize: "70%",
                      wordWrap: "wrap",
                    }}
                  >
                    {ratename}
                  </p>
                </>
              )}

              <div className={styles.rateInner} />
            </>
          )}
        </div>
      );
    }
    return rate;
  }

  // ---------------------------------------

  // --------------refs---------------
  const refLanding = useRef(null);
  const landingIsInView = useInView(refLanding, { amount: 0.8 });

  const refSkills = useRef(null);
  const skillsIsInView = useInView(refSkills, { amount: 1, once: true });
  // ---------------------------------

  useEffect(() => {
    // Progress bar animation
    if (skillsIsInView) {
      // html/css/js
      animate(0, 75, {
        delay: 0.1,
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => _htmlCssJsset(value),
      });
      // react.js
      animate(0, 50, {
        delay: 0.5,
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => _react_jsset(value),
      });
      // next.js
      animate(0, 30, {
        delay: 1,
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => _next_jsset(value),
      });
      // flutter
      animate(0, 40, {
        delay: 1.5,
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => _flutterset(value),
      });
    }
  }, [skillsIsInView]);

  return (
    <div className={styles.mainContainer}>
      {/* ----------landing--------- */}
      <motion.div className={styles.landing} ref={refLanding}>
        <h1 className={styles.title}>
          <span className="glitch" data-text="رزومه">
            رزومه
          </span>
        </h1>
        <span className={styles.linkBourd}>
          <Link href="/" className={styles.links}>
            <span>خانه</span>
          </Link>
          <span style={{ padding: "0 20px" }}> / </span>
          <Link href="/resume" className={styles.links}>
            <span>رزومه</span>
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
                className={styles.scrolliconDiv + " " + "scrollicon"}
                initial={{ y: -20 }}
                animate={{ y: 20 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <BsMouseFill className={styles.scrollicon} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/* -------------------------- */}

      <div className={styles.mainBody}>
        {/* ----------about me---------*/}
        <div className={styles.aboutMe}>
          <span className={styles.bodyTitle}>درباره من</span>

          <p className={styles.aboutP}>
            Exercitation laborum eu consectetur culpa exercitation ipsum culpa
            mollit. Sint qui nulla non nisi cupidatat laborum pariatur commodo
            eu cillum eiusmod esse minim fugiat. Fugiat excepteur irure culpa
            deserunt. Esse Lorem deserunt tempor amet nulla labore. Amet ut
            aliquip veniam eiusmod eiusmod minim sit enim officia excepteur
            cillum in consequat. Sit voluptate id ut enim. Officia aute mollit
            qui ipsum dolore anim Lorem.
          </p>
          <div className={styles.aboutInfo}>
            <ul className={styles.abInfoUl}>
              <li>
                <strong>نام:</strong> جعفر رضازاده
              </li>
              <li>
                <strong>سن:</strong> 22 سال
              </li>
              <li>
                <strong>ایمیل:</strong> jafarrezazadeh76@gmail.com
              </li>
              <li>
                <strong>شغل:</strong> برنامه نویس
              </li>
              <li>
                <strong>تابعیت:</strong> ایران
              </li>
              <li>
                <strong>اقامتگاه:</strong> تبریز
              </li>
            </ul>
          </div>
        </div>
        {/* --------------------------- */}

        {/* -----------------skills----------------- */}
        <div className={styles.skills} ref={refSkills}>
          <span className={styles.bodyTitle}>مهارت های فنی</span>
          <div className={styles.skillContents}>
            {/* html/css/js */}
            <div
              className={styles.circleProgress}
              style={{
                background: `conic-gradient(white ${
                  (_htmlCssJs / 100) * 360
                }deg, #000f20 0deg)`,
              }}
            >
              <div className={styles.circleProgressInner}>
                <p>
                  html/css/js
                  <br />
                  {parseInt(_htmlCssJs)}%
                </p>
              </div>
            </div>
            {/* react.js */}
            <div
              className={styles.circleProgress}
              style={{
                background: `conic-gradient(white ${
                  (_react_js / 100) * 360
                }deg, #000f20 0deg)`,
              }}
            >
              <div className={styles.circleProgressInner}>
                <p>
                  react.js
                  <br />
                  {parseInt(_react_js)}%
                </p>
              </div>
            </div>
            {/* next.js */}
            <div
              className={styles.circleProgress}
              style={{
                background: `conic-gradient(white ${
                  (_next_js / 100) * 360
                }deg, #000f20 0deg)`,
              }}
            >
              <div className={styles.circleProgressInner}>
                <p>
                  next.js
                  <br />
                  {parseInt(_next_js)}%
                </p>
              </div>
            </div>
            {/* flutter */}
            <div
              className={styles.circleProgress}
              style={{
                background: `conic-gradient(white ${
                  (_flutter / 100) * 360
                }deg, #000f20 0deg)`,
              }}
            >
              <div className={styles.circleProgressInner}>
                <p>
                  flutter
                  <br />
                  {parseInt(_flutter)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------- */}

        {/* -----------------langueges----------------- */}
        <motion.div
          className={styles.langueges}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <span className={styles.bodyTitle}>زبان ها</span>
          <div className={styles.lanItems}>{langItems()}</div>
        </motion.div>
        {/* ------------------------------------------- */}

        {/* footer */}
      </div>
    </div>
  );
};

export default Resume;
