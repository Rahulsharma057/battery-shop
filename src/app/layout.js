import { CartProvider } from "@/context/CartContext";
import ClientShell from "@/components/ClientShell";

export const metadata = {
  title: {
    default: "Chauhan Battery House",
    template: "%s | Chauhan Battery House",
  },
  description:
    "Chauhan Battery House, Khurja — car, inverter, bike and lithium batteries at the best prices with genuine warranty.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ClientShell>{children}</ClientShell>
        </CartProvider>
      </body>
    </html>
  );
}
