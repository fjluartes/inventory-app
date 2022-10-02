/* eslint-disable react/prop-types */
import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../../appHelper";

export default function EditItemModal({ openModal, category, item }) {
  const [open, setOpen] = useState(openModal);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleClickOpen = () => {
    setOpen(openModal);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemObj = {
      name,
      description,
      quantity,
      category: {
        categoryId: category._id,
        categoryName: category.name,
      },
    };
    try {
      const access = localStorage.getItem("token");
      const result = await axios.put(`${API_URL}/items/edit`, itemObj, {
        headers: {
          authorization: `Bearer ${access}`,
        },
      });
      if (result.status === 200) {
        handleClose();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: result.data.message,
          confirmButtonText: "Back to Inventory",
        }).then(() => {
          setName("");
          setDescription("");
          setQuantity(0);
          window.location.replace("/inventory");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
    } catch (err) {
      // console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            value={item.name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Item Description"
            type="text"
            fullWidth
            variant="standard"
            value={item.description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Item Quantity"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
            disabled
            value={category.name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
