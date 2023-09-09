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

  useEffect(() => {

    console.log('formik', formik.values)
  }, [formik]);

  const resetErrors = () => {
    formik.setErrors({});
  };

  const handleSubmit = async () => {
    formik.handleChange(event);

    console.log('handleChange from function handleSubmit  ')
    console.log('formik.values', formik.values)
    console.log('formik.errors', formik.errors)

    if( actionForm.isCreating ) {
      setIsLoading(true);
      await createFn(formik.values);
    }

    if( actionForm.isEditing ) {
      await updateFn(formik.values);
    }

    setIsLoading(false);
    return true;
  };

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
