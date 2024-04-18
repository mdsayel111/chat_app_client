"use client";
import React, { useEffect, useRef } from "react";
import NoSSR from "@/components/no_ssr/NoSSR";
import Lottie from "lottie-react";
import loaderJSON from "../../../animation_json/loader.json";

const Loading = () => {
  const ref = useRef<HTMLDivElement>(null);
  console.log(window);
  useEffect(() => {
    console.log("useref");
    console.log(ref.current);
    if (ref.current) {
    }
  }, []);
  return (
    <div ref={ref} className="h-screen flex items-center">
      <Lottie animationData={loaderJSON} loop={true} />
    </div>
  );
};

export default Loading;
