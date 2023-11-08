import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
import {useTeam} from '../hooks/teams';
import {useSchool} from '../hooks/schools';
import {Text} from './text';
import {Card} from './card';

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

  if (!team || !school) {
    return <Text>Loading...</Text>;
  }

  return (
    <Card
      onPress={() =>
        navigation.navigate('Team', {teamId: team.id, schoolId: team.school_id})
      }>
      <Image
        source={{uri: team.photo_url}}
        style={tw('rounded w-full h-48 overflow-hidden')}
        resizeMode="contain"
      />

      {showSchoolName ? (
        <Text style={[tw('text-sm text-gray-600 mt-4')]}>{school.name}</Text>
      ) : null}

      <Text style={[tw('font-bold text-lg')]}>{team.name}</Text>
      <View style={tw('flex-row')}>
        <View style={[tw('mr-4')]}>
          <Text style={[tw('text-gray-500')]}>Events</Text>
          <Text>0 Events</Text>
        </View>
        <View style={tw('mr-4')}>
          <Text style={[tw('text-gray-500')]}>Roster</Text>
          <Text>{team.players.length} Player</Text>
        </View>
        <View style={tw('mr-4')}>
          <Text style={[tw('text-gray-500')]}>Season</Text>
          <Text>{team.season.name}</Text>
        </View>
        {team.record ? (
          <View>
            <Text>Win: {team.record?.win}</Text>
            <Text>Tie: {team.record?.tie}</Text>
            <Text>Loss: {team.record?.loss}</Text>
          </View>
        ) : null}
      </View>
    </Card>
  );
};

TeamCard;
