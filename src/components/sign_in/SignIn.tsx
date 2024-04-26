"use client";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import NoSSR from "../no_ssr/NoSSR";
import axiosInstance from "@/lib/axios/instance/instance";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
  palette: { primary: { main: "#00D061" } },
});

export default function SignIn() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const userName = data.get("userName");
      const password = data.get("password");

      // sign in object
      const signUp_Obj = {
        userName,
        password,
      };
      const serverRes = await axiosInstance.post("/auth/sign_in", signUp_Obj);
      localStorage.setItem(
        "authUser",
        JSON.stringify(serverRes?.data?.authUser)
      );
      toast.success(serverRes?.data?.message);
      router.push("/");
    } catch (error: any) {
      if (error.name !== "AxiosError") {
        toast.error("something is wrong!");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{ width: { sm: "90%", md: "40%", height: "100vh" } }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, width: "100%" }}
          >
            <Grid
              container
              sx={{ width: "100%", marginLeft: "0px" }}
              className="space-y-4"
            >
              <Grid xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User name"
                  name="userName"
                  autoComplete="userName"
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#00D061", color: "white" }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                New in this site?{" "}
                <Link href={"/sign_up"} className="text-primary">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
