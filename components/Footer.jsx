import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://dannyprivate.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Programmed by {"Danny Nothdurft"}
        <span className={styles.logo}>
          <Image
            src="/dnlogo.png"
            alt="Logo von Danny Nothdurft"
            width={25}
            height={28}
          />
        </span>
      </a>
    </footer>
  );
}
