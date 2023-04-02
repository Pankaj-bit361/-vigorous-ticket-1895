import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { delProduct, getProduct } from "../../redux/AdminReducer/action";
import { Link } from "react-router-dom";
const ProductCard = ({
  id,
  title,
  brand,
  price,
  discount,
  count,
  displayMen,
}) => {
  const dispatch = useDispatch();
  const handleDel = () => {
    dispatch(delProduct(id)).then(() => dispatch(getProduct));
    //  axios.delete(`https://determined-gold-jaguar.cyclic.app/women/${id}`)
    //   .then(() => {
    //     //   displayMen()
    //     console.log(id);
    //   });
  };

  console.log(id);
  // const handleEdit = () => {
  //   alert("clicked")
  // };
  return (
    <>
      <Tr key={id}>
        <Td>{title}</Td>
        <Td>{brand}</Td>
        <Td isNumeric>{price}</Td>
        <Td>{discount}</Td>
        <Td>{count}</Td>
        <Link to={`/edit/${id}`} style={{ textDecoration: "none" }}>
          <Td>
            <button
              // onClick={()=>handleEdit(id)}
              style={{
                backgroundColor: "green",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              EDIT
            </button>
          </Td>
        </Link>

        <Td>
          <button
            onClick={handleDel}
            style={{
              backgroundColor: "red",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            DELETE
          </button>
        </Td>
      </Tr>
    </>
  );
};

export default ProductCard;
