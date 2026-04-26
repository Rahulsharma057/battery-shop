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
      </body>
    </html>
  );
}