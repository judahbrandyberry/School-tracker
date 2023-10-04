import {useQuery} from 'react-query';
import {Schools} from '../models';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

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
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export const useSchool = (schoolId?: string) => {
  const route = useRoute<RouteProp<RootStackParamList, 'Team' | 'School'>>();
  const {data: schools, ...rest} = useSchools();
  const school = schools?.find(
    school => school.id === (schoolId || route.params.schoolId),
  );
  return {...rest, school};
};
