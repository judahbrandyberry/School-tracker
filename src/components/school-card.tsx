import {Image, TouchableOpacity} from 'react-native';
import {School} from '../models';
import {useNavigation} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
import {Text} from './text';

interface SchoolCardProps {
  school: School;
}

export const SchoolCard = ({school}: SchoolCardProps) => {
  const navigation = useNavigation();
  const tw = useTailwind();

  return (
    <TouchableOpacity
      style={tw('items-center w-24 gap-2')}
      onPress={() => navigation.navigate('School', {schoolId: school.id})}>
      <Image
        source={{uri: school.logo_url}}
        style={{width: 50, height: 40}}
        resizeMode="contain"
      />
      <Text numberOfLines={1}>
        {school.name.replace('High School', '').replace('Academy', '').trim()}
      </Text>
    </TouchableOpacity>
  );
};

SchoolCard;
