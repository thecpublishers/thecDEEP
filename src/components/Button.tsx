import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon, type IconName } from './Icon';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light';
type Size = 'default' | 'small';

type SharedProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconPosition?: 'start' | 'end';
  className?: string;
};

function buttonClasses(variant: Variant, size: Size, className: string) {
  return `button button--${variant}${size === 'small' ? ' button--small' : ''} ${className}`.trim();
}

function ButtonContent({
  children,
  icon,
  iconPosition = 'end',
}: Pick<SharedProps, 'children' | 'icon' | 'iconPosition'>) {
  return (
    <>
      {icon && iconPosition === 'start' ? <Icon name={icon} size={17} /> : null}
      <span>{children}</span>
      {icon && iconPosition === 'end' ? <Icon name={icon} size={17} /> : null}
    </>
  );
}

type ButtonLinkProps = SharedProps & {
  to: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'end',
  className = '',
  external = false,
  ariaLabel,
}: ButtonLinkProps) {
  const isExternal = external || /^(https?:|mailto:|tel:)/.test(to);
  const classes = buttonClasses(variant, size, className);

  if (isExternal) {
    return (
      <a
        href={to}
        className={classes}
        aria-label={ariaLabel}
        {...(to.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <ButtonContent icon={icon} iconPosition={iconPosition}>
          {children}
        </ButtonContent>
      </a>
    );
  }

  return (
    <Link to={to} className={classes} aria-label={ariaLabel}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </Link>
  );
}

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: 'button' | 'submit' | 'reset';
  };

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'end',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...props}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}
