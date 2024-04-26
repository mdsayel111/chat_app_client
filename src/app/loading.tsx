"use client";
import NoSSR from "@/components/no_ssr/NoSSR";
import Loading from "@/components/shared/loading/Loading";
import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="w-full lg:w-[92%] h-screen flex items-center justify-center">
      {/* <ImSpinner9 className="text-primary text-8xl animate-spin" /> */}
      <Loading />
    </div>
    // <NoSSR>
    //   <Loading />
    // </NoSSR>
  );
};

export default Loader;
