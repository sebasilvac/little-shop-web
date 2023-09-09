import SNButton from '@/components/SNButton';
import { useNotifications } from '@/hooks';
import { Product } from '@/products/interfaces';
import { Box, FormControl, InputLabel, Select, TextField } from '@mui/material';
import React from 'react';

const t = (key: string) => key;

interface ProductFormProps {
  rowSelected: Product;
  disabledInputs: any;
  actionForm: any;
  setActionForm: any;
  formik: any;
  handleSubmit: any;
  isLoading: boolean;
}

export const ProductForm = ({
  rowSelected,
  disabledInputs,
  actionForm,
  setActionForm,
  formik,
  handleSubmit,
  isLoading,
} : ProductFormProps) => {
  const { errorNotification } = useNotifications();


  const handleCancel = () => {
    setActionForm({
      isCreating: false,
      isEditing: false,
    });

    //formik.resetForm();
  };

  const resetForm = () => {
    formik.setValues({});
  };

  return (
    <>
      <Box component={'form'} autoComplete="off" onSubmit={() => {}}>

        <div className="flex md:flex-row flex-col md:gap-6 mb-2">
          <div className="flex flex-col gap-1 p-1 h-full w-full sm:mb-3 md:mb-1">
            <TextField
              id="id"
              name="id"
              label={t('ID')}
              size="small"
              className="z-0 mx-auto w-full"
              disabled={disabledInputs.id}
              error={Boolean(formik.errors.id)}
              helperText={formik.errors.id}
              onChange={formik.handleChange}
              value={rowSelected.id}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-6 mb-2">
          <div className="flex flex-col gap-1 p-1 h-full w-full sm:mb-3 md:mb-1">
            <TextField
              id="code"
              name="code"
              label={t('Código')}
              size="small"
              className="z-0 mx-auto w-full"
              disabled={disabledInputs.code}
              error={Boolean(formik.errors.code)}
              helperText={formik.errors.code}
              onChange={formik.handleChange}
              value={rowSelected.code}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-6 mb-2">
          <div className="flex flex-col gap-1 p-1 h-full w-full sm:mb-3 md:mb-1">
            <TextField
              id="title"
              name="title"
              label={t('Nombre')}
              size="small"
              className="z-0 mx-auto w-full"
              disabled={disabledInputs.title}
              error={Boolean(formik.errors.title)}
              helperText={formik.errors.title}
              onChange={formik.handleChange}
              value={rowSelected.title}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-6 mb-2">
          <div className="flex flex-col gap-1 p-1 h-full w-full sm:mb-3 md:mb-1">
            <TextField
              id="description"
              name="description"
              label={t('Descripción')}
              size="small"
              className="z-0 mx-auto w-full"
              disabled={disabledInputs.description}
              error={Boolean(formik.errors.description)}
              helperText={formik.errors.description}
              onChange={formik.handleChange}
              value={rowSelected.description ?? ''}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-6 mb-2">
          <div className="flex flex-col gap-1 p-1 h-full w-full sm:mb-3 md:mb-1">
            <TextField
              id="price"
              name="price"
              label={t('Precio')}
              size="small"
              className="z-0 mx-auto w-full"
              disabled={disabledInputs.price}
              error={Boolean(formik.errors.price)}
              helperText={formik.errors.price}
              onChange={formik.handleChange}
              value={rowSelected.price ?? ''}
            />
          </div>
        </div>

        

        <div className="md:flex md:flex-row md:gap-6 md:justify-center grid pt-1 justify-items-center gap-2 px-8 pb-3">
          {!actionForm.isCreating && !actionForm.isEditing && (
            <>
              <SNButton
                label={t('Nuevo')}
                onClick={() => {
                  formik.setErrors({});

                  resetForm();

                  setActionForm({
                    isCreating: true,
                    isEditing: false,
                  });
                }}
              />
              <SNButton
                label={t('Editar')}
                onClick={() => {
                  setActionForm({
                    isCreating: false,
                    isEditing: true,
                  });

                  formik.setValues({
                    ...rowSelected,
                  });
                }}
              />
            </>
          )}

          {(actionForm.isCreating || actionForm.isEditing) && (
            <>
              <SNButton
                label={t('Guardar')}
                loading={isLoading}
                onClick={async () => {
                  console.log('Guardar', formik.values)

                  
                  const resultErrors = await formik.validateForm();
                  if (Object.keys(resultErrors).length > 0) {
                    errorNotification(
                      t('Por favor, complete los campos requeridos') as string,
                    );
                    return;
                  }

                  console.log('formik.values', formik.values)
                  handleSubmit();
                }}
              />
              <SNButton
                label={t('Cancelar')}
                onClick={() => {
                  handleCancel();
                  // reloadFinder();
                }}
              />
            </>
          )}
        </div>
      </Box>
    </>
  );
};
