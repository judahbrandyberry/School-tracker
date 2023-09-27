import {useQuery} from 'react-query';
import {Teams} from '../models';

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
  });
};
