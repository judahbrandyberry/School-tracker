import {RouteProp, useRoute} from '@react-navigation/native';
import {ScrollView, Text, View} from 'react-native';
import {useSchool, useSchools} from '../hooks/schools';
import {useTeams} from '../hooks/teams';
import {useTailwind} from 'tailwind-rn';
import {TeamCard} from '../components/team-card';
import {RootStackParamList} from '../../App';

export const SchoolScreen = () => {
  const tw = useTailwind();
  const {school} = useSchool();
  const {data: teams} = useTeams(school?.id);

  const filteredTeams = teams?.filter(team => {
    if (team.season.name === 'Fall') {
      return true;
    }
  });

  return (
    <ScrollView style={tw('flex-1')}>
      <Text>
        school {school?.name} - {teams?.length}
      </Text>
      <View style={tw('p-4')}>
        {filteredTeams?.map(team => (
          <TeamCard teamId={team.id} key={team.id} schoolId={team.school_id} />
        ))}
      </View>
    </ScrollView>
  );
};
