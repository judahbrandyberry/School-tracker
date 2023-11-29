import {TouchableOpacity, useColorScheme} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Text} from './text';

interface Tab {
  name: string;
  selectedName: string;
  onPress: () => void;
}

export const Tab = ({name, selectedName, onPress}: Tab) => {
  const tw = useTailwind();
  const theme = useColorScheme();

  return (
    <TouchableOpacity
      style={
        selectedName === name ? tw('bg-slate-600 p-2 rounded-md') : tw('p-2')
      }
      onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};
