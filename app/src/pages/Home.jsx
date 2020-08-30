import React, { Fragment } from "react";
import cx from 'classnames';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "./style.module.scss";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <Fragment>
      <Header />

      <main className={styles.homepage}>
        <section className={styles.hero}>
          <div className={styles.hero_container}>
            <div className={styles.hero__top}>
              <div className={styles.hero__title}>
                <h1 className={cx(styles.hero__heading, styles.heading_primary_main)}>
                  University College of Engineering
                </h1>
                <h2 className={cx(styles.hero__sub_heading, styles.heading_primary_small)}>
                  Bharathidasan Institute of Technology
                </h2>
                <p className={styles.description}>Anna University, Tiruchirappalli</p>
              </div>
            </div>

            <div className={styles.hero__bottom}>
              <div className={styles.gallery}>
                <Gallery />
              </div>

              <div className={styles.flash}>
                <div className={styles.tab__trigger}>
                  <ul>
                    <li><label htmlFor="tab1">News</label></li>
                    <li><label htmlFor="tab2">Events</label></li>
                    <li><label htmlFor="tab3">Links</label></li>
                  </ul>
                </div>
                <div className={styles.tab__container_top}>
                  <input type="radio" defaultChecked id="tab1" name="1" />
                  <div className={styles.tab__content}>
                    <ol className={styles.flash__list} style={{ animationDuration: `${news.length + 2}s` }}>
                      {
                        news.map((value, key) => {
                          return <a key={key} href={value.link} className={styles.flash__link}>
                            <li className={styles.flash__item}>
                              <span className="icon-globe" style={{ marginRight: "1rem" }}></span>
                              <span className={styles.flash__item_text}>{value.data}</span>
                            </li>
                          </a>
                        })
                      }
                    </ol>
                  </div>

                  <input type="radio" id="tab2" name="1" />
                  <div className={styles.tab__content}>
                    <ol className={styles.flash__list} style={{ animationDuration: `${event.length + 2}s` }}>
                      {
                        event.map((value, key) => {
                          return <a key={key} href={value.link} className={styles.flash__link}>
                            <li className={styles.flash__item}>
                              <span className="icon-calendar" style={{ marginRight: "1rem" }}></span>
                              <span className={styles.flash__item_text}>{value.data}</span>
                            </li>
                          </a>
                        })
                      }
                    </ol>
                  </div>

                  <input type="radio" id="tab3" name="1" />
                  <div className={styles.tab__content}>
                    <ol className={styles.flash__list} style={{ animationDuration: `${links.length + 2}s` }}>
                      {
                        links.map((value, key) => {
                          return <a key={key} href={value.link} className={styles.flash__link}>
                            <li className={styles.flash__item}>
                              <span className="icon-link" style={{ marginRight: "1rem" }}></span>
                              <span className={styles.flash__item_text}>{value.data}</span>
                            </li>
                          </a>
                        })
                      }
                    </ol>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.feature}>
          <div className={styles.feature_col}>
            <div className={styles.vision} data-aos="fade-down-right" data-aos-delay="50">
              <h4 className={styles.vision__heading}>Vision:</h4>
              <p className={styles.vision__text}>
                To transform students into competent professional and responsible
                citizens by focusing on assimilation, analysis, synthesis and
                dissemination of knowledge to meet the societal needs.
              </p>
            </div>

            <div className={styles.nba} data-aos="fade-up-right" data-aos-delay="50">
              <h4 className={styles.nba__heading}>
                Approved by AICTE, NBA Accredited Departments:
              </h4>
              <ul className={styles.nba__list}>
                <li className={styles.nba__item}>Department of XYZ</li>
                <li className={styles.nba__item}>Department of ABC</li>
                <li className={styles.nba__item}>Department of DEF</li>
              </ul>
            </div>
          </div>
          <div className={cx(styles.mission, styles.feature_col)} data-aos="fade-left" data-aos-delay="50">
            <h4 className={styles.mission__heading}>Mission:</h4>
            <ul className={styles.mission__list}>
              <li className={styles.mission__items}>
                Impart quality education to meet the needs of the profession and
                society.
            </li>
              <li className={styles.mission__items}>
                Attract and develop talented and committed human resource and
                provide an environment conducive to innovation and research.
            </li>
              <li className={styles.mission__items}>
                Facilitate effective interactions among faculty, students, premier
                educational institutions, R & D laboratories, industries,alumni
                and other stack-holders.
            </li>
              <li className={styles.mission__items}>
                Practice and promote high standards of professional ethics,
                transparency and accountability and team spirit and
                entrepreneurial skills.
            </li>
            </ul>
          </div>
        </section>
        <section className={styles.location}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15683.913988048065!2d78.73218891102297!3d10.658776773945343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7120582d954fcb0f!2sAnna%20University%20Regional%20Office%20Tiruchirappalli%2C!5e0!3m2!1sen!2sin!4v1595313950789!5m2!1sen!2sin"
            title="map" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
          </iframe>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}



const news = [
  {
    data: "New announcement1",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement2",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement3",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement4",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement5",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement6",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement7",
    link: "#ab",
    new: true
  }
];


const event = [
  {
    data: "New announcement1",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement2",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement3",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement4",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement5",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement6",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement7",
    link: "#ab",
    new: true
  }
];



const links = [
  {
    data: "New announcement1",
    link: "#ab",
    new: true
  },
  {
    data: "New announcement2",
    link: "#ab",
    new: true
  }
];