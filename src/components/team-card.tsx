import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Location, Team} from '../models';
import {useNavigation} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
import {useTeam} from '../hooks/teams';
import {useSchool} from '../hooks/schools';

interface TeamCardProps {
  teamId: string;
  schoolId: string;
  showSchoolName?: boolean;
}

export const TeamCard = ({teamId, schoolId, showSchoolName}: TeamCardProps) => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const {team} = useTeam(teamId, schoolId);
  const {school} = useSchool(schoolId);
  const theme = useColorScheme();
  const color = theme === 'dark' ? 'white' : 'black';

  if (!team || !school) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableOpacity
      style={[
        tw('rounded p-4 bg-white mb-4'),
        theme === 'dark'
          ? {backgroundColor: '#27272a'}
          : {backgroundColor: 'white'},
      ]}
      onPress={() =>
        navigation.navigate('Team', {teamId: team.id, schoolId: team.school_id})
      }>
      <Image
        source={{uri: team.photo_url}}
        style={tw('rounded w-full h-48 overflow-hidden')}
        resizeMode="contain"
      />

      {showSchoolName ? (
        <Text style={[tw('text-sm text-gray-600 mt-4'), {color}]}>
          {school.name}
        </Text>
      ) : null}

      <Text style={[tw('font-bold text-lg'), {color}]}>{team.name}</Text>
      <View style={tw('flex-row')}>
        <View style={[tw('mr-4')]}>
          <Text style={[tw('text-gray-500'), {color}]}>Events</Text>
          <Text style={{color}}>0 Events</Text>
        </View>
        <View style={tw('mr-4')}>
          <Text style={[tw('text-gray-500'), {color}]}>Roster</Text>
          <Text style={{color}}>{team.players.length} Player</Text>
        </View>
        <View style={tw('mr-4')}>
          <Text style={[tw('text-gray-500'), {color}]}>Season</Text>
          <Text style={{color}}>{team.season.name}</Text>
        </View>
        {team.record ? (
          <View>
            <Text style={{color}}>Win: {team.record?.win}</Text>
            <Text style={{color}}>Tie: {team.record?.tie}</Text>
            <Text style={{color}}>Loss: {team.record?.loss}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

TeamCard;
