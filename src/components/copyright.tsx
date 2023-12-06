import {format} from 'date-fns';
import {Text} from './text';
import {useTailwind} from 'tailwind-rn';

interface CopyRightProps {
  yearBuilt: string;
  appName: string;
}

export const CopyRight = ({yearBuilt, appName}: CopyRightProps) => {
  const tw = useTailwind();
  const currentYear = format(new Date(), 'u');

  if (currentYear === yearBuilt) {
    return (
      <Text align="center" style={tw('mt-4')}>
        @ {yearBuilt} {appName}
      </Text>
    );
  }

  return (
    <Text align="center" style={tw('mt-4')}>
      @ {yearBuilt} - {currentYear} {appName}
    </Text>
  );
};

CopyRight;
