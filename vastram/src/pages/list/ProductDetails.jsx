import axios from "axios";
import React, { useEffect, useState } from "react";
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
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import { getProduct } from "../../redux/AdminReducer/action";
const ProductDetails = () => {
  
  const dispatch = useDispatch();
  const men = useSelector((store)=>store.adminReducer.products)

  useEffect(()=>{
    dispatch(getProduct)
  },[])
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>User login details</TableCaption>
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Brand</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Discount</Th>
            <Th isNumeric>No of Products</Th>
            {/* <Th><button>EDIT</button></Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {men.length > 0 &&
            men.map((el) =>{
              return <ProductCard key={el.id} {...el} />
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductDetails;
