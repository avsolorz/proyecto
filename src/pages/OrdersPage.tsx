import React from "react";
import { Alert, Typography } from "@mui/material";
import PageContainer from "../components/ui/PageContainer";

export default function OrdersPage() {
  return (
    <PageContainer>
      <Typography variant="h5" fontWeight={900} sx={{ mb: 1 }}>Orders</Typography>
      <Alert severity="info">
        Placeholder. Aquí luego conectas /orders/ (si existe) y lo conviertes en CRUD.
      </Alert>
    </PageContainer>
  );
}
