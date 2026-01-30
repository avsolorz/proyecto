import React from "react";
import { Alert, Typography } from "@mui/material";
import PageContainer from "../components/ui/PageContainer";

export default function ReportsPage() {
  return (
    <PageContainer>
      <Typography variant="h5" fontWeight={900} sx={{ mb: 1 }}>Reports</Typography>
      <Alert severity="info">
        Placeholder. Aquí luego agregas charts (ej: ventas, stock, top categorías).
      </Alert>
    </PageContainer>
  );
}
