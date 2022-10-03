/* eslint-disable react/prop-types */
import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../appHelper";

export default function EditCategoryModal({ category }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryObj = {
      id: category._id,
      name,
    };
    try {
      const access = localStorage.getItem("token");
      const result = await axios.put(`${API_URL}/categories/edit`, categoryObj, {
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

  const handleDelete = async (e) => {
    e.preventDefault();
    const categoryObj = { id: category._id };
    try {
      const access = localStorage.getItem("token");
      const result = await axios.put(`${API_URL}/categories/delete`, categoryObj, {
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

  useEffect(() => {
    setName(category.name);
  }, []);

  return (
    <div>
      {name} <EditOutlinedIcon fontSize="small" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
