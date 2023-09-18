import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native';

export const SchoolScreen = () => {
  const {params} = useRoute();
  return <Text>school {params.id} </Text>;
};
