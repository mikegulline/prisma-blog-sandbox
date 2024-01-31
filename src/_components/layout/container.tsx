import { cn } from '@/_utils/cn';

type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet';

type ContainerProps<C extends React.ElementType> = {
  as?: C;
  color?: Rainbow | 'black';
  className?: string;
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  ContainerProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ContainerProps<C>>;

export default function Container<C extends React.ElementType = 'div'>({
  as,
  color,
  children,
  className,
  style,
  ...passProps
}: Props<C>) {
  const Component = as || 'div';

  const inlineStyles = color ? { style: { ...style, color } } : {};

  return (
    <Component
      className={cn('max-w-7xl mx-auto px-6', className)}
      {...passProps}
      {...inlineStyles}
    >
      {children}
    </Component>
  );
}
