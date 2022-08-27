import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import { ProductResponse } from 'store/Products/types';

const ProductSelectionComponent = (props: {products: ProductResponse[]}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const { products } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Product"
          onChange={handleChange}
        >
          {products.map((product) => <MenuItem value={product.id}> {product.name} / {product.code} </MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductSelectionComponent;