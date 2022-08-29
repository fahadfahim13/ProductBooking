import React from 'react';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'
import ActionButton from 'components/ActionButton'
import ProductSelectionComponent from 'components/ProductSelectionComponent';
import DateRangeSelector from 'components/DateRangeSelector';
import { BookProductProps } from './types';
import { Button, Col, Row } from 'antd';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectedProductForBooking, selectedProductForReturn } from 'store/Products/selectors';
import { bookProduct, returnProduct } from 'store/Products/actions';
import { handleMessage, handleOpenClose } from 'store/Alert/actions';
import Alert from 'components/Alert';
import { selectAlertProp } from 'store/Alert/selectors';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ReturnProduct = (props: BookProductProps) => {
  const {open, label, handleOpen, handleClose, products, handleProductChange } = props;
  const selectedProduct = useAppSelector(selectedProductForReturn);
  const dispatch = useAppDispatch();
  const alert = useAppSelector(selectAlertProp);

  const onSubmit = () => {
    if(selectedProduct) {
      dispatch(returnProduct(selectedProduct));
      dispatch(handleOpenClose(true));
      dispatch(handleMessage("Product Returned"));
    }
    handleClose();
  }

  return (
    <div>
        <ActionButton color="info" value={label} onClick={handleOpen} />
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {label}
            </Typography>
            <br />
            <ProductSelectionComponent products={products} handleChange={handleProductChange} selectedProduct={selectedProduct} />
            <br />
            <Row>
              <Col span={11}></Col>
              <Col span={6}><Button onClick={onSubmit} type="primary">Confirm</Button></Col>
              <Col span={1}></Col>
              <Col span={6}><Button onClick={handleClose}>Cancel</Button></Col>
            </Row>
            
          </Box>
        </Fade>
      </Modal>
      <Alert open={alert.open} message={alert.message} onClose={() => dispatch(handleOpenClose(false))} severity={'success'} />
    </div>
  )
}

export default ReturnProduct;