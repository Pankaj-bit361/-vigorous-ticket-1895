import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./Admin.module.css"
const Admin = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [rating, setrating] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      image,
      title,
      discription,
      price: +price,
      discountPrice: +price,
      rating: +rating,
    };
    console.log(obj)
    setImage("");
    setTitle("");
    setDiscription("");
    setPrice("");

    setrating("");

    discountPrice("");
  };
  return (
    <div className={style.top}>
       <div className={style.container}>
       <div className={style.box}>
        <span className={style.border}></span>
        <form id='mform' onSubmit={handleSubmit}>
            <h2> data post </h2>
            <input
              type="text"
              value={image}
              placeholder="Enter image"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              value={title}
              placeholder="Enter name"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              value={discription}
              placeholder="Enter discription"
              onChange={(e) => setDiscription(e.target.value)}
            />
            <input
              type="text"
              value={price}
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              value={discountPrice}
              placeholder="Enter discount price"
              onChange={(e) => setDiscountPrice(e.target.value)}
            />
            <input
              type="text"
              value={rating}
              placeholder="Enter rating"
              onChange={(e) => setrating(e.target.value)}
            />

            <button className={style.btn} type="submit"> Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
