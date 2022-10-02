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

export default function AddCategoryModal() {
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
      name,
    };
    try {
      const access = localStorage.getItem("token");
      const result = await axios.post(`${API_URL}/categories/add`, categoryObj, {
        headers: {
          authorization: `Bearer ${access}`,
        },
      });
      if (result.status === 200) {
        handleClose();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successfully added category",
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

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
