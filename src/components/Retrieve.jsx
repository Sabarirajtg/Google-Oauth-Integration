import {
  AppBar,
  Button,
  Table,
  TableContainer,
  Toolbar,
  Typography,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function Retrieve() {
  const rows = JSON.parse(localStorage.getItem("allUserData"));

  const clearLogs = () => {
    localStorage.removeItem("allUserData");
    alert("All Logs has been cleared");
    window.location.reload();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div> Welcome </div>
            </Typography>
            <Button color="inherit" onClick={clearLogs}>
              Clear All logs
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Language</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows ? (
                rows.map((row) => (
                  <TableRow
                    key={row.phone}
                    align="center"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" align="center" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.language}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" align="center" scope="row">
                    No
                  </TableCell>
                  <TableCell align="center">Data</TableCell>
                  <TableCell align="center">found</TableCell>
                  <TableCell align="center">in</TableCell>
                  <TableCell align="center">local-storage</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/" variant="body2" style={{ textDecoration: "none" }}>
          Click Here to redirect
          <br />
          Please fill details if no log found in localstorage
        </Link>
      </Box>
    </>
  );
}
