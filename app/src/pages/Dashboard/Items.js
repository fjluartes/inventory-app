/* eslint-disable react/prop-types */
import { React, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import ItemModal from "./ItemModal";
import Title from "./Title";
import { API_URL } from "../../appHelper";

export default function Items({ category, categoryNames }) {
  const [items, setItems] = useState([]);
  const { name } = category;

  useEffect(() => {
    async function fetchData() {
      const access = localStorage.getItem("token");
      const result = await axios.get(`${API_URL}/items/by-category/${name}`, {
        headers: {
          authorization: `Bearer ${access}`,
        },
      });
      setItems(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Title>{name}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.dateCreated}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ marginTop: "10px" }}>
        <ItemModal sx={{ mt: 3 }} categoryNames={categoryNames} />
      </div>
    </>
  );
}
