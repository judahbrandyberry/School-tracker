import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSchool, useSchools} from '../hooks/schools';
import {useTeam, useTeams} from '../hooks/teams';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '../../App';
import {PlayerCard} from '../components/player-card';
import {useEvents} from '../hooks/events';
import {Text} from '../components/text';
import {EventCard} from '../components/event-card';
import ImageModal from 'react-native-image-modal';
import {useState} from 'react';
import {Tab} from '../components/tab';
import {format, isFuture, isPast} from 'date-fns';

export const TeamScreen = () => {
  const tw = useTailwind();
  const route = useRoute<RouteProp<RootStackParamList, 'Team'>>();
  const params = route.params;
  const {school, isSuccess} = useSchool();
  const {team} = useTeam();
  const {data: events} = useEvents(school?.id, team?.id);
  const navigation = useNavigation();
  const [search, onChangeSearch] = useState('');

  navigation.setOptions({
    title: team?.name,
  });

  const pastEvents = events?.filter(event => {
    const start = new Date(event.start);
    if (isPast(start)) {
      if (
        format(start, 'MMMM, dd, yyyy, EEEE').includes(search) ||
        event.opponent_name.includes(search)
      ) {
        return true;
      } else {
        return false;
      }
    }
  });

  const upcomingEvents = events?.filter(event => {
    const start = new Date(event.start);
    if (isFuture(new Date(event.start))) {
      if (
        format(start, 'MMMM, dd, yyyy, EEEE').includes(search) ||
        event.opponent_name.includes(search)
      ) {
        return true;
      } else {
        return false;
      }
    }
  });

  const [tab, setTab] = useState('Players');

  if (!school) {
    return null;
  }

  return (
    <ScrollView style={tw('flex-1')}>
      <ImageModal
        resizeMode="contain"
        imageBackgroundColor="#000000"
        style={{width: '100%', aspectRatio: 1.5}}
        source={{
          uri: team?.photo_url,
        }}
      />
      <View style={tw('flex-row justify-between p-4 items-center')}>
        <Tab
          onPress={() => setTab('Players')}
          selectedName={tab}
          name={'Players'}></Tab>
        <Tab
          onPress={() => setTab('Past Events')}
          selectedName={tab}
          name={'Past Events'}></Tab>
        <Tab
          onPress={() => setTab('Upcoming Events')}
          selectedName={tab}
          name={'Upcoming Events'}></Tab>
      </View>

      {tab === 'Players' ? (
        <View>
          {team?.players?.map(player => (
            <PlayerCard
              playerId={`${player.first_name}-${player.last_name}-${player.jersey}`}
              key={player.id}
              schoolId={school.id}
              teamId={team.id}
            />
          ))}
        </View>
      ) : null}

      {tab === 'Past Events' ? (
        <View>
          <TextInput
            style={tw('border mb-4 border-white rounded-xl text-white p-2')}
            onChangeText={onChangeSearch}
            value={search}></TextInput>

          {pastEvents?.map(event => (
            <EventCard event={event} />
          ))}
        </View>
      ) : null}

      {tab === 'Upcoming Events' ? (
        <View>
          <TextInput
            style={tw('border mb-4  border-white rounded-xl text-white p-2')}
            onChangeText={onChangeSearch}
            value={search}></TextInput>
          {upcomingEvents?.map(event => (
            <EventCard event={event} />
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
};
