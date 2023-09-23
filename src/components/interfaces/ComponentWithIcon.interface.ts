import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export interface ComponentWithIcon {
  Icon?: ComponentType<SvgIconProps>;
}
