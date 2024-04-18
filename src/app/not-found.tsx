"use client";
import NoSSR from "@/components/no_ssr/NoSSR";
import React from "react";
import Lottie from "lottie-react";
import notFound from "../animation_json/not-found.json";

const Error = () => {
  console.log("error");
  return (
    <NoSSR>
      <div className="h-screen flex items-center">
        <Lottie animationData={notFound} loop={true} />
      </div>
    </NoSSR>
  );
};

export default Error;
