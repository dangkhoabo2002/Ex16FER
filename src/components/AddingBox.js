import React from "react";
import { Link } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { addUser } from "../features/Users";
import { useDispatch } from "react-redux";

export default function AddingBox() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div>
      <Box
        sx={{
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4"> Add User</Typography>
        <TextField
          label="Name"
          id="name"
          name="name"
          margin="normal"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          label="Username"
          id="username"
          name="username"
          type="username"
          margin="normal"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ mt: 2, width: "43%" }}
          onClick={() => {
            dispatch(addUser({ id: 0, name: name, username: username }));
          }}
        >
          ADD USER
        </Button>
      </Box>
    </div>
  );
}
