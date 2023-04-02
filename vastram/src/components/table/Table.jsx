// import "./table.scss";
// // import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
// } from '@chakra-ui/react'

// const List = () => {
//   const rows = [
//     {
//       id: 1143155,
//       product: "Acer Nitro 5",
//       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 785,
//       method: "Cash on Delivery",
//       status: "Approved",
//     },
//     {
//       id: 2235235,
//       product: "Playstation 5",
//       img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Michael Doe",
//       date: "1 March",
//       amount: 900,
//       method: "Online Payment",
//       status: "Pending",
//     },
//     {
//       id: 2342353,
//       product: "Redragon S101",
//       img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 35,
//       method: "Cash on Delivery",
//       status: "Pending",
//     },
//     {
//       id: 2357741,
//       product: "Razer Blade 15",
//       img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Jane Smith",
//       date: "1 March",
//       amount: 920,
//       method: "Online",
//       status: "Approved",
//     },
//     {
//       id: 2342355,
//       product: "ASUS ROG Strix",
//       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Harold Carol",
//       date: "1 March",
//       amount: 2000,
//       method: "Online",
//       status: "Pending",
//     },
//   ];
//   return (
//     <TableContainer  className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <Thead>
//           <Tr>
//             <Th className="tableCell">Tracking ID</Th>
//             <Th className="tableCell">Product</Th>
//             <Th className="tableCell">Customer</Th>
//             <Th className="tableCell">Date</Th>
//             <Th className="tableCell">Amount</Th>
//             <Th className="tableCell">Payment Method</Th>
//             <Th className="tableCell">Status</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {rows.map((row) => (
//             <Tr key={row.id}>
//               <Th className="tableCell">{row.id}</Th>
//               <Th className="tableCell">
//                 <div className="cellWrapper">
//                   <img src={row.img} alt="" className="image" />
//                   {row.product}
//                 </div>
//               </Th>
//               <td className="tableCell">{row.customer}</td>
//               <td className="tableCell">{row.date}</td>
//               <td className="tableCell">{row.amount}</td>
//               <td className="tableCell">{row.method}</td>
//               <td className="tableCell">
//                 <span className={`status ${row.status}`}>{row.status}</span>
//               </td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default List;
