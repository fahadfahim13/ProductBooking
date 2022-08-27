import React from 'react';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'
import ActionButton from 'components/ActionButton'
import ProductSelectionComponent from 'components/ProductSelectionComponent';
import { useAppSelector } from 'store/hooks';
import { selectProducts } from 'store/Products/selectors';
import DateRangeSelector from 'components/DateRangeSelector/DateRangeSelector';

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

const BookProduct = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const products = useAppSelector(selectProducts);

  return (
    <div>
        <ActionButton color="success" value="Book Product" onClick={handleOpen} />
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
              Book Product
            </Typography>
            <br />
            <ProductSelectionComponent products={products.filter((p) => p.availability)} />
            <br />
            <DateRangeSelector />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default BookProduct;