import {useQuery} from '@tanstack/react-query';
import {Teams} from '../models';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {useTeam} from './teams';

const getTeams = async (schoolId?: string) => {
  const response = await fetch(
    `https://www.myschoolsports.us/api/v1/schools/${schoolId}/teams.json`,
  );
  return await response.json();
};

export const usePlayer = (
  playerId?: string,
  teamId?: string,
  schoolId?: string,
) => {
  const route = useRoute<RouteProp<RootStackParamList, 'Player'>>();
  const {team, ...rest} = useTeam(teamId, schoolId);
  const player = team?.players?.find(
    player => player.id.toString() === (playerId || route.params.playerId),
  );
  return {...rest, player};
};
