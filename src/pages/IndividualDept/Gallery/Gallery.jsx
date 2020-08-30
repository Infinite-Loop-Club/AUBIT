import React, { Fragment } from "react";
import styles from "./style.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import Gallery from "../../../components/ImageGallery/ImageGallery";

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


const sources = [{
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/1.JPG',
  alt: 'slide-1'
}, {
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/2.JPG',
  alt: 'slide-2'
}, {
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/3.JPG',
  alt: 'slide-3'
},
{
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/4.JPG',
  alt: 'slide-4'
},
{
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/5.JPG',
  alt: 'slide-5'
},
{
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/6.JPG',
  alt: 'slide-6'
},
{
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/7.JPG',
  alt: 'slide-7'
},
{
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/8.JPG',
  alt: 'slide-8'
},
{
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/9.JPG',
  alt: 'slide-9'
},
{
  src: 'http://www.aubit.edu.in/departments/AutomobileEngineering/images/Gallery/10.JPG',
  alt: 'slide-10'
}
]