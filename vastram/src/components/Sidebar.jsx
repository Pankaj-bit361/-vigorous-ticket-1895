import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox,  Menu, MenuButton,   MenuList, MenuOptionGroup, Radio, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sidebar = ({setdiscount}) => {
  const [searchparams,setsearchparams]=useSearchParams()
const [brand,setbrand]=useState(searchparams.getAll("brand")||[])
const [color,setcolor]=useState(searchparams.getAll("color")||[])


const handlechecked=(e)=>{
setdiscount(e.target.checked)
}

  const handlechange=(e)=>{
const value=e.target.value

let newbrand=[...brand]
if (newbrand.includes(value)) {
  newbrand = newbrand.filter((el) => el !== value)
} else {
  newbrand.push(value)
}
setbrand(newbrand)
}


const handlecolor=(e)=>{
  const value=e.target.value
  let newcolor=[...color]
  if (newcolor.includes(value)) {
    newcolor = newcolor.filter((el) => el !== value)
  } else {
    newcolor.push(value)
  }
  setcolor(newcolor)
}


useEffect(()=>{
  let params={}
  brand && (params.brand=brand)
  color && (params.color=color)
setsearchparams(params)
},[brand,color])



  // console.log(brand)

  return (
    <Box>
      <Text mb={"5%"}>Filters</Text>
      <hr />
      <Box mt={"7%"}>
      <Menu  w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Brand
  </MenuButton>
  <MenuList ml={"5%"} textAlign={"left"} w={"100%"}>
    
    <><Checkbox value={"HRX"} m={"5%"} mt={"2%"} defaultChecked={brand.includes("HRX")} onChange={handlechange} type="checkbox"/>HRX</>
    <br/>
    <><Checkbox value={"H&M"}  m={"5%"} mt={"2%"} defaultChecked={brand.includes("H&M")} onChange={handlechange} type="checkbox"/> H&M </>
    <br/>
    <><Checkbox value={"Roadster"} m={"5%"} mt={"2%"}  defaultChecked={brand.includes("Roadster")} onChange={handlechange} type="checkbox"/>Roadster </>
    <br/>
    <><Checkbox  value={"Celfie Design"} m={"5%"} defaultChecked={brand.includes("Celfie Design")} onChange={handlechange} mt={"2%"} type="checkbox"/>Celfie Design </>

   
  </MenuList>
</Menu>
<hr/>

<Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Color
  </MenuButton>
  <MenuList ml={"5%"} textAlign={"left"} w={"100%"}>
    
    <><Checkbox value={"white"}  onChange={handlecolor}  defaultChecked={color.includes("white")} m={"5%"} mt={"2%"} type="checkbox"/>White</>
    <br/>
    <><Checkbox value={"pink"}  onChange={handlecolor} defaultChecked={color.includes("pink")} m={"5%"} mt={"2%"} type="checkbox"/> Pink </>
    <br/>
    <><Checkbox value={"black"} onChange={handlecolor}  defaultChecked={color.includes("black")} m={"5%"} mt={"2%"} type="checkbox"/>Black </>
    <br/>
    <><Checkbox value={"red"} onChange={handlecolor} defaultChecked={color.includes("red")}  m={"5%"} mt={"2%"} type="checkbox"/>Red </>

   
  </MenuList>
</Menu>
<hr/>
     <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Price
  </MenuButton>
  <MenuList ml={"5%"} textAlign={"left"} w={"100%"}>
    
    <><Radio m={"5%"} mt={"2%"} />0$ - 10$</>
    <br/>
    <><Radio  m={"5%"} mt={"2%"} /> 0$ - 10$ </>
    <br/>
    <><Radio  m={"5%"} mt={"2%"} />0$ - 10$ </>
    <br/>
    <><Radio  m={"5%"} mt={"2%"} />0$ - 10$</>

   
  </MenuList>
</Menu>
<hr/>
     <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Size
  </MenuButton>
  <MenuList ml={"5%"} textAlign={"left"} w={"100%"}>
    
    <><Checkbox m={"5%"} mt={"2%"} type="checkbox"/>HRX</>
    <br/>
    <><Checkbox  m={"5%"} mt={"2%"} type="checkbox"/> H&M </>
    <br/>
    <><Checkbox  m={"5%"} mt={"2%"} type="checkbox"/>Roadster </>
    <br/>
    <><Checkbox  m={"5%"} mt={"2%"} type="checkbox"/>Celfie Design </>

   
  </MenuList>
</Menu>
<hr/>
     <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Coupon
  </MenuButton>
   <MenuList ml={"5%"} textAlign={"center"} w={"100%"}>
    
    <><Checkbox onChange={handlechecked} m={"5%"} mt={"2%"} type="checkbox"/>10% Discount for New User </>

  </MenuList> 
</Menu>
<hr/>
     <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Sold By
  </MenuButton>
  
</Menu>
</Box>
    </Box>
  )
}

