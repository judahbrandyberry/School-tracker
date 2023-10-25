interface TextProps {
  color?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  align?: 'left' | 'right' | 'center';
  inverted?: boolean;
  children?: React.ReactNode;
}

export const Text = ({
  size = 'lg',
  color,
  align = 'left',
  inverted,
  children,
}: TextProps) => {
  const textColor = color ?? inverted ? 'white' : 'black';
  return (
    <text style={{color: textColor}} className={`text-${size} text-${align}`}>
      {children}
    </text>
  );
};
