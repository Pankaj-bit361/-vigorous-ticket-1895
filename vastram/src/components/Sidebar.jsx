import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Checkbox, Input, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Text } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <Text>Filters</Text>
      <hr />
      <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Brand
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


<Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Color
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
     <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Brand
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
     <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Brand
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
     <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Brand
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
     <Menu w={"100%"}>
  <MenuButton bg={"white"} textAlign={"left"} w={"90%"} as={Button} rightIcon={<ChevronDownIcon />}>
    Brand
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
    </div>
  )
}

export default Sidebar
