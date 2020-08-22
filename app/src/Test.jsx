import React from 'react';
import cx from 'classnames';

export default function App() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_container}>
        <div className={styles.hero__top}>
          <div className={styles.hero__title}>
            <h1 className={cx(styles.hero__heading, styles.heading - primary - main)}>
              University College of Engineering
            </h1>
            <h2 className={cx(styles.hero__sub - heading, styles.heading - primary - small)}>
              Bharathidasan Institute of Technology
            </h2>
            <p className={styles.description}>Anna University, Tiruchirappalli</p>
          </div>
        </div>

        <div className={styles.hero__bottom}>
          <div className={styles.gallery}>

            <div className={styles.gallery__showcase}>
              <div className={cx(styles.gallery__image, styles.gallery__image_1)}>
                <img src="images/slide-1.png" alt="slide-1" />
              </div>
              <div className={cx(styles.gallery__image, styles.gallery__image_2)}>
                <img src="images/slide-2.png" alt="slide-2" />
              </div>
              <div className={cx(styles.gallery__image, styles.gallery__image_3)}>
                <img src="images/slide-3.png" alt="slide-3" />
              </div>
            </div>

          </div >

          <div className={styles.flash}>
            <div className={styles.tab__trigger}>
              <ul>
                <li><label for="tab1">News</label></li>
                <li><label for="tab2">Events</label></li>
                <li><label for="tab3">Links</label></li>
              </ul>
            </div>
            <div className={styles.tab__containertop}>
              <input type="radio" checked id="tab1" name="1" />
              <div className={styles.tab__content}>
                <ol className={styles.flash__list}>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>
                      <span className={styles.flash__item_text}>Upcoming event</span>
                    </li>
                  </a>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>
                      <span className={styles.flash__item_text}>New announcement</span>
                    </li>
                  </a>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>
                      <span className={styles.flash__item_text}>New announcement</span>
                    </li>
                  </a>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>
                      <span className={styles.flash__item_text}>Upcoming event</span>
                    </li>
                  </a >
                </ol >
              </div >

              <input type="radio" id="tab2" name="1" />
              <div className={styles.tab__content}>
                <ol className={styles.flash__list}>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>
                      <span className={styles.flash__item_text}>New announcement</span>
                    </li>
                  </a>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>
                      <span className={styles.flash__item_text}>Upcoming event</span>
                    </li>
                  </a>
                </ol >
              </div >

              <input type="radio" id="tab3" name="1" />
              <div className={styles.tab__content}>
                <ol className={styles.flash__list}>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>
                      <span className={styles.flash__item_text}>Upcoming event</span>
                    </li>
                  </a>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>
                      <span className={styles.flash__item_text}>New announcement</span>
                    </li>
                  </a>
                  <a href="#" className={styles.flash__link}>
                    <li className={styles.flash__item}>

                      <span className={styles.flash__item_text}>New announcement</span>
                    </li>
                  </a >
                </ol >
              </div >
            </div >
          </div >
        </div >
      </div >
    </section >

  );
}

