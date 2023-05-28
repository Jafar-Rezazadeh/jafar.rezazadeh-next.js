import styles from "@/styles/Home.module.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* contents */}
      <div className={styles.contents}>
        <h1 className={styles.title}>
          من{" "}
          <span
            className={styles.name + " " + "glitch"}
            data-text="جعفر رضازاده"
          >
            جعفر رضازاده
          </span>{" "}
          هستم
        </h1>
        <div className={styles.title2}>
          <Typewriter
            options={{
              strings: [
                "توسعه دهنده نرم افزار در پلتفرم های Web-Desktop-Mobile .",
                "ساکن تبریز .",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
}
