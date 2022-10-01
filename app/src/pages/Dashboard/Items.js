import { React, useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Title from "./Title";
import { API_URL } from "../../appHelper";

function preventDefault(e) {
  e.preventDefault();
}

// eslint-disable-next-line react/prop-types
export default function Items({ category }) {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const category = "Phones";
      const result = await axios.get(`${API_URL}/items/by-category/${category}`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzQzZjM4OGYzOTdiMjgzZmQ2MWEwYiIsImlhdCI6MTY2NDYwMTUwMH0.NnunAgI9yGC8eIO7JMMHKBJ-TPy8kNnlYM_Hx9_REks`,
        },
      });
      console.log(result.data);
      setItems(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Title>{category}</Title>
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
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  );
}
