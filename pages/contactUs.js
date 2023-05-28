import styles from "../styles/ContactUs.module.css";
import { IoMdMail, IoMdPhonePortrait, IoLocationSharp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.container}>
        <h1 className={styles.contactUsTitle}>تماس</h1>
        <div className={styles.serviceItems}>
          <div className={styles.sItem}>
            <div className={styles.itemtitle}>
              <IoMdPhonePortrait className={styles.icon} />
              <span>شماره تماس</span>
            </div>
            <p
              style={{
                direction: "ltr",
                paddingRight: "20px",
                fontSize: "14px",
              }}
            >
              + (98) 914 693 40 29
            </p>
          </div>
          <div className={styles.sItem}>
            <div className={styles.itemtitle}>
              <IoMdMail className={styles.icon} />
              <span>ایمیل</span>
            </div>
            <p
              style={{
                direction: "ltr",
                paddingRight: "20px",
                fontSize: "14px",
              }}
            >
              jafarrezazadeh76@gmail.com
            </p>
          </div>
          <div className={styles.sItem}>
            <div className={styles.itemtitle}>
              <MdLocationOn className={styles.icon} />
              <span>آدرس محل سکونت</span>
            </div>
            <p style={{ paddingRight: "20px", fontSize: "14px" }}>
              ایران - آذربایجان شرقی - تبریز
            </p>
          </div>
        </div>

        {/* Form */}
        <div className={styles.formdiv}>
          <form method="post" className={styles.form}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="نام"
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="ایمیل"
              required
            />
            <textarea
              style={{ fontSize: "14px" }}
              className={styles.input}
              name="message"
              placeholder="پیام"
              required
            />
            <button type="submit" className={styles.submit}>
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
