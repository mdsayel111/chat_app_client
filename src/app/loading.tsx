import Loading from "@/components/shared/loading/Loading";
import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* <ImSpinner9 className="text-primary text-8xl animate-spin" /> */}
      <Loading />
    </div>
  );
};

export default Loader;
