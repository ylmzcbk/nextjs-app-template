import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";

import styles from "./PrimaryLayout.module.css";

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: FunctionComponent<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
