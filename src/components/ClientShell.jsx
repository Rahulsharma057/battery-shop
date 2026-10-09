"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/Battery/Navbar";
import Footer from "@/components/Battery/Footer";

const theme = createTheme({
  palette: {},
});

export default function ClientShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <ThemeProvider theme={theme}>
      {!isAdmin && <Navbar />}
      <CssBaseline />
      {children}
      {!isAdmin && <Footer />}
      <ToastContainer position="bottom-left" autoClose={2000} />
    </ThemeProvider>
  );
}
