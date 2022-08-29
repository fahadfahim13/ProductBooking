import React, { useEffect, useReducer, useState } from 'react';
import moment, { Moment } from 'moment';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectedProductForBooking, selectedProductForReturn, selectProducts } from 'store/Products/selectors';
import { ProductResponse } from 'store/Products/types';
import { DateRangeActionTypes, DateRangeReducer, DefaultDateRangeState } from 'components/DateRangeSelector/DateRangeReducer';
import { SelectChangeEvent } from '@mui/material';
import { selectProductForBooking, selectProductForReturn } from 'store/Products/actions';

const useReturnProductLogic = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector(selectedProductForReturn);

  const [dateRangeState, dateRangeDispatch] = useReducer(DateRangeReducer, DefaultDateRangeState);

  const products = useAppSelector(selectProducts);
  const availableProducts = products.filter((p) => !p.availability);

  useEffect(() => {
    if(availableProducts) dispatch(selectProductForBooking(availableProducts[0]));
  }, [products]);

  const onProductSelect = (event: SelectChangeEvent) => {
    const productCode = event.target.value as string;
    const product = products.find((p) => p.code === productCode);
    if(product){
        dispatch(selectProductForReturn(product));
    }
  }
  
  return { open, handleOpen, handleClose, 
    products,
    availableProducts, 
    dateRangeState,
    handleProductChange: onProductSelect };
}

export default useReturnProductLogic;