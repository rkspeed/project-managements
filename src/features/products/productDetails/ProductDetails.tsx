import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchProductById, updateProduct } from "./../productSlice";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedProduct, status } = useAppSelector((s) => s.products);

  const [stock, setStock] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [id]);

  useEffect(() => {
    if (selectedProduct) {
      setStock(selectedProduct.stock);
      setActive(selectedProduct.active);
    }
  }, [selectedProduct]);

  if (status === "loading" || !selectedProduct) {
    return <Typography>Loading...</Typography>;
  }
  const handleSave = () => {
    dispatch(
      updateProduct({
        id: selectedProduct.id,
        stock,
        active
      })
    )
      .unwrap() // wait for success
      .then(() => {
        navigate("/products"); // go back after success
      })
      .catch((err) => {
        console.error("Update failed:", err);
      });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3, maxWidth: 700, margin: "0 auto" }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Product Details
        </Typography>

        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          style={{
            width: 150,
            height: 150,
            borderRadius: 12,
            objectFit: "cover",
            marginBottom: 20,
          }}
        />

        <Typography variant="h6">{selectedProduct.name}</Typography>
        <Typography>Category: {selectedProduct.category}</Typography>
        <Typography>Price: ${selectedProduct.price}</Typography>
        <Typography>Description: {selectedProduct.description}</Typography>

        <Box mt={3}>
          <TextField
            label="Stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            fullWidth
            margin="normal"
          />

          <Box display="flex" alignItems="center" gap={2}>
            <Typography>Status:</Typography>
            <Switch checked={active} onChange={(e) => setActive(e.target.checked)} />
            <Typography>{active ? "Active" : "Inactive"}</Typography>
          </Box>

          <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductDetailsPage;
