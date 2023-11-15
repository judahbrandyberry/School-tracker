import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';
import {useSchool, useSchools} from '../hooks/schools';
import {useTeam, useTeams} from '../hooks/teams';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '../../App';
import {PlayerCard} from '../components/player-card';
import {useEvents} from '../hooks/events';
import {Text} from '../components/text';
import {EventCard} from '../components/event-card';

export const TeamScreen = () => {
  const tw = useTailwind();
  const route = useRoute<RouteProp<RootStackParamList, 'Team'>>();
  const params = route.params;
  const {school, isSuccess} = useSchool();
  const {team} = useTeam();
  const {data: events} = useEvents(school?.id, team?.id);
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
          playerId={`${player.first_name}-${player.last_name}-${player.jersey}`}
          key={player.id}
          schoolId={school.id}
          teamId={team.id}
        />
      ))}

      {events?.map(event => (
        <EventCard event={event} />
      ))}
    </ScrollView>
  );
};
