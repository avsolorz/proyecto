import React from "react";
import {
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { Product } from "../../types/product";

export default function ProductsTable({ items }: { items: Product[] }) {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Producto</TableCell>
          <TableCell>Categoría</TableCell>
          <TableCell align="right">Precio</TableCell>
          <TableCell align="right">Stock</TableCell>
          <TableCell>Estado</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map((p) => (
          <TableRow key={p.id} hover>
            <TableCell>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar
                  src={p.url_image}
                  variant="rounded"
                  sx={{ width: 38, height: 38 }}
                  imgProps={{
                    onError: (e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://via.placeholder.com/80?text=No+Img";
                    },
                  }}
                />
                <div>
                  <Typography fontWeight={800}>{p.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{p.slug}</Typography>
                </div>
              </div>
            </TableCell>

            <TableCell>{p.category_name}</TableCell>
            <TableCell align="right">${p.price}</TableCell>
            <TableCell align="right">{p.stock}</TableCell>

            <TableCell>
              <Chip
                label={p.is_active ? "ACTIVE" : "INACTIVE"}
                size="small"
                color={p.is_active ? "success" : "default"}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
