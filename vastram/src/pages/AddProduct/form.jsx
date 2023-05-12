import React, { useEffect, useState } from "react";
import "./form.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts, getProduct } from "../../redux/AdminReducer/action";
const Form = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [rating, setrating] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState("");
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("OK");
    let obj = {
      image,
      title,
      discription,
      price: +price,
      discountPrice: +price,
      rating: +rating,
      gender,
      color,
      size,
      count: +count,
    };

    dispatch(addProducts(obj)).then(() => dispatch(getProduct));
    alert("Product Added")
    console.log(obj);
    setImage("");
    setTitle("");
    setDiscription("");
    setPrice("");
    setrating("");
    setDiscountPrice("");
    setGender("");
    setColor("");
    setSize("");
    setCount("");
    setBrand("");
  };
  return (
    <div className="top">
      <div className="container">
        <div className="box">
          <span className="border"></span>
          <form id="mform" onSubmit={handleSubmit}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {" "}
              Add New Product{" "}
            </h1>
            <input
              type="text"
              value={image}
              placeholder="Enter image"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              value={brand}
              placeholder="Enter brand"
              onChange={(e) => setBrand(e.target.value)}
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

            <select
              id="Size"
              name="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <input
              type="text"
              placeholder="Enter Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter Count"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                width: "40%",
                justifyContent: "space-between",
              }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <input type="radio" value="Men" name="gender" /> Men
              <input type="radio" value="Women" name="gender" /> Women
              <input type="radio" value="Other" name="gender" /> Other
            </div>
            <button className="btttn" type="submit">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;