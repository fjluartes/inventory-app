/* eslint-disable react/prop-types */
import { React, useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import ItemModal from "./Item/ItemModal";
import EditCategoryModal from "./Category/EditCategoryModal";
import EditItemModal from "./Item/EditItemModal";
import Title from "./Title";
import { API_URL } from "../../appHelper";

export default function Items({ category }) {
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
      <Title>
        <EditCategoryModal category={category} />
      </Title>
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
          {items.map((item) => {
            return !item.isArchived ? (
              <TableRow key={item._id}>
                <TableCell>{item.dateCreated}</TableCell>
                <TableCell>
                  <Link color="primary" href="#">
                    <EditItemModal category={category} item={item} />
                  </Link>
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
              </TableRow>
            ) : null;
          })}
        </TableBody>
      </Table>
      <div style={{ marginTop: "10px" }}>
        <ItemModal sx={{ mt: 3 }} category={category} />
      </div>
    </>
  );
}
