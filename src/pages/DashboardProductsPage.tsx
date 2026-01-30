import React from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import PageContainer from "../components/ui/PageContainer";
import ProductCard from "../components/ui/ProductCard";
import ProductsTable from "../components/ui/ProductsTable";
import PaginationBar from "../components/ui/PaginationBar";
import { getProducts } from "../api/productsApi";
import type { Product } from "../types/product";

type ViewMode = "cards" | "table";

export default function DashboardProductsPage() {
  const [items, setItems] = React.useState<Product[]>([]);
  const [count, setCount] = React.useState(0);

  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(5);

  const [search, setSearch] = React.useState("");
  const [view, setView] = React.useState<ViewMode>("cards");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getProducts({ page, pageSize, search: search.trim() || undefined });
      setItems(data.results);
      setCount(data.count);
    } catch (e: unknown) {
      setError("No se pudo cargar productos. Revisa consola / red.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, search]);

  React.useEffect(() => {
    load();
  }, [load]);

  const onPrev = () => setPage((p) => Math.max(1, p - 1));
  const onNext = () => setPage((p) => p + 1);

  const onChangePageSize = (n: number) => {
    setPageSize(n);
    setPage(1);
  };

  return (
    <PageContainer>
      <Stack spacing={1.2} sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight={900}>Dashboard — Productos</Typography>
        <Typography variant="body2" color="text.secondary">
          Consumo API: /products/?page={page}&page_size={pageSize}
        </Typography>
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 2 }}>
        <TextField
          label="Buscar (opcional)"
          placeholder="Laptop, curso, etc."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          size="small"
          fullWidth
        />

        <Box sx={{ minWidth: 260 }}>
          <Tabs
            value={view}
            onChange={(_, v: ViewMode) => setView(v)}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab value="cards" label="Cards" />
            <Tab value="table" label="Tabla" />
          </Tabs>
        </Box>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {items.length === 0 ? (
            <Alert severity="info">No hay productos para mostrar.</Alert>
          ) : view === "cards" ? (
            <Grid container spacing={2}>
              {items.map((p) => (
                <Grid key={p.id} item xs={12} sm={6} md={4}>
                  <ProductCard product={p} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <ProductsTable items={items} />
          )}

          <Divider sx={{ my: 2 }} />

          <PaginationBar
            page={page}
            pageSize={pageSize}
            count={count}
            onPrev={onPrev}
            onNext={onNext}
            onChangePageSize={onChangePageSize}
          />
        </>
      )}
    </PageContainer>
  );
}
