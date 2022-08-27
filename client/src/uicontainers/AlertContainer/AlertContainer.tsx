import React from 'react';
import Alert from 'components/Alert';
import { Props } from 'components/Alert/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAlertProp } from 'store/Alert/selectors';
import { handleOpenClose } from 'store/Alert/actions';

const AlertContainer = () => {
  const alertProp = useAppSelector(selectAlertProp);
  const dispatch = useAppDispatch();
  const ALERT_PROPS: Props[] = [
    {
      open: alertProp.open,
      autoHideDuration: 3000,
      message: alertProp.message,
      onClose: () => {
        dispatch(handleOpenClose(false));
      },
    },
  ];
  return (
    <div>
      {ALERT_PROPS.map((alert) => (
        <div key={alert.message}>
          <Alert {...alert} />
        </div>
      ))}
    </div>
  );
};

export default AlertContainer;
