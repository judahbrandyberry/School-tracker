import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {CopyRight} from './copyright';

describe('<CopyRight />', () => {
  test('it renders', () => {
    render(<CopyRight yearBuilt={'2022'} appName={'Test'} />);
    expect(screen.getByText('@ 2022 - 2023 Test')).toBeTruthy();
  });
  test('it renders when built this year', () => {
    render(<CopyRight yearBuilt={'2023'} appName={'Test'} />);
    expect(screen.getByText('@ 2023 Test')).toBeTruthy();
  });
});
