import {RouteProp, useRoute} from '@react-navigation/native';
import {ScrollView, Text, View} from 'react-native';
import {useSchool, useSchools} from '../hooks/schools';
import {useTeam, useTeams} from '../hooks/teams';
import {useTailwind} from 'tailwind-rn';
import {TeamCard} from '../components/team-card';
import {RootStackParamList} from '../../App';
import {PlayerCard} from '../components/player-card';

export const TeamScreen = () => {
  const tw = useTailwind();
  const route = useRoute<RouteProp<RootStackParamList, 'Team'>>();
  const params = route.params;
  const {school} = useSchool();
  const {team} = useTeam();

  return (
    <ScrollView style={tw('flex-1')}>
      <Text>
        school {params.schoolId} - {school?.name} - {team?.name}
      </Text>
      {team?.players?.map(player => (
        <PlayerCard player={player} key={player.id} />
      ))}
    </ScrollView>
  );
};
