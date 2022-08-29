import React from 'react';
import MaterialTable from 'material-table';
import BookProduct from 'components/BookProduct';
import useBookProductLogic from 'components/BookProduct/useBookProductLogic';
import ReturnProduct from 'components/ReturnProduct';
import useReturnProductLogic from 'components/ReturnProduct/useReturnProductLogic';

const ProductContainer = () => {
  const {
    open: openBook,
    handleOpen: handleOpenBook,
    handleClose: handleCloseBook,
    products,
    availableProducts: availableProductsForBooking,
    dateRangeState: dateRangeStateForBooking,
    handleProductChange: handleProductChangeForBooking,
    onDateFromChange: onDateFromChangeForBooking,
    onDateToChange: onDateToChangeForBooking,
  } = useBookProductLogic();

  const {
    open,
    handleOpen,
    handleClose,
    availableProducts,
    handleProductChange,
  } = useReturnProductLogic();

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
        open={openBook}
        label={'Book Product'}
        handleOpen={handleOpenBook}
        handleClose={handleCloseBook}
        products={availableProductsForBooking}
        handleProductChange={handleProductChangeForBooking}
        dateRangeState={dateRangeStateForBooking}
        onDateFromChange={onDateFromChangeForBooking}
        onDateToChange={onDateToChangeForBooking}
      />

      <ReturnProduct
        open={open}
        label={'Return Product'}
        handleOpen={handleOpen}
        handleClose={handleClose}
        products={availableProducts}
        handleProductChange={handleProductChange}
      />

    </div>
  );
};

export default ProductContainer;
