"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8d5c05f9-cdb3-4522-add6-f0ebe9db644a");
  }, []);

  return null;
};
