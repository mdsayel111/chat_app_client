"use client";
import Loading from "@/components/shared/loading/Loading";
import { useAppSelector } from "@/lib/redux/hook/hook";
import { setAuthUser } from "@/lib/redux/slices/authUserSlice";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const authState = useAppSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const authUser = authState?.authUser;

  useEffect(() => {
    if (!authUser && loading === false) {
      router.push("/sign_up");
    }
    // set auth user when page load in browser first time
    dispatch(
      localStorage.getItem("authUser")
        ? setAuthUser(JSON.parse(localStorage.getItem("authUser") || "{}"))
        : setAuthUser(null)
    );
    setLoading(false);
  }, [loading]);
  return <>{loading ? <Loading /> : authUser ? children : ""}</>;
};

export default PrivateRoute;
