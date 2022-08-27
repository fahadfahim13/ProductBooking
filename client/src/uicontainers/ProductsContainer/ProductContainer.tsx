import React from 'react';
import MaterialTable from 'material-table';
import { useAppSelector } from 'store/hooks';
import { selectProducts } from 'store/Products/selectors';
import ActionButton from 'components/ActionButton';
import BookProduct from 'components/BookProduct';

const ProductContainer = () => {
  const products = useAppSelector(selectProducts);
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
        actions={[
          (rowData) =>
            rowData.availability
              ? {
                  icon: 'add-comment-rounded',
                  tooltip: 'Book Product',
                  onClick: (event, data) => {
                    console.log(event, data);
                  },
                }
              : {
                  icon: 'reply',
                  tooltip: 'Return Product',
                  onClick: (event, data) => {
                    console.log(event, data);
                  },
                },
        ]}
      />
      <BookProduct />
    </div>
  );
};

export default ProductContainer;
