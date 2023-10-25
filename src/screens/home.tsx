import React from 'react';
import {SchoolCard} from '../components/school-card';
import {useSchools} from '../hooks/schools';
import {ScrollView, Text, View} from 'react-native';
import {TeamCard} from '../components/team-card';
import {PlayerCard} from '../components/player-card';
import {useTailwind} from 'tailwind-rn';

export const HomeScreen = () => {
  const {data: schools} = useSchools();
  const tw = useTailwind();

  const filteredSchools = schools?.filter(school => {
    if (school.primary_color && school.visible && school.logo_url) {
      return true;
    }
  });

  return (
    <ScrollView>
      <View style={tw('p-4')}>
        <Text>Teams of the week</Text>
        <Text>Player of the week</Text>
        <TeamCard teamId="snap-1182-288" schoolId="snap-1182" showSchoolName />
        <TeamCard teamId="snap-792-588" schoolId="snap-792" showSchoolName />
        <View style={tw('flex-row gap-4')}>
          <PlayerCard
            schoolId={'snap-1182'}
            teamId={'snap-1182-288'}
            playerId={'17811'}></PlayerCard>
          <PlayerCard
            schoolId={'snap-792'}
            teamId={'snap-792-588'}
            playerId={'17849'}></PlayerCard>
        </View>
        <View style={tw('flex-row gap-8 flex-wrap justify-evenly')}>
          {filteredSchools?.map(school => (
            <SchoolCard school={school} key={school.id} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
