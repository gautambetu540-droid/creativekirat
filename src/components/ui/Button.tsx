import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn, externalLinkProps } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'group relative inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] motion-reduce:transform-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-electric to-[#2563EB] text-white shadow-[0_8px_30px_-8px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(34,211,238,0.55)]',
  secondary:
    'border border-navy-700 bg-navy-900/60 text-ink hover:-translate-y-0.5 hover:border-aqua/60 hover:bg-navy-800',
  ghost: 'text-mist hover:text-ink',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
    external?: boolean;
  };

export function LinkButton({
  variant = 'primary',
  size = 'lg',
  className,
  children,
  external,
  ...rest
}: LinkButtonProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...(external ? externalLinkProps : {})} {...rest}>
      {children}
    </a>
  );
}

type ActionButtonProps = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export function ActionButton({
  variant = 'secondary',
  size = 'lg',
  className,
  children,
  type = 'button',
  ...rest
}: ActionButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
