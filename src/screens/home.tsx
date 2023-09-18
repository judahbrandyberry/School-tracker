import React, {useEffect, useState} from 'react';
import {SchoolCard} from '../components/school-card';
import {Schools} from '../models';

export const HomeScreen = () => {
  const [schools, setSchools] = useState<Schools>([]);
  useEffect(() => {
    getSchools();
  }, []);
  const getSchools = async () => {
    const response = await fetch(
      'https://www.myschoolsports.us/api/v1/schools.json',
    );
    const jsonResponse = await response.json();
    setSchools(jsonResponse);
  };

  const filteredSchools = schools.filter(school => {
    if (school.primary_color && school.visible && school.logo_url) {
      return true;
    }
  });

  return (
    <>
      {filteredSchools.map(school => (
        <SchoolCard school={school} key={school.id} />
      ))}
    </>
  );
};
