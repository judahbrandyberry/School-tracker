import {TouchableOpacity, View, useColorScheme} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Player} from '../models/player';
import {useNavigation} from '@react-navigation/native';
import {useSchool} from '../hooks/schools';
import {usePlayer} from '../hooks/players';
import {Text} from './text';

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
    <TouchableOpacity
      style={tw('flex-1')}
      onPress={() =>
        navigation.navigate('Player', {
          playerId,
          teamId,
          schoolId,
        })
      }>
      <View
        style={[
          tw('rounded p-4 bg-white mb-4'),
          theme === 'dark'
            ? {backgroundColor: '#27272a'}
            : {backgroundColor: 'white'},
        ]}>
        <Text style={[tw('font-bold text-lg mt-4')]}>
          {player?.first_name} {player?.last_name} {player?.jersey}
        </Text>
        <Text style={[tw('font-bold text-lg')]}>{player?.grad_year}</Text>
        <Text>
          {player?.height} {player?.weight} {player?.position}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

PlayerCard;
