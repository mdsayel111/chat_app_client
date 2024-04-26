"use client";
import React, { useEffect, useRef } from "react";
import notFound from "../../../animation_json/not-found.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const NotFound = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <Lottie animationData={notFound} loop={true} />
    </div>
  );
};

export default NotFound;
