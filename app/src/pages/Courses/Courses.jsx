import React, { Fragment } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";

export default function Courses() {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <Table data={data} />
      </main>
      <Footer />
    </Fragment>
  );
}

const data = {
  header: ["Department", "Course"],
  values: [
    ["Automobile", "B.E. Automobile Engineering"],
    [
      <p>
        Mr.R.Balasubramania
        <br /> Former Member,
        <br /> Tamilnadu Electricity Regulatory Commission,
        <br /> Chennai, & Chief Engineer,
        <br /> TNEB, Chennai
      </p>,
      <p>
        Former Member Secretary, TERC,
        <br />
        258 / 6, Swathi Appartments,
        <br />
        Opp.to Tirumangalam Police Station
        <br /> Chennai - 600 101.
      </p>,
      "Chairman",
      "seethalakshmib@hotmail.com",
      "9840055645",
    ],
    [
      <p>
        Mr.R.Balasubramania
        <br /> Former Member,
        <br /> Tamilnadu Electricity Regulatory Commission,
        <br /> Chennai, & Chief Engineer,
        <br /> TNEB, Chennai
      </p>,
      <p>
        Former Member Secretary, TERC,
        <br />
        258 / 6, Swathi Appartments,
        <br />
        Opp.to Tirumangalam Police Station
        <br /> Chennai - 600 101.
      </p>,
      "Chairman",
      "seethalakshmib@hotmail.com",
      "9840055645",
    ],
    [
      <p>
        Mr.R.Balasubramania
        <br /> Former Member,
        <br /> Tamilnadu Electricity Regulatory Commission,
        <br /> Chennai, & Chief Engineer,
        <br /> TNEB, Chennai
      </p>,
      <p>
        Former Member Secretary, TERC,
        <br />
        258 / 6, Swathi Appartments,
        <br />
        Opp.to Tirumangalam Police Station
        <br /> Chennai - 600 101.
      </p>,
      "Chairman",
      "seethalakshmib@hotmail.com",
      "9840055645",
    ],
    [
      <p>
        Mr.R.Balasubramania
        <br /> Former Member,
        <br /> Tamilnadu Electricity Regulatory Commission,
        <br /> Chennai, & Chief Engineer,
        <br /> TNEB, Chennai
      </p>,
      <p>
        Former Member Secretary, TERC,
        <br />
        258 / 6, Swathi Appartments,
        <br />
        Opp.to Tirumangalam Police Station
        <br /> Chennai - 600 101.
      </p>,
      "Chairman",
      "seethalakshmib@hotmail.com",
      "9840055645",
    ],
    [
      <p>
        Mr.R.Balasubramania
        <br /> Former Member,
        <br /> Tamilnadu Electricity Regulatory Commission,
        <br /> Chennai, & Chief Engineer,
        <br /> TNEB, Chennai
      </p>,
      <p>
        Former Member Secretary, TERC,
        <br />
        258 / 6, Swathi Appartments,
        <br />
        Opp.to Tirumangalam Police Station
        <br /> Chennai - 600 101.
      </p>,
      "Chairman",
      "seethalakshmib@hotmail.com",
      "9840055645",
    ],
  ],
};
