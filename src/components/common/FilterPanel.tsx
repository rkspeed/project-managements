import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Slider } from '@mui/material';

interface FilterPanelProps {
  category: string;
  setCategory: (cat: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  clearFilters: () => void;
  categories: string[];
  minPrice: number;
  maxPrice: number;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  clearFilters,
  categories,
  minPrice,
  maxPrice,
}) => {
  return (
    <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ width: 200 }}>
        <Slider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue as number[])}
          valueLabelDisplay="auto"
          min={minPrice}
          max={maxPrice}
        />
      </Box>

      <Button variant="outlined" color="secondary" onClick={clearFilters}>
        Clear Filters
      </Button>
    </Box>
  );
};

export default FilterPanel;
