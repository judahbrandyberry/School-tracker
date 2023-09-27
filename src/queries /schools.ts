import {useQuery} from 'react-query';
import {Schools} from '../models';

const getSchools = async () => {
  const response = await fetch(
    'https://www.myschoolsports.us/api/v1/schools.json',
  );
  return await response.json();
};

export const useSchools = () => {
  return useQuery<Schools>({
    queryKey: ['schools'],
    queryFn: getSchools,
  });
};
