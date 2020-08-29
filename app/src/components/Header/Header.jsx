import React, { useState } from "react";
import cx from "classnames";

import styles from "./header.module.scss";

export default function Header(props) {
  // const [sticky, setSticky] = useState(false);
  const [ham, setHam] = useState(false);

  // useEffect(() => {
  //   window.onscroll = (event) => {
  //     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   }
  // }, []);

  function handleCLick() {
    setHam((old) => !old);
  }

  return (
    <header>
      <nav
        className={
          props.sticky
            ? ham
              ? cx(styles.nav, styles.white_bg, styles.sticky)
              : cx(styles.nav, styles.sticky)
            : ham
              ? cx(styles.nav, styles.white_bg)
              : styles.nav
        }
      >
        {/* <nav className={ham ? cx(styles.nav, styles.white_bg) : styles.nav}> */}
        {/* <nav className={(sticky || props.sticky) ? cx(styles.nav, styles.sticky) : styles.nav}> */}
        <div
          className={styles.nav_container}
          style={props.sticky ? { padding: "1.5rem 0" } : {}}
        >
          <div className={styles.nav__brand}>
            <img src="/images/logo-maroon.png" alt="aubit" className={styles.nav__brand_logo} />
            <h5 className={styles.nav__brand_text}>AUBIT</h5>
          </div>

          <ul
            className={
              ham ? cx(styles.nav__list, styles.nav__active) : styles.nav__list
            }
          >
            <li className={styles.nav__item}>
              <a href="/" className={styles.nav__link}>
                Home
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="/administration" className={styles.nav__link}>
                Administration{" "}
              </a>
              {/* <div className={styles.nav__dropdown}>
                <ol className={styles.nav__dropdown_list}>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Dean</li>
                  </a>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Vice Chancellor</li>
                  </a>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Registrar</li>
                  </a>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Additional Registrar</li>
                  </a>
                </ol>
              </div> */}
            </li>
            <li className={styles.nav__item}>
              <p className={styles.nav__link} style={{ cursor: "pointer" }}>
                Academic
              </p>
              <div className={styles.nav__dropdown}>
                <ol className={styles.nav__dropdown_list}>
                  <a href="/courses" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>
                      Courses Offered
                    </li>
                  </a>
                  <a href="/departments" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Departments</li>
                  </a>
                </ol>
              </div>
            </li>
            <li className={styles.nav__item}>
              <p className={styles.nav__link} style={{ cursor: "pointer" }}>
                Features & Services
              </p>
              <div className={styles.nav__dropdown}>
                <ol className={styles.nav__dropdown_list}>
                  <a href="/hostel" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Hostel</li>
                  </a>
                  <a href="/library" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Library</li>
                  </a>
                  <a href="/placement" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Placement</li>
                  </a>
                  <a href="/studentAffairs" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>
                      Student Affairs
                    </li>
                  </a>
                </ol>
              </div>
            </li>
          </ul>

          <div className={styles.burger} onClick={handleCLick}>
            <div
              className={
                ham
                  ? cx(styles.burger__line, styles.burger__line_toggle)
                  : styles.burger__line
              }
            >
              &nbsp;
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
