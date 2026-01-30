import React from "react";
import { Alert, Typography } from "@mui/material";
import PageContainer from "../components/ui/PageContainer";

export default function SettingsPage() {
  return (
    <PageContainer>
      <Typography variant="h5" fontWeight={900} sx={{ mb: 1 }}>Settings</Typography>
      <Alert severity="info">
        Placeholder. Aquí luego configuras theme, perfil, permisos, etc.
      </Alert>
    </PageContainer>
  );
}
