
import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Image, Select, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useSearchParams } from "react-router-dom"
import {FaArrowCircleUp} from 'react-icons/fa';
import bot from "../images/chatbot.png";
import {Link} from "react-router-dom"
import { getproducts } from "../redux/productReducer/action"
import {Dictaphone} from "./Dictaphone"
import "./css/menproduct.css"

export const MensProducts=({discount})=>{


const [sort,setsort]=useState("")
    const [ham,setham]=useState(false)
    const [three,setthree]=useState(true)
    const [page,setpage]=useState(1)
    const [searchparams]=useSearchParams()
    const location=useLocation()
    const [visible, setVisible] = useState(false)

    // toggle visible
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 120){
        setVisible(true)
      } 
      else if (scrolled <= 120){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', toggleVisible);


const handlesort=(e)=>{
console.log(e.target.value)
setsort(e.target.value)
}
   
    
console.log(searchparams.getAll("color"))

    const data=useSelector((state)=>state.productReducer.products);
    
    
const dispatch=useDispatch()
useEffect(()=>{
    let ob={
        params:{
          brand:searchparams.getAll("brand"),
          color:searchparams.getAll("color"),
      
       
       _sort:"off_price",
       _order:sort
        }
      }


// console.log(data)

dispatch(getproducts(ob))
},[location.search,sort])


const handleham=()=>{
setthree(false)
setham(true)
}

const handlethree=()=>{
    setham(false)
    setthree(true)
}


    return  <>
    <div>
<Dictaphone/>
    <div style={{fontFamily:""}}>
    <Flex justifyContent={"space-between"}>
  <Text marginTop={"0.8%"}>Men's Clothing</Text>
  <Flex gap={"5%"}>
  <Text mt={"4%"}>Sort</Text>
    <Select value={sort} onChange={handlesort} >
        <option>Best Match</option>
        <option value="asc">Price low to high</option>
        <option value="desc">Price High to low</option>
       
    </Select>
    <Flex   gap={"25%"}  mt={"1%"} id="st2">
                    <div id="image1"><Image mt={"20%"} onClick={handleham} w={"50px"}
                            src="https://icon-library.com/images/hamburger-icon-white/hamburger-icon-white-16.jpg"
                            alt=""/></div>
                    <div id="image2"> <Image mt={"20%"} onClick={handlethree} w={"50px"} src="https://cdn-icons-png.flaticon.com/512/747/747327.png" alt=""/></div>
                </Flex>
    </Flex>
  
  </Flex>
{three?<SimpleGrid mt={"5%"} columns={[1,2,3]} h={"400px"} spacing={"2%"}>
{data?.map((item)=>(
    <Box key={item.id} fontSize={"80%"}  boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;">
    <Image  w={"100%"} src={item.images.image1}></Image>
    <Text mt={"2%"} textAlign={"center"}>{item.id}--{item.title}</Text>
    <Text  mt={"2%"} >{item.brand}</Text>
    <Text  mt={"2%"} >${discount?Math.floor(item.off_price-item.off_price/10):item.off_price} <span style={{color:"red"}}>After Coupon</span></Text>
    <del  >${item.price}</del>
    <Text  mt={"2%"} > {+item.rating<=5 && +item.rating>=4?`${item.rating} ★★★★✪`:+item.rating<=4 && +item.rating>=3?`${item.rating} ★★★✪✫`:+item.rating<=3 && +item.rating>=2?`${item.rating} ★★✪✫✫`:+item.rating<=2 && +item.rating>=1?`${item.rating} ★✪✫✫✫`:`${item.rating} ✪✫✫✫✫`}</Text>
   <Link to={`/mens/${item.id}`}> <Button mb={"2%"} colorScheme={"orange"}>View Details</Button></Link>
    </Box>
))}
</SimpleGrid>:<SimpleGrid mt={"2%"} fontFamily=" FONT-FAMILY
    Roboto, Arial, sans-serif"  columns={1} h={"250px"} spacing={"2%"}>
{data?.map((item)=>(
    <Box fontSize={""} height={"250px"}   boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;">
    <Flex  h={"250px"} justifyContent={"space-around"} >
    <Box> <Image  height={"250px"}  src={item.images.image1}></Image></Box>
   <Box w={"30%"} m={"auto"}>
    <Text w={"100%"} mt={"2%"} textAlign={"center"}>{item.title}</Text>
    <Text  mt={"2%"} >{item.brand}</Text>
    <Text  mt={"2%"} >${ discount?Math.floor(item.off_price-item.off_price/10):item.off_price } <span style={{color:"red"}}>After Coupon</span></Text>
    <del  >${item.price}</del></Box>
    <Box m={"auto"}>
    <Text   >
    {+item.rating<=5 && +item.rating>=4?`${item.rating}★★★★✪`:+item.rating<=4 && +item.rating>=3?`${item.rating}★★★✪✫`:+item.rating<=3 && +item.rating>=2?`${item.rating}★★✪✫✫`:+item.rating<=2 && +item.rating>=1?`${item.rating}★✪✫✫✫`:`${item.rating}✪✫✫✫✫`}
    
    </Text>
    <Button mt={"2%"} colorScheme={"orange"}>View Details</Button>
    <br/>
    <Button colorScheme={"green"}>Add To Cart</Button>
    </Box>
    </Flex>
    </Box>
))}
</SimpleGrid>}


    </div>
    <button className="scroll" style={{float:'right',fontSize:"50px",marginRight:"-10%",position:"absolute",top:"80%" ,left:"95%",position:"fixed"}}>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </button>

<Link to="/chatbot">

<Box>
  <Image  style={{float:'right', width:"87px",fontSize:"70px",marginRight:"-18%",position:"absolute",top:"70%" ,left:"93.3%",position:"fixed"}}  src={bot}/>
</Box>
</Link>
    
    </div>

    </>
}