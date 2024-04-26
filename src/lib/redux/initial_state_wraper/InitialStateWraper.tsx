"use client";
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../slices/authUserSlice";

const InitialStateWraper = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("set authUser");
    dispatch(setAuthUser(JSON.parse(localStorage.getItem("user") || "{}")));
  }, []);
  return <>{children}</>;
};

export default InitialStateWraper;
