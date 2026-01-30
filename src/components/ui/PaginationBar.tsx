import React from "react";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";

export default function PaginationBar(props: {
  page: number;
  pageSize: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
  onChangePageSize: (size: number) => void;
}) {
  const { page, pageSize, count, onPrev, onNext, onChangePageSize } = props;

  const totalPages = Math.max(1, Math.ceil(count / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", justifyContent: "space-between" }}>
      <Typography variant="body2" color="text.secondary">
        Página {page} de {totalPages} • Total: {count}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography variant="body2" color="text.secondary">Page size:</Typography>
        <Select
          size="small"
          value={pageSize}
          onChange={(e) => onChangePageSize(Number(e.target.value))}
        >
          {[5, 10, 20].map((n) => (
            <MenuItem key={n} value={n}>{n}</MenuItem>
          ))}
        </Select>

        <Button variant="outlined" size="small" onClick={onPrev} disabled={!canPrev}>
          Prev
        </Button>
        <Button variant="contained" size="small" onClick={onNext} disabled={!canNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
