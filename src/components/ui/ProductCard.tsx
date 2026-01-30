import React from "react";
import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import type { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ borderRadius: 3, height: "100%" }}>
      <CardMedia
        component="img"
        height="160"
        image={product.url_image}
        alt={product.name}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://via.placeholder.com/640x360?text=No+Image";
        }}
      />

      <CardContent>
        <Typography variant="subtitle1" fontWeight={800}>
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.category_name} • Stock: {product.stock}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label={product.is_active ? "ACTIVE" : "INACTIVE"}
            color={product.is_active ? "success" : "default"}
            size="small"
          />
          <Typography variant="h6" fontWeight={900}>${product.price}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
