import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Dezimal-Stunden-Rechner</title>
        <meta
          name="description"
          content="Umrechnung von Stunden und Minuten in Dezimalzahl"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="Merce Plegeteam Logo"
          width={125}
          height={50}
        />
      </header>
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}
