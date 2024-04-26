"use client";
import { useAppSelector } from "@/lib/redux/hook/hook";
import React, { ReactNode } from "react";

const TitleWraper = ({ children }: { children: ReactNode }) => {
  const state = useAppSelector((state) => state);
  console.log(state)
  return (
    <div className="flex justify-between items-center py-8">{children}</div>
  );
};

export default TitleWraper;
