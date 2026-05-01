"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const auth = localStorage.getItem("adminToken");

    if (!auth) {
      router.push("/admin/login");
    }
  }, [router]);

  return <>{children}</>;
}