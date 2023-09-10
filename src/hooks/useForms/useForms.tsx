import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { IActionForm, IFormsParams, IState } from './types';

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

    console.log('handleChange from function handleSubmit  ');
    console.log('formik.values', formik.values);
    console.log('formik.errors', formik.errors);

    if (actionForm.isCreating) {
      setIsLoading(true);
      await createFn(formik.values);
    }

    if (actionForm.isEditing) {
      await updateFn(formik.values);
    }

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
    // habilitar todos los inputs
    keys.forEach((key) => {
      disabledInputsTemp = {
        ...disabledInputsTemp,
        [key]: false,
      };
    });
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
