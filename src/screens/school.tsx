import {useNavigation} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';
import {useSchool} from '../hooks/schools';
import {useTeams} from '../hooks/teams';
import {useTailwind} from 'tailwind-rn';
import {TeamCard} from '../components/team-card';

export const SchoolScreen = () => {
  const tw = useTailwind();
  const {school} = useSchool();
  const {data: teams} = useTeams(school?.id);
  const navigation = useNavigation();

  navigation.setOptions({
    title: school?.name,
  });

  const filteredTeams = teams?.filter(team => {
    if (team.season.name === 'Fall') {
      return true;
    }
  });

  return (
    <ScrollView style={tw('flex-1')}>
      <View style={tw('p-4')}>
        {filteredTeams?.map(team => (
          <TeamCard teamId={team.id} key={team.id} schoolId={team.school_id} />
        ))}
      </View>
    </ScrollView>
  );
};
