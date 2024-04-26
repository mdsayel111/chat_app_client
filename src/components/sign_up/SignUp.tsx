"use client";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Link from "next/link";
import * as React from "react";
import toast from "react-hot-toast";
import NoSSR from "../no_ssr/NoSSR";
import axiosInstance from "@/lib/axios/instance/instance";
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

export default function SignUp() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const fullName = data.get("fullName");
      const userName = data.get("userName");
      const fileInput = data.get("fileInput") || "";
      const password = data.get("password");

      // save img in imgBB
      const imgBB_FormData = new FormData();
      imgBB_FormData.append("image", fileInput);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.NEXT_PUBLIC_IMG_BB_CLIENT_SECRET}`,
        imgBB_FormData
      );
      // get img url
      const imgUrl = res?.data?.data?.url;
      // sign up object
      const signUp_Obj = {
        fullName,
        userName,
        profilePic: imgUrl,
        password,
      };
      const serverRes = await axiosInstance.post("/auth/sign_up", signUp_Obj);
      toast.success(serverRes?.data?.message);
      router.push("/sign_in");
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
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
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
              className="space-y-2"
              item={true}
            >
              <TextField
                autoComplete="given-name"
                name="fullName"
                required
                className="w-full"
                id="fullName"
                label="Full Name"
                autoFocus
                color="primary"
              />
              <Grid xs={12} item={true}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User name"
                  name="userName"
                  autoComplete="userName"
                />
              </Grid>
              <input
                type="file"
                name="fileInput"
                id="fileInput"
                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-primary file:border-0
    file:me-4
    file:py-3 file:px-4 cursor-pointer
   "
              />
              <Grid xs={12} item={true}>
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "#00D061",
                        "&.Mui-checked": {
                          color: "#00D061",
                        },
                      }}
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?
                <Link href={"/sign_in"} className="text-primary">
                  Sign In
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
