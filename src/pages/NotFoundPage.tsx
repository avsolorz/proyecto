import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../components/ui/PageContainer";

export default function NotFoundPage() {
  return (
    <PageContainer>
      <Typography variant="h5" fontWeight={900} sx={{ mb: 1 }}>404</Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Ruta no encontrada.
      </Typography>
      <Button component={Link} to="/" variant="contained">Volver al Dashboard</Button>
    </PageContainer>
  );
}
