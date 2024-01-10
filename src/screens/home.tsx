import React from 'react';
import {SchoolCard} from '../components/school-card';
import {useSchools} from '../hooks/schools';
import {ScrollView, View} from 'react-native';
import {TeamCard} from '../components/team-card';
import {PlayerCard} from '../components/player-card';
import {useTailwind} from 'tailwind-rn';
import {Text} from '../components/text';
import {CopyRight} from '../components/copyright';

export const HomeScreen = () => {
  const {data: schools} = useSchools();
  const tw = useTailwind();

  const filteredSchools = schools?.filter(school => {
    if (school.primary_color && school.visible && school.logo_url) {
      return true;
    }
  });
  const result = ''.substring(0, 8);

  return (
    <ScrollView>
      <View style={tw('p-4')}>
        <Text size="lg" align="center">
          Teams of the week
        </Text>
        <TeamCard teamId="snap-1182-288" schoolId="snap-1182" showSchoolName />
        <TeamCard teamId="snap-792-588" schoolId="snap-792" showSchoolName />
        <Text>{result}</Text>
        <Text size="lg" align="center">
          Players of the week
        </Text>
        <View style={tw('flex-row gap-4')}>
          <PlayerCard
            schoolId={'snap-1182'}
            teamId={'snap-1182-288'}
            playerId={'Isaac-Brandyberry-7'}></PlayerCard>
          <PlayerCard
            schoolId={'snap-792'}
            teamId={'snap-792-588'}
            playerId={'Kaiden-Koch-'}></PlayerCard>
        </View>
        <View style={tw('flex-row gap-8 flex-wrap justify-evenly')}>
          {filteredSchools?.map(school => (
            <SchoolCard school={school} key={school.id} />
          ))}
        </View>
        <CopyRight yearBuilt="2023" appName={'Student Atheltics'} />
      </View>
    </ScrollView>
  );
};
