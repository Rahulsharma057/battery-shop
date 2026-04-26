<<<<<<< HEAD
import Navbar from "@/comonent/Navbar";
import { CartProvider } from "@/context/CardContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
=======
"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { usePathname } from "next/navigation";

import Navbar from "@/components/Battery/Navbar";
import Footer from "@/components/Battery/Footer";

const theme = createTheme({
  palette: {},
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          
          {/* ❌ Admin me Navbar hide */}
          {!isAdmin && <Navbar />}

          <CssBaseline />

          {children}

          {/* ❌ Admin me Footer hide */}
          {!isAdmin && <Footer />}

        </ThemeProvider>
>>>>>>> 4d4b1b3ed58ab0df9a624ec14027cd4502fd1d8b
      </body>
    </html>
  );
}