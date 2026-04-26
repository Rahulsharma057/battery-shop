"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    slug: "inverter-battery-guide",
    title: "How to Choose the Right Inverter Battery",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFA3_McRztA_hLQG0l8zqfxWb31hgXDEylAZf0pXRWdZGNfg0e6gXuRjpRH-8x4MjgpbRO24szs8FCJEqFU0KY-XeXRy-nPtyWNj_upZXCzS-z6PMzWUyuUX_8XDppjba_BDqhXzQ=s1360-w1360-h1020-rw",
    date: "10 April 2026",
    desc: "Learn how to select the best inverter battery for your home and avoid common mistakes.",
  },
  {
    id: 2,
    slug: "top-car-batteries-india",
    title: "Top 5 Car Batteries in India",
    image:
      "https://images.jdmagicbox.com/v2/comp/khurja/10/9999pmuldelstds000710/catalogue/chauhan-batteries-gt-road-khurja-battery-manufacturers-y097vn3onc.jpg",
    date: "8 April 2026",
    desc: "Discover the best car batteries that offer long life and great performance.",
  },
  {
    id: 3,
    slug: "tubular-vs-lithium",
    title: "Tubular vs Lithium Battery – Which is Better?",
    image:
      "https://images.jdmagicbox.com/v2/comp/khurja/10/9999pmuldelstds000710/catalogue/chauhan-batteries-gt-road-khurja-battery-manufacturers-exjxqanhjy.jpg",
    date: "5 April 2026",
    desc: "Comparison between tubular and lithium batteries to help you make the right choice.",
  },
];

export default function BlogPage() {
  return (
    <Box sx={{ py: 5, background: "#f8fafc", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} mb={1}>
          Our Blog
        </Typography>

        <Typography mb={4} color="text.secondary">
          Latest tips, guides and battery knowledge ⚡
        </Typography>

        <Grid container spacing={3}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={blog.image}
                  alt={blog.title}
                />

                <CardContent>
                  <Typography variant="caption" color="text.secondary">
                    {blog.date}
                  </Typography>

                  <Typography fontWeight={600} mt={1} mb={1}>
                    {blog.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {blog.desc}
                  </Typography>

                  <Link
                    href={`/blog/${blog.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="small"
                      sx={{
                        textTransform: "none",
                        color: "#16a34a",
                        fontWeight: 600,
                      }}
                    >
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}