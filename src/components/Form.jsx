import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allUserContext } from "../App";
import { useSnackbar } from "react-simple-snackbar";

const theme = createTheme();

const LOGIN_DATA = "loginData";

let data;

const USER_DATA = "userData";

export default function Form() {
  const [openSnackbar] = useSnackbar();
  const { storeData } = useContext(allUserContext);

  data = JSON.parse(localStorage.getItem(LOGIN_DATA));

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    let formData = {
      name: data.name,
      email: data.email,
      age: form.get("age"),
      phone: form.get("phone"),
      language: form.get("language"),
    };
    localStorage.setItem(USER_DATA, JSON.stringify(formData));
    storeData(formData);
    openSnackbar("Successfull submitted");
    localStorage.removeItem("loginData");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {data ? <div>Welcome {data.name} </div> : <div> Welcome </div>}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {data ? (
              <Avatar
                alt={data.name}
                src={data.imageUrl}
                sx={{ width: 90, height: 90 }}
              />
            ) : (
              <Avatar />
            )}

            <br />
            <Typography component="h1" variant="h5">
              Fill in the details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {data ? (
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      required
                      fullWidth
                      value={data.name}
                      id="firstName"
                      label="First Name"
                    />
                  ) : (
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  {data ? (
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={data.email}
                    />
                  ) : (
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="age"
                    label="Age"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="language"
                    label="Language preference"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="The above information is true to the best of my knowledge"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    to="/"
                    variant="body2"
                    style={{ textDecoration: "none" }}
                  >
                    Go back
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
