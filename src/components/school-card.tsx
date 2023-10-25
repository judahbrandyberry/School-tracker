import {Image, Text, TouchableOpacity, useColorScheme} from 'react-native';
import {Location, School} from '../models';
import {useNavigation} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';

interface SchoolCardProps {
  school: School;
}

export const SchoolCard = ({school}: SchoolCardProps) => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const theme = useColorScheme();

  return (
    <TouchableOpacity
      style={tw('items-center w-24 gap-2')}
      onPress={() => navigation.navigate('School', {schoolId: school.id})}>
      <Image source={{uri: school.logo_url}} style={{width: 30, height: 30}} />
      <Text
        numberOfLines={1}
        style={theme === 'dark' ? {color: 'white'} : {color: 'black'}}>
        {school.name.replace('High School', '').replace('Academy', '').trim()}
      </Text>
    </TouchableOpacity>
  );
};

SchoolCard;
