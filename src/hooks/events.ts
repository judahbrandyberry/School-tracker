import {useQuery} from '@tanstack/react-query';
import {Event} from '../models/event';

const getEvents = async (schoolId?: string, teamId?: string) => {
  const response = await fetch(
    `https://www.myschoolsports.us/api/v1/schools/${schoolId}/teams/${teamId}/events.json`,
  );
  return await response.json();
};

export const useEvents = (schoolId?: string, teamId?: string) => {
  console.log(schoolId, teamId);
  return useQuery<Event[]>({
    queryKey: ['events', schoolId, teamId],
    queryFn: () => getEvents(schoolId, teamId),
    enabled: !!schoolId && !!teamId,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};
