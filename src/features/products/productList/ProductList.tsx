import './ProductList.css'
import { useEffect, useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchProducts } from "../productSlice";
import {
  Box,
  TextField,
  MenuItem,
  Slider,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


const ProductList = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((s) => s.products);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = useMemo(() => {
    const unique = ["All", ...new Set(items.map((p) => p.category))];
    return unique;
  }, [items]);

  const filtered = items.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    const matchesPrice =
      p.price >= priceRange[0] && p.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "Image",
      width: 90,
      renderCell: (params) => (
        <img src={params.value} alt="" className="product-img" />
      ),
    },
    { field: "name", headerName: "Product Name", width: 220 },
    { field: "category", headerName: "Category", width: 140 },
    { field: "price", headerName: "Price ($)", width: 110 },
    { field: "stock", headerName: "Stock", width: 110 },
    {
      field: "active",
      headerName: "Status",
      width: 140,
      renderCell: (params) => (
        <span className={params.value ? "active" : "inactive"}>
          {params.value ? "Active" : "Inactive"}
        </span>
      ),
    },
  ];

  return (

    <Box className="products-container">
      <Box className="content-box">
        <Paper elevation={2} className="top-filters">

          {/* Search */}
          <TextField
            fullWidth
            label="Search product..."
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category */}
          <TextField
            select
            label="Category"
            size="small"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>

          {/* Price Range */}
          <div>
            <div className="price-label">Price Range ($)</div>
            <Slider
              value={priceRange}
              max={500}
              onChange={(_, v) => setPriceRange(v as number[])}
            />
          </div>

        </Paper>

        {/* DATA GRID */}
        <div className="data-grid-wrapper">
          <DataGrid
            rows={filtered}
            columns={columns}
            loading={status === "loading"}
            pagination
            pageSizeOptions={[5, 10, 20]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            disableRowSelectionOnClick
            className='grid-row'
            onRowClick={(params) => navigate(`/products/${params.row.id}`)}
          />
        </div>

      </Box>
    </Box>
  );

};

export default ProductList;
