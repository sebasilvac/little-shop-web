import { useState } from 'react';

import { useAppDispatch } from '@/store';
import {
  addProductPicking,
  deleteProductPicking,
} from '@/store/slices/products';
import { Product } from '../interfaces';

interface KeyActions {
  mode: ModeType;
  handleKeyPress: (e: any) => void;
  pickProduct: (product: Product) => void;
}

type ModeType = 'add' | 'delete';
enum Mode {
  ADD = 'add',
  DELETE = 'delete',
}

const useKeyActions = (): KeyActions => {
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState<ModeType>(Mode.ADD);

  const handleKeyPress = (e: any) => {
    console.log('KEY:', e.key);

    switch (e.key) {
      case 'Backspace':
        if (mode === Mode.DELETE) {
          setMode(Mode.ADD);
          break;
        }

        setMode(Mode.DELETE);
        break;
      default:
        break;
    }
  };

  const pickProduct = (product: Product) => {
    switch (mode) {
      case 'add':
        dispatch(addProductPicking(product));
        break;
      case 'delete':
        dispatch(deleteProductPicking(product));
        break;
      default:
        break;
    }

    setMode(Mode.ADD);
  };

  return {
    mode,
    handleKeyPress,
    pickProduct,
  };
};

export default useKeyActions;
