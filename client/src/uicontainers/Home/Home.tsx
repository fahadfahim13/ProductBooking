import React, { useEffect } from 'react';
import { useAppDispatch } from 'store/hooks';
import { fetchAllProductsAsync } from 'store/Products/thunks';
import ProductContainer from 'uicontainers/ProductsContainer';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, []);

  return (
    <div>
      <ProductContainer />
    </div>
  );
};

export default Home;
