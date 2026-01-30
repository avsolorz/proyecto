import React from "react";
import { Box, Paper } from "@mui/material";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, borderRadius: 3, border: "1px solid rgba(0,0,0,.10)" }}>
        {children}
      </Paper>
    </Box>
  );
}
