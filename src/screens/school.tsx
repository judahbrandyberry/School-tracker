import {RouteProp, useRoute} from '@react-navigation/native';
import {ScrollView, Text, View} from 'react-native';
import {useSchools} from '../queries /schools';
import {useTeams} from '../queries /teams';
import {useTailwind} from 'tailwind-rn';
import {TeamCard} from '../components/team-card';

export const SchoolScreen = () => {
  const tw = useTailwind();
  const route = useRoute();
  const params = route.params as {id: string};
  const {data: schools} = useSchools();
  const school = schools?.find(school => {
    if (school.id === params.id) {
      return true;
    }
  });
  const {data: teams} = useTeams(school?.id);

  const filteredTeams = teams?.filter(team => {
    if (team.season.name === 'Fall') {
      return true;
    }
  });

  return (
    <ScrollView style={tw('flex-1')}>
      <Text>
        school {params.id} - {school?.name} - {teams?.length}
      </Text>
      <View style={tw('p-4')}>
        {filteredTeams?.map(team => (
          <TeamCard team={team} key={team.id} />
        ))}
      </View>
    </ScrollView>
  );
};
