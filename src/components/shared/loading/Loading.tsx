"use client";
import dynamic from "next/dynamic";
import loaderJSON from "../../../animation_json/loader.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Loading = () => {
  return (
    <div className="w-full lg:w-[92%] h-screen justify-center flex items-center">
      <Lottie animationData={loaderJSON} loop={true} />
    </div>
  );
};

export default Loading;
