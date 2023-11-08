import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {useSchool} from '../hooks/schools';
import {useTeam} from '../hooks/teams';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '../../App';
import {PlayerCard} from '../components/player-card';
import {usePlayer} from '../hooks/players';

export const PlayerScreen = () => {
  const tw = useTailwind();
  const route = useRoute<RouteProp<RootStackParamList, 'Player'>>();
  const params = route.params;
  const {school, isSuccess} = useSchool();
  const {team} = useTeam();
  const {player} = usePlayer();
  const navigation = useNavigation();

  navigation.setOptions({
    title: `${player?.first_name} ${player?.last_name}`,
  });

  if (!school || !player || !team) {
    return null;
  }

  return (
    <ScrollView style={tw('flex-1')}>
      <PlayerCard
        playerId={`${player.first_name}-${player.last_name}-${player.jersey}`}
        key={player.id}
        schoolId={school.id}
        teamId={team.id}
      />
    </ScrollView>
  );
};
