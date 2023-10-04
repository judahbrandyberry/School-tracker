import React, {useEffect, useState} from 'react';
import {SchoolCard} from '../components/school-card';
import {Schools} from '../models';
import {useSchools} from '../hooks/schools';
import {ScrollView, Text} from 'react-native';
import {TeamCard} from '../components/team-card';

export const HomeScreen = () => {
  const {data: schools} = useSchools();

  const filteredSchools = schools?.filter(school => {
    if (school.primary_color && school.visible && school.logo_url) {
      return true;
    }
  });

  return (
    <ScrollView>
      <Text>Teams of the week</Text>
      <TeamCard teamId="snap-1182-288" schoolId="snap-1182" showSchoolName />
      <TeamCard teamId="snap-792-588" schoolId="snap-792" showSchoolName />
      {filteredSchools?.map(school => (
        <SchoolCard school={school} key={school.id} />
      ))}
    </ScrollView>
  );
};
