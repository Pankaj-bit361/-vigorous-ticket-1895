import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getProduct } from "../redux/AdminReducer/action";
import { useNavigate, useParams } from "react-router-dom";
import "./edit.scss"


const EditPage = () => {
    const [data,setData] =useState("");
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const product = useSelector((store)=>store.adminReducer.products)
    console.log(product)
    const handleChange=(e)=>{
        const {name, value} = e.target;

        setData((prev)=>{
            return {...prev, [name] : value}
        })
    }

    const handleEdit =(e)=>{
        e.preventDefault()
        dispatch(editProduct(data, id)).then(() => dispatch(getProduct))
        alert("edited")
        navigate("/products")
    }

    useEffect(()=>{
        const data = product.find((el)=>el.id == id) 
        console.log("data",data)
        setData(data)
        console.log(id)
      },[])
    
  return (
    <div>
      <Navbar />
      <form onSubmit={handleEdit} className="form">
        <input className="input"
          type="text"
          name={"title"}
          value={data.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="input"
          name={"brand"}
          value={data.brand}
          onChange={handleChange}
        />
        <input
          type="number"
          className="input"
          name={"price"}
          value={data.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name={"discount"}
          className="input"
          value={data.discount}
          onChange={handleChange}
        />
        <input
          type="number"
          name={"count"}
          className="input"
          value={data.count}
          onChange={handleChange}
        />
        <button className="button" type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditPage;
