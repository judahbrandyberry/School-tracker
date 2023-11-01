import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';
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
  const {school, isSuccess} = useSchool();
  const {team} = useTeam();
  const navigation = useNavigation();

  navigation.setOptions({
    title: team?.name,
  });

  if (!school) {
    return null;
  }

  return (
    <ScrollView style={tw('flex-1')}>
      {team?.players?.map(player => (
        <PlayerCard
          playerId={player.id.toString()}
          key={player.id}
          schoolId={school.id}
          teamId={team.id}
        />
      ))}
    </ScrollView>
  );
};
