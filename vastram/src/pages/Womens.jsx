import { useState } from "react";
import LargeWithAppLinksAndSocial from "../components/Footer";
import WithSubnavigation from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { WomenProducts } from "../components/WomenProducts";
import styles from "./Women.module.css";

export const Womens = () => {
  const [discount, setdiscount] = useState("");

  const [search, setsearch] = useState("");

  return (
    <>
      <WithSubnavigation search={search} setsearch={setsearch} />
      <div
        className={styles.WomenMain}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
            margin: "auto",
            margin: "5%",
            width: "80%",
            marginTop: "15%",
          }}
        >
          <Sidebar setdiscount={setdiscount} />
        </div>
        <div style={{ gridColumnStart: 3, gridColumnEnd: 8, margin: "5%" }}>
          {" "}
          <WomenProducts
            setsearch={setsearch}
            search={search}
            discount={discount}
          />
        </div>
      </div>

      <LargeWithAppLinksAndSocial />
    </>
  );
};
