import {useNavigation} from '@react-navigation/native';
import {Card} from './card';
import {Event} from '../models/event';
import {Text} from './text';
import {useTailwind} from 'tailwind-rn';
import {format} from 'date-fns';
import {useSchool} from '../hooks/schools';
import {View} from 'react-native';

interface EventCardProps {
  event: Event;
}

export const EventCard = ({event}: EventCardProps) => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const [date, time] = event.start.split('T');
  const [hour, minute] = time.split(':');
  const ampm = parseInt(hour) >= 12 ? 'PM' : 'AM';
  const {school} = useSchool();

  return (
    <Card onPress={() => navigation.navigate('Event', event)}>
      <View style={tw('flex-row')}>
        <View>
          <Text>{school?.name}</Text>
          <Text>{event.name}</Text>
        </View>
        <View style={tw('flex-1')}>
          <Text style={tw('font-bold')} align="center" size="xl">
            {format(new Date(event.start), 'MMMM, dd, yyyy')}
          </Text>
          <Text style={tw('font-bold')} align="center" size="xl">
            {format(new Date(event.start), 'h:mm a')}
          </Text>
        </View>
      </View>
    </Card>
  );
};
