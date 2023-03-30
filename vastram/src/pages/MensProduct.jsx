import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Flex, Image, Select, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect,useState } from "react"

import {useDispatch, useSelector} from "react-redux"
import { getproducts } from "../redux/Productredux/action"
export const MensProducts=()=>{

    const [products,setProducts]=useState([])

    const data=useSelector((state)=>state.productReducer.products)
    
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getproducts)
},[])


    return <div>
    <Flex justifyContent={"space-between"}>
  <Text marginTop={"0.8%"}>Men's Clothing</Text>
  <Flex>
  <Text mt={"4%"}>Sort</Text>
    <Select >
        <option>Best Match</option>
        <option value="asc">Price low to high</option>
        <option value="desc">Price High to low</option>
       
    </Select> 
    </Flex>
  </Flex>

<SimpleGrid mt={"5%"} columns={3} h={"400px"} spacing={"2%"}>
{data.map((item)=>(
    <Box>
    <Image w={"100%"} src={item.images.image1}></Image>
    <Text>{item.title}</Text>
    <Text>${item.off_price} <span>After Coupon</span></Text>
    <del>${item.price}</del>
    <Text>{item.rating}</Text>
    </Box>
))}
</SimpleGrid>


    </div>
}