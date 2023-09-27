import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Location, Team} from '../models';
import {useNavigation} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';

interface TeamCardProps {
  team: Team;
}

export const TeamCard = ({team}: TeamCardProps) => {
  const navigation = useNavigation();
  const tw = useTailwind();
  return (
    <TouchableOpacity
      style={tw('rounded p-4 bg-white mb-4')}
      onPress={() => navigation.navigate('team', {id: team.id})}>
      <Image
        source={{uri: team.photo_url}}
        style={tw('rounded w-full h-48 overflow-hidden')}
        resizeMode="contain"
      />
      <Text style={tw('font-bold text-lg mt-4')}>{team.name}</Text>
      <View style={tw('flex-row')}>
        <View style={tw('mr-4')}>
          <Text style={tw('text-gray-500')}>Events</Text>
          <Text>0 Events</Text>
        </View>
        <View style={tw('mr-4')}>
          <Text style={tw('text-gray-500')}>Roster</Text>
          <Text>{team.players.length} Player</Text>
        </View>
        <View style={tw('mr-4')}>
          <Text style={tw('text-gray-500')}>Season</Text>
          <Text>{team.season.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

TeamCard;
