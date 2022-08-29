import React, { useEffect, useReducer, useState } from 'react';
import moment, { Moment } from 'moment';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectedProductForBooking, selectProducts } from 'store/Products/selectors';
import { ProductResponse } from 'store/Products/types';
import { DateRangeActionTypes, DateRangeReducer, DefaultDateRangeState } from 'components/DateRangeSelector/DateRangeReducer';
import { SelectChangeEvent } from '@mui/material';
import { selectProductForBooking } from 'store/Products/actions';

const useBookProductLogic = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector(selectedProductForBooking);

  const [dateRangeState, dateRangeDispatch] = useReducer(DateRangeReducer, DefaultDateRangeState);

  const products = useAppSelector(selectProducts);
  const availableProducts = products.filter((p) => p.availability);

  useEffect(() => {
    if(availableProducts) dispatch(selectProductForBooking(availableProducts[0]));
  }, [products]);

  const onProductSelect = (event: SelectChangeEvent) => {
    const productCode = event.target.value as string;
    const product = products.find((p) => p.code === productCode);
    if(product){
        dateRangeDispatch({
            type: DateRangeActionTypes.SET_MIN_DATE,
            payload: {
                date: moment(),
                increment: product.minimum_rent_period ?? 0
            }
        })
        dispatch(selectProductForBooking(product));
    }
  }

  const onDateFromChange = (date: Moment | null) => {
    dateRangeDispatch({
        type: DateRangeActionTypes.SET_DATE_FROM_VALUE,
        payload: {
            date: date ?? moment(),
            increment: selectedProduct ? selectedProduct.minimum_rent_period : 0,
        }
    })
  }

  const onDateToChange = (date: Moment | null) => {
    dateRangeDispatch({
        type: DateRangeActionTypes.SET_DATE_TO_VALUE,
        payload: {
            date: date ?? moment(),
        }
    })
  }
  
  return { open, handleOpen, handleClose, 
    products,
    availableProducts, 
    dateRangeState, 
    onDateFromChange,
    onDateToChange,
    handleProductChange: onProductSelect };
}

export default useBookProductLogic;