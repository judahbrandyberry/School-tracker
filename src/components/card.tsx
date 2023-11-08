import {TouchableOpacity, useColorScheme} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface Card {
  children: React.ReactNode;
  onPress: () => void;
}

export const Card = ({children, onPress}: Card) => {
  const tw = useTailwind();
  const theme = useColorScheme();

  return (
    <TouchableOpacity
      style={[
        tw('rounded p-4 bg-white mb-4 flex-1'),
        theme === 'dark'
          ? {backgroundColor: '#27272a'}
          : {backgroundColor: 'white'},
      ]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
