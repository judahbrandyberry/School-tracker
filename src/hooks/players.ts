import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {useTeam} from './teams';

export const usePlayer = (
  playerId?: string,
  teamId?: string,
  schoolId?: string,
) => {
  const route = useRoute<RouteProp<RootStackParamList, 'Player'>>();
  const {team, ...rest} = useTeam(teamId, schoolId);
  const [firstName, lastName, jersey] =
    (playerId ?? route.params.playerId?.toString())?.split('-') ?? [];
  const player = team?.players?.find(
    player =>
      player.first_name === firstName &&
      player.last_name === lastName &&
      player.jersey === jersey,
  );
  return {...rest, player};
};
