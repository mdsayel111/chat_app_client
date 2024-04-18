import NoSSR from "@/components/no_ssr/NoSSR";
import Lottie from "lottie-react";
import { ImSpinner9 } from "react-icons/im";
import loaderJSON from "../animation_json/loader.json"

const Loader = () => {
  return (
    <NoSSR>
      <div className="h-screen flex items-center">
        <Lottie animationData={loaderJSON} loop={true} />
      </div>
    </NoSSR>
  );
};

export default Loader;
