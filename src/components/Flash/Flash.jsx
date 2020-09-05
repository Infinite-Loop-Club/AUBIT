import React, { useState } from 'react';
import classes from './flash.module.scss';
import { news, events, links } from '../../constants/flash';

import Badge from "../Badge";

export default function Flash() {

  const [active, setActive] = useState(1);

  return (
    <div className={classes.flash}>
      <div className={classes.tab__trigger}>
        <ul>
          <li
            style={active === 1 ? { borderColor: "#a61d22" } : {}}
            onClick={() => setActive(1)}
          >
            <label htmlFor="tab1">News</label></li>
          <li
            style={active === 2 ? { borderColor: "#a61d22" } : {}}
            onClick={() => setActive(2)}
          >
            <label htmlFor="tab2">Events</label></li>
          <li
            style={active === 3 ? { borderColor: "#a61d22" } : {}}
            onClick={() => setActive(3)}
          >
            <label htmlFor="tab3">Links</label></li>
        </ul>
      </div>
      <div className={classes.tab__container_top}>
        <input type="radio" defaultChecked id="tab1" name="1" />
        <div className={classes.tab__content}>
          <ol className={classes.flash__list} style={{ animationDuration: `${news.length + 4}s` }}>
            {
              news.map((value, key) => {
                return <a key={key} href={value.link} className={classes.flash__link}>
                  <li className={classes.flash__item}>
                    <div className={classes.flash__item_icons}>
                      <span className="icon-globe"></span>
                      {
                        value.isNew && <Badge animate><span>N</span><span>E</span><span>W</span></Badge>
                      }
                    </div>
                    <span className={classes.flash__item_text}>{value.name}
                    </span>
                  </li>
                </a>
              })
            }
          </ol>
        </div>

        <input type="radio" id="tab2" name="1" />
        <div className={classes.tab__content}>
          <ol className={classes.flash__list} style={{ animationDuration: `${events.length + 4}s` }}>
            {
              events.map((value, key) => {
                return <a key={key} href={value.link} className={classes.flash__link}>
                  <li className={classes.flash__item}>
                    <div className={classes.flash__item_icons}>
                      <span className="icon-calendar"></span>
                      {
                        value.isNew && <Badge animate><span>N</span><span>E</span><span>W</span></Badge>
                      }
                    </div>
                    <span className={classes.flash__item_text}>{value.name}</span>
                  </li>
                </a>
              })
            }
          </ol>
        </div>

        <input type="radio" id="tab3" name="1" />
        <div className={classes.tab__content}>
          <ol className={classes.flash__list} style={{ animationDuration: `${links.length + 4}s` }}>
            {
              links.map((value, key) => {
                return <a key={key} href={value.link} className={classes.flash__link}>
                  <li className={classes.flash__item}>
                    <div className={classes.flash__item_icons}>
                      <span className="icon-link"></span>
                      {
                        value.isNew && <Badge animate><span>N</span><span>E</span><span>W</span></Badge>
                      }
                    </div>
                    <span className={classes.flash__item_text}>{value.name}</span>
                  </li>
                </a>
              })
            }
          </ol>

        </div>
      </div>
    </div>
  )
}
