import {useQuery} from 'react-query';
import {Teams} from '../models';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

const getTeams = async (schoolId?: string) => {
  const response = await fetch(
    `https://www.myschoolsports.us/api/v1/schools/${schoolId}/teams.json`,
  );
  return await response.json();
};

export const useTeams = (schoolId?: string) => {
  return useQuery<Teams>({
    queryKey: ['teams', schoolId],
    queryFn: () => getTeams(schoolId),
    enabled: !!schoolId,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export const useTeam = (teamId?: string, schoolId?: string) => {
  const route = useRoute<RouteProp<RootStackParamList, 'Team'>>();
  const {data: teams, ...rest} = useTeams(schoolId || route.params.schoolId);
  const team = teams?.find(team => team.id === (teamId || route.params.teamId));
  return {...rest, team};
};
