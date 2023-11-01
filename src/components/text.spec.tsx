import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {Text} from './text';

const mockedColorscheme = jest.fn();

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  default: mockedColorscheme,
}));

describe('<Text />', () => {
  test('it renders', () => {
    render(<Text>Hello World!</Text>);
    expect(screen.getByText('Hello World!')).toBeTruthy();
  });
  test('if theme is dark and inverted is false, color should be white', () => {
    mockedColorscheme.mockReturnValueOnce('dark');
    render(<Text>Hello World!</Text>);
    expect(screen.getByText('Hello World!')).toHaveStyle({color: 'white'});
  });
  test('if theme is light and inverted is false, color should be black', () => {
    mockedColorscheme.mockReturnValueOnce('light');
    render(<Text>Hello World!</Text>);
    expect(screen.getByText('Hello World!')).toHaveStyle({color: 'black'});
  });
  test('if theme is dark and inverted is true, color should be black', () => {
    mockedColorscheme.mockReturnValueOnce('dark');
    render(<Text inverted={true}>Hello World!</Text>);
    expect(screen.getByText('Hello World!')).toHaveStyle({color: 'black'});
  });
  test('if theme is light and inverted is true, color should be white', () => {
    mockedColorscheme.mockReturnValueOnce('light');
    render(<Text inverted={true}>Hello World!</Text>);
    expect(screen.getByText('Hello World!')).toHaveStyle({color: 'white'});
  });
});
