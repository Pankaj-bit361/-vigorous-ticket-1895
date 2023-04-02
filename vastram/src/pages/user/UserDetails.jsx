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
const UserDetails = () => {
  const [user, setUser] = useState([]);
  const getUser = () => {
    axios
      .get("https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
    <h1 style={{textAlign:"center", fontSize:"30px", fontWeight:"bold"}}>User Stats</h1>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>User login details</TableCaption>
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th isNumeric>Ph.no</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
          {user && user.map((el)=>(
            <Tr key={el.id} >
              <Td>{el.FirstName}</Td>
              <Td>{el.LastName}</Td>
              <Td isNumeric>{el.Number}</Td>
              <Td>{el.Email}</Td>
            </Tr>
          ))}
  
          </Tbody>

        </Table>
      </TableContainer>
    </div>
  );
};

export default UserDetails;
