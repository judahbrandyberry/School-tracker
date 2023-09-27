import React, {useEffect, useState} from 'react';
import {SchoolCard} from '../components/school-card';
import {Schools} from '../models';
import {useSchools} from '../queries /schools';
import {ScrollView} from 'react-native';

export const HomeScreen = () => {
  const {data: schools} = useSchools();

  const filteredSchools = schools?.filter(school => {
    if (school.primary_color && school.visible && school.logo_url) {
      return true;
    }
  });

  return (
    <ScrollView>
      {filteredSchools?.map(school => (
        <SchoolCard school={school} key={school.id} />
      ))}
    </ScrollView>
  );
};
