import {
  Ref,
  HTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
} from 'react';
import { SvgIconComponent } from '@mui/icons-material';

import { ComponentWithIcon } from '@/components/interfaces';

export type TagsByButton = 'button' | 'a';

export type BaseButtonProps = {
  className?: string;
  id?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export type ButtonRefsByTag = {
  button: Ref<HTMLButtonElement>;
  a: Ref<HTMLAnchorElement>;
};

export type ButtonPropsByTag = {
  button: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    htmlProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  };
  a: {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    htmlProps?: HTMLAttributes<HTMLAnchorElement>;
  };
};

export type BaseButtonPropsWithAs<As extends TagsByButton> = BaseButtonProps & {
  as?: As;
  href?: string;
  target?: string;
  rel?: string;
  htmlFor?: string;
  className?: string;
  startIcon?: ButtonWithIcon;
  endIcon?: ButtonWithIcon;
} & ButtonPropsByTag[As];

export type ButtonWithIcon = {
  Icon?: SvgIconComponent;
  size?: 'small' | 'inherit' | 'large' | 'medium' | undefined;
} & ComponentWithIcon;
