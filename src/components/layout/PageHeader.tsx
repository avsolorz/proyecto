import { Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {subtitle}
        </Typography>
      )}
    </>
  );
}
