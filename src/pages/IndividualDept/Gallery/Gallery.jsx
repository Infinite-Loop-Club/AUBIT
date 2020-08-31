import React, { Fragment } from "react";
import styles from "./style.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import Gallery from "../../../components/ImageGallery/ImageGallery";

import { sources } from "../../../constants/Gallery/automobile";

export default () => {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <h3
          className={styles.heading_primary_main}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Gallery
        </h3>

        <Gallery sources={sources} />
      </main>
      <Footer />
    </Fragment>
  );
};


