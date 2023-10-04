import {Image, Text, TouchableOpacity} from 'react-native';
import {Location, School} from '../models';
import {useNavigation} from '@react-navigation/native';

interface SchoolCardProps {
  school: School;
}

export const SchoolCard = ({school}: SchoolCardProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('School', {schoolId: school.id})}>
      <Text
        style={{
          color: school.primary_color,
          marginTop: 20,
          marginLeft: 5,
          textAlign: 'center',
        }}>
        <Image
          source={{uri: school.logo_url}}
          style={{width: 30, height: 30}}
        />
        {school.name} - {school.mascot}
        {'\n'}
        {school.location.address_1}
      </Text>
    </TouchableOpacity>
  );
};

SchoolCard;
