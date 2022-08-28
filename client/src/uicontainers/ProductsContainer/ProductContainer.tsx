import React from 'react';
import MaterialTable from 'material-table';
import BookProduct from 'components/BookProduct';
import useBookProductLogic from 'components/BookProduct/useBookProductLogic';

const ProductContainer = () => {
  const {
    open,
    handleOpen,
    handleClose,
    products,
    dateRangeState,
    handleProductChange,
    onDateFromChange,
    onDateToChange,
  } = useBookProductLogic();

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Code', field: 'code' },
          { title: 'Type', field: 'type' },
          { title: 'Available', field: 'availability' },
          { title: 'Need to repair', field: 'needing_repair' },
          {
            title: 'durability',
            field: 'durability',
            render: (rowData) => `${rowData.durability} / ${rowData.max_durability}`,
          },
          { title: 'Milage', field: 'mileage' },
          { title: 'Price per day', field: 'price' },
        ]}
        data={products.map((p) => ({ ...p }))}
        title="All products"
        options={{
          sorting: true,
          pageSize: 10,
          filtering: true,
        }}
      />
      <BookProduct
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        products={products}
        handleProductChange={handleProductChange}
        dateRangeState={dateRangeState}
        onDateFromChange={onDateFromChange}
        onDateToChange={onDateToChange}
      />
    </div>
  );
};

export default ProductContainer;
