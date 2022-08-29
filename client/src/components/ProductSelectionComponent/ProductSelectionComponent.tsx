import * as React from 'react';
import Select from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import { ProductSelectionProps } from './types';

const ProductSelectionComponent = (props: ProductSelectionProps) => {
  const { products, selectedProduct, handleChange } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
        {selectedProduct && <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedProduct.code}
          label="Select Product"
          onChange={handleChange}
        >
          {products.map((product) => <MenuItem value={product.code}> {product.name} / {product.code} </MenuItem>)}
        </Select>}
      </FormControl>
    </Box>
  );
};

export default ProductSelectionComponent;