"use client";
import React, { useEffect, useRef } from "react";
import NoSSR from "@/components/no_ssr/NoSSR";
// import Lottie from "lottie-react";
import loaderJSON from "../../../animation_json/loader.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
console.log(import("../../../animation_json/loader.json"));

const Loading = () => {
  return (
    <div className="h-screen flex items-center">
      <Lottie animationData={loaderJSON} loop={true} />
    </div>
  );
};

export default Loading;
