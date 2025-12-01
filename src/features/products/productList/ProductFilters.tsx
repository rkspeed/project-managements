import { TextField, MenuItem, Slider, Box } from "@mui/material";

interface Props {
  search: string;
  onSearch: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
  price: number[];
  onPrice: (v: number[]) => void;
  categories: string[];
}

export default function ProductFilters({
  search,
  onSearch,
  category,
  onCategory,
  price,
  onPrice,
  categories,
}: Props) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <TextField
        label="Search"
        value={search}
        onChange={e => onSearch(e.target.value)}
        size="small"
      />

      <TextField
        select
        label="Category"
        value={category}
        size="small"
        onChange={e => onCategory(e.target.value)}
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((c, i) => (
          <MenuItem key={i} value={c}>
            {c}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ width: 200 }}>
        <Slider
          value={price}
          onChange={(e, val) => onPrice(val as number[])}
          valueLabelDisplay="auto"
          min={0}
          max={300}
        />
      </Box>
    </Box>
  );
}
