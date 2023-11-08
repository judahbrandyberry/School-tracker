import {TouchableOpacity, View, useColorScheme} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {useNavigation} from '@react-navigation/native';
import {useSchool} from '../hooks/schools';
import {usePlayer} from '../hooks/players';
import {Text} from './text';
import {Card} from './card';

interface PlayerCardProps {
  schoolId: string;
  teamId: string;
  playerId: string;
}

export const PlayerCard = ({playerId, schoolId, teamId}: PlayerCardProps) => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const {school} = useSchool(schoolId);
  const {player} = usePlayer(playerId, teamId, schoolId);
  const theme = useColorScheme();

  return (
    <Card
      onPress={() =>
        navigation.navigate('Player', {
          playerId,
          teamId,
          schoolId,
        })
      }>
      <Text style={[tw('font-bold text-lg mt-4')]}>
        {player?.first_name} {player?.last_name} {player?.jersey}
      </Text>
      <Text style={[tw('font-bold text-lg')]}>{player?.grad_year}</Text>
      <Text>
        {player?.height} {player?.weight} {player?.position}
      </Text>
    </Card>
  );
};

PlayerCard;
