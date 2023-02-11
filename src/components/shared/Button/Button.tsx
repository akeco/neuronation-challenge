import clsx from 'clsx';

type ButtonProps = {
  variant?: 'outline' | 'fill';
} & JSX.IntrinsicElements['button'];

const OUTLINE = 'outline';
const FILL = 'fill';

const Button = ({ variant = OUTLINE, className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx('cursor-pointer rounded-lg py-1 px-4 inline-block', className, {
        'cursor-default': props.disabled,
        'cursor-default bg-blue-300 hover:bg-blue-300': props.disabled && variant === FILL,
        'border border-solid': variant === OUTLINE,
        'bg-blue-500 hover:bg-blue-700 text-white': variant === FILL,
      })}>
      {children}
    </button>
  );
};

export default Button;
