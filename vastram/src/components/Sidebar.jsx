import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Text } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <Text>Filters</Text>
      <hr />
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Brand
  </MenuButton>
  <MenuList>
    
    <><input type="checkbox"/> </>
    <br/>
    <><input type="checkbox"/>  </>
    <br/>
    <><input type="checkbox"/> </>
   
  </MenuList>
</Menu>
    </div>
  )
}

export default Sidebar
