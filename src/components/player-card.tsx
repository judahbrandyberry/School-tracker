import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Player} from '../models/player';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard = ({player}: PlayerCardProps) => {
  const tw = useTailwind();
  return (
    <View style={tw('rounded p-4 bg-white mb-4')}>
      <Text style={tw('font-bold text-lg mt-4')}>
        {player.first_name} {player.last_name}
      </Text>
    </View>
  );
};

PlayerCard;
