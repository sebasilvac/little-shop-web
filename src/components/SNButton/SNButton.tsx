import { forwardRef, PropsWithChildren } from 'react';
import fixClasses from './helpers';
import {
  BaseButtonPropsWithAs,
  ButtonRefsByTag,
  TagsByButton,
  ButtonWithIcon,
} from './types';
import cn from 'classnames';
import { BUTTON_SIZES, TYPE_BUTTON_SIZES } from './classes';

type PrimaryButtonProps<T extends TagsByButton = 'button'> = {
  label: string;
  full?: boolean;
  size?: keyof TYPE_BUTTON_SIZES;
  isRed?: boolean;
  loading?: boolean;
  isWhite?: boolean;
} & BaseButtonPropsWithAs<T>;

const SNButton = <T extends TagsByButton = 'button'>(
  {
    as,
    className = '',
    loading,
    size = 'm',
    label,
    startIcon,
    endIcon,
    full = true,
    href,
    disabled,
    isRed,
    isWhite,
    ...otherPrimaryButtonProps
  }: PropsWithChildren<PrimaryButtonProps<T>>,
  ref: ButtonRefsByTag[T],
) => {
  let buttonTypeClassNames = `flex justify-center space-x-2 items-center border border-2 ${
    disabled
      ? 'border-primary-disabled'
      : 'bg-slate-100 hover:bg-blue-500 hover:border-blue-700 hover:text-slate-100'
  } text-slate-500 font-bold rounded-lg transition ease-in-out duration-100`;

  if (isRed) {
    buttonTypeClassNames = `border border-2 ${
      disabled
        ? 'border-red-disabled'
        : 'border-red-main hover:bg-red-hovered hover:text-white'
    } text-red-main font-bold py-2 px-4 rounded-lg transition ease-in-out duration-100`;
  }

  if (isWhite) {
    buttonTypeClassNames = `border border-2 ${
      disabled
        ? 'border-gray-disabled'
        : 'border-gray-hovered hover:bg-gray-hovered hover:text-white'
    } text-gray-hovered font-bold py-2 px-4 rounded-lg transition ease-in-out duration-100`;
  }

  if (loading) {
    buttonTypeClassNames = `border border-2 animate-pulse py-2 px-4 rounded-lg transition ease-in-out text-gray-main duration-100`;
  }

  const wrapperClassName = fixClasses(
    cn(buttonTypeClassNames, BUTTON_SIZES[size], { 'w-full': full }),
    className,
  );

  const renderChildren = () =>
    endIcon || startIcon ? (
      <RenderChildrenWithIcon
        // eslint-disable-next-line react/no-children-prop
        children={label}
        startIcon={startIcon}
        endIcon={endIcon}
      />
    ) : (
      <span className="break-words w-full">{label}</span>
    );

  if (as === 'a' || href) {
    const { htmlProps, ...aProps } =
      otherPrimaryButtonProps as PrimaryButtonProps<'a'>;

    return (
      <a
        ref={ref as ButtonRefsByTag['a']}
        href={href}
        className={wrapperClassName}
        {...htmlProps}
        {...aProps}
      >
        {renderChildren()}
      </a>
    );
  }

  const { htmlProps, ...buttonProps } =
    otherPrimaryButtonProps as PrimaryButtonProps<'button'>;

  return (
    <button
      ref={ref as ButtonRefsByTag['button']}
      type="button"
      disabled={disabled}
      className={wrapperClassName}
      {...htmlProps}
      {...buttonProps}
    >
      {renderChildren()}
    </button>
  );
};

const RenderChildrenWithIcon = ({
  startIcon,
  endIcon,
  children,
}: {
  startIcon?: ButtonWithIcon;
  endIcon?: ButtonWithIcon;
  children: string;
}) => {
  const getPropertiesIconButton = (propsIcon: ButtonWithIcon | undefined) => {
    return {
      Icon: propsIcon?.Icon ? propsIcon.Icon : null,
      size: propsIcon?.size ? propsIcon.size : 'small',
    };
  };

  const { Icon: LeftIcon, size: StartSize } =
    getPropertiesIconButton(startIcon);
  const { Icon: RightIcon, size: EndSize } = getPropertiesIconButton(endIcon);
  return (
    <div className="flex w-full justify-center items-center space-x-2">
      {LeftIcon && <LeftIcon fontSize={StartSize} color="inherit" />}
      <span>{children}</span>
      {RightIcon && <RightIcon fontSize={EndSize} color="inherit" />}
    </div>
  );
};

export default forwardRef(SNButton);
