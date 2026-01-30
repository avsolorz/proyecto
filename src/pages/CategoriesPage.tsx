import React from "react";
import { Alert, Typography } from "@mui/material";
import PageContainer from "../components/ui/PageContainer";

export default function CategoriesPage() {
  return (
    <PageContainer>
      <Typography variant="h5" fontWeight={900} sx={{ mb: 1 }}>Categories</Typography>
      <Alert severity="info">
        Placeholder. Aquí luego conectas /categories/ y muestras tabla + paginación.
      </Alert>
    </PageContainer>
  );
}
