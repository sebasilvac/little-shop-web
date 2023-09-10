export interface IFormsParams {
  initialValues: any;
  paramsValidator: any;
  createFn: (values: any) => Promise<any>;
  updateFn: (values: any) => Promise<any>;
  deleteFn?: (values: any) => Promise<any>;
  setDisabledInputs?: any;
  disabledInputs?: any;
  pkey?: string[];
};

export interface IActionForm {
  isCreating: boolean;
  isEditing: boolean;
}

export interface IState {};

type IChangeInput = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
