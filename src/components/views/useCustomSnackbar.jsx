import React, { useCallback } from 'react';

import { useSnackbar } from 'notistack';
import { SnackbarCloseIcon } from '../../SvgIcons';


const useCustomSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const DEFAULT_VARIANT = 'success';
  const DEFAULT_TIMEOUT = 4000;
  const TRANSITION_DURATION = { enter: 225, exit: 195 };

  const DEFAULT_ACTION = (key) => (
    <SnackbarCloseIcon
      className="cur-p"
      onClick={() => {
        closeSnackbar(key);
      }}
    />
  );

  const showSnackbar = (message, variant = DEFAULT_VARIANT, config = {}) => {
    enqueueSnackbar(message, {
      variant,
      action: DEFAULT_ACTION,
      autoHideDuration:
        DEFAULT_TIMEOUT - TRANSITION_DURATION.enter - TRANSITION_DURATION.exit,
      disableWindowBlurListener: true,
      transitionDuration: TRANSITION_DURATION,
      preventDuplicate: true,
      ...config,
    });
  };

  return { enqueueSnackbar: showSnackbar };
};

export default useCustomSnackbar;