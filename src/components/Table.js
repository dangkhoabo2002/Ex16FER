import { Grid } from "@mui/material";
import React from "react";
import UsersData from "../ListOfUsers";
import { Row } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateUsername } from "../features/Users";

export default function Table() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <div className="container_table">
        <table>
          <tr className="title">
            <th>User</th>
            <th>Change Username</th>
            <th>Actions</th>
          </tr>
          {UsersData.map((user) => (
            <tr>
              <td className="info">
                <p className="name">{user.name}</p>
                <p className="username">{user.username}</p>
              </td>
              <td>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "70%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Input new username..."
                    variant="standard"
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </Box>
              </td>
              <td>
                <div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      dispatch(
                        updateUsername({ id: user.id, username: newUsername })
                      );
                    }}
                  >
                    Contained
                  </Button>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => {
                      dispatch(deleteUser({ id: user.id }));
                    }}
                  >
                    <Delete />
                  </IconButton>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
