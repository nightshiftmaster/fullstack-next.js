import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
// import ReactLogo from "../../../public/1.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 All rights reserved</div>
      <div className={styles.social}>
        <Image
          width={20}
          height={20}
          className={styles.icon}
          src="/facebook.png"
          alt="facebook icon"
        />
        <Image
          width={20}
          height={20}
          className={styles.icon}
          src="/youtube.png"
          alt="youtube icon"
        />
        <Image
          width={20}
          height={20}
          className={styles.icon}
          src="/insta.png"
          alt="instagram icon"
        />
      </div>
    </div>
  );
};

export default Footer;
