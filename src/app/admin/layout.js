"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");

    if (!auth) {
      router.push("/admin/login");
    }
  }, []);

  return <>{children}</>;
}