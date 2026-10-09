"use client";

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "@/context/CartContext";

const SHOP_WHATSAPP = "919411835880";

export default function CartDrawer({ open, onClose }) {
  const { items, removeFromCart, updateQty, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    const lines = items.map(
      (i) => `• ${i.name} x${i.qty} — ₹${i.price * i.qty}`,
    );

    const text = `🛒 *New Order Request*

${lines.join("\n")}

💰 *Total:* ₹${totalPrice}

-------------------------
*Please contact customer for order confirmation.*`;

    window.open(
      `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: { xs: 300, sm: 360 }, display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
          <Typography fontWeight={700}>Your Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
          {items.length === 0 ? (
            <Typography color="text.secondary" textAlign="center" mt={4}>
              Your cart is empty
            </Typography>
          ) : (
            <Stack spacing={2}>
              {items.map((item) => (
                <Box
                  key={item._id}
                  sx={{ display: "flex", gap: 1.5, borderBottom: "1px solid #eee", pb: 1.5 }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 56, height: 56, objectFit: "cover", borderRadius: 1.5 }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography fontSize={13} fontWeight={600} noWrap>
                      {item.name}
                    </Typography>
                    <Typography fontSize={13} color="green" fontWeight={600}>
                      ₹{item.price * item.qty}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                      <IconButton size="small" onClick={() => updateQty(item._id, item.qty - 1)}>
                        <RemoveIcon fontSize="inherit" />
                      </IconButton>
                      <Typography fontSize={13}>{item.qty}</Typography>
                      <IconButton size="small" onClick={() => updateQty(item._id, item.qty + 1)}>
                        <AddIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        sx={{ ml: "auto" }}
                        onClick={() => removeFromCart(item._id)}
                      >
                        <DeleteOutlineIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {items.length > 0 && (
          <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
              <Typography fontWeight={600}>Total</Typography>
              <Typography fontWeight={700} color="green">
                ₹{totalPrice}
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#16a34a", mb: 1, "&:hover": { bgcolor: "#15803d" } }}
              onClick={handleCheckout}
            >
              Checkout via WhatsApp
            </Button>
            <Button fullWidth variant="text" color="error" size="small" onClick={clearCart}>
              Clear Cart
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
