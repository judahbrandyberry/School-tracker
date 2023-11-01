import {Text as RNText, useColorScheme} from 'react-native';
import type {TextProps as RNTextProps} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const textSizeOptions = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const textAlignOptions = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

interface TextProps extends RNTextProps {
  color?: string;
  size?: keyof typeof textSizeOptions;
  align?: keyof typeof textAlignOptions;
  inverted?: boolean;
  children?: React.ReactNode;
}

export const Text = ({
  size = 'lg',
  color,
  align = 'left',
  inverted,
  children,
  style,
  ...rest
}: TextProps) => {
  const theme = useColorScheme();
  let textColor = color;
  if (theme === 'dark' && !inverted) {
    textColor = 'white';
  }

  if (theme === 'light' && !inverted) {
    textColor = 'black';
  }

  if (theme === 'dark' && inverted) {
    textColor = 'black';
  }

  if (theme === 'light' && inverted) {
    textColor = 'white';
  }

  if (color) {
    textColor = color;
  }

  const tw = useTailwind();
  return (
    <RNText
      style={[
        tw(`${textSizeOptions[size]} ${textAlignOptions[align]}`),
        {color: textColor},
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};
