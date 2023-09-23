import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { IActionForm, IFormsParams, IState } from './types';
import { useNotifications } from '@/hooks';

export interface InitialValues {
  [key: string]: any;
}

function useForms<T extends IState>({
  initialValues,
  paramsValidator,
  createFn,
  updateFn,
  setDisabledInputs,
  disabledInputs,
  pkey,
}: IFormsParams) {
  const { successNotification, errorNotification } = useNotifications();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [actionForm, setActionForm] = useState<IActionForm>({
    isCreating: false,
    isEditing: false,
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: paramsValidator,
    onSubmit: () => {},
  });

  const resetErrors = () => {
    formik.setErrors({});
  };

  const handleSubmit = async () => {
    formik.handleChange(event);

    const resultErrors = await formik.validateForm();
    if (Object.keys(resultErrors).length > 0) {
      return;
    }

    if (actionForm.isCreating) {
      setIsLoading(true);
      const result = await createFn(formik.values);

      if(result){
        successNotification('Registro creado correctamente');
        formik.resetForm(); //TODO: update position
        return;
      }

      errorNotification('Error al crear el registro');
    }

    if (actionForm.isEditing) {
      const result = await updateFn(formik.values);

      if(result){
        successNotification('Registro actualizado correctamente');
        formik.resetForm(); //TODO: update position
        return;
      }

      errorNotification('Error al editar el registro');
    }

    disableAllKeys(disabledInputs);
    setIsLoading(false);
    return true;
  };

  useEffect(() => {
    if (!pkey) return;
    if (!disabledInputs) return;
    if (!setDisabledInputs) return;

    updateInputs(disabledInputs, pkey, actionForm, setDisabledInputs);
  }, [actionForm]);

  return {
    formik,
    handleSubmit,
    resetErrors,
    actionForm,
    setActionForm,
    isLoading,
  };
}

export default useForms;

const updateInputs = (
  disabledInputs: any,
  pkey: string[],
  actionForm: IActionForm,
  setDisabledInputs: (value: any) => void,
) => {
  const keys = Object.keys(disabledInputs);
  let disabledInputsTemp = { ...disabledInputs };

  if (actionForm.isCreating) {
    disabledInputsTemp = enableAllKeys(disabledInputs);
  }

  if (actionForm.isEditing) {
    // habilitar todos los inputs menos los que son pkey
    keys.forEach((key) => {
      if (pkey.includes(key)) {
        disabledInputsTemp = {
          ...disabledInputsTemp,
          [key]: true,
        };
      } else {
        disabledInputsTemp = {
          ...disabledInputsTemp,
          [key]: false,
        };
      }
    });
  }

  setDisabledInputs(disabledInputsTemp);
};


const disableAllKeys = (disabledInputs: any) => {
  const keys = Object.keys(disabledInputs);
  let disabledInputsTemp = { ...disabledInputs };
  keys.forEach((key) => {
    disabledInputsTemp = {
      ...disabledInputsTemp,
      [key]: true,
    };
  });
  return disabledInputsTemp;
};

const enableAllKeys = (disabledInputs: any) => {
  const keys = Object.keys(disabledInputs);

  let disabledInputsTemp = { ...disabledInputs };
  keys.forEach((key) => {
    disabledInputsTemp = {
      ...disabledInputsTemp,
      [key]: false,
    };
  });
  return disabledInputsTemp;
}